
//test case to add server
it('should add a server ', function () {
    serverArr = []
    addServer(serverArr)
    assert(serverArr.length==1);

  });

  //test case to remove server
  it('should remove a server ', function () {
    serverArr = ["server1"]
    removeServer(serverArr)
    assert(serverArr.length==0);

  });