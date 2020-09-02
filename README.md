https://www.dappuniversity.com/articles/blockchain-app-tutorial
https://youtu.be/rzvk2kdjr2I

# compile contracts
```
truffle compile
```

# how to communicate with BlockChain(local)
```
# 1. run ganache

# 2. migrate with the following command
truffle migrate --reset

# 3. start truffle console
truffle console

# get contract info
todolist = await ToDoList.deployed()

# get contract address
todolist.address

# get task info
task = await todolist.tasks(1)
task.id.toNumber()
task.content
```

# run local server for frontend
```
npm run dev
# then we can see the contracts on the blockchain from the browser.
```

# run tests
```
truffle test
```
