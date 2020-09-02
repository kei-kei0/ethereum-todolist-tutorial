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
});
