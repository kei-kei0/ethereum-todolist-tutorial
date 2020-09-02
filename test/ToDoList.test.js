const ToDoList = artifacts.require("ToDoList");

contract('ToDoList', (accounts) => {
    before(async () => {
        this.todolist = await ToDoList.deployed()
    })

    it('deploys successfully', async() => {
        const address = await this.todolist.address;
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
        console.log("address: ", address)
    });

    it('list tasks', async () => {
        const taskCount = await this.todolist.getTaskCount()
        const task = await this.todolist.tasks(taskCount);
        console.log(task)
        assert.equal(task.id.toNumber(), taskCount.toNumber())
        assert.equal(task.content, 'Check out dappuniv')
        assert.equal(task.completed, false)
        assert.equal(taskCount.toNumber(), 1)
    })

    it('create tasks', async () => {
        const result = await this.todolist.createTask('A new task');
        const taskCount =  await this.todolist.getTaskCount();
        assert.equal(taskCount, 2)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(), 2)
        assert.equal(event.content, 'A new task')
        assert.equal(event.completed, false)
    })
});
