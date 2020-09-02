https://www.dappuniversity.com/articles/blockchain-app-tutorial
https://youtu.be/rzvk2kdjr2I

# how to communicate with BlockChain(local)
```
# 1. run ganache

# 2. migrate with the following command
truffle migrate

# 3. start truffle console
truffle console

# get contract info
todolist = await ToDoList.deployed()

# get contract address
todolist.address

# add taskCount
todolist.addTaskCount()

# get taskCount
let cnt = await todolist.get()
cnt.toNumber()
```
