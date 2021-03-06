# overview 
   文件 I/O 是对标准 POSIX 函数的简单封装。 通过 require('fs') 使用该模块。 所有的方法都有异步和同步的形式。   

  **该文档只写API的粗略功能，具体功能还是要查看[nodejs 官方文档](http://nodejs.cn/api/fs.html)**

+ 测试 path 指定的文件或目录的mode指定的用户权限，成功时无动作，失败是返回错误信息，同步方法需要用try catch捕捉；
  - fs.access(path[, mode], callback)  
  - fs.accessSync(path[, mode])  
  
+ 追加数据到一个文件，如果文件不存在则创建文件
  - fs.appendFile(file, data[, options], callback)  
  - fs.appendFileSync(file, data[, options])  

+ 改变文件或文件夹的权限,文件的权限可以参考具体文档  
  - fs.chmod(path, mode, callback)  
  - fs.chmodSync(path, mode) 

+ 更改文件权限,文件的权限可以参考具体文档  
  - fs.fchmod(fd, mode, callback)  
  - fs.fchmodSync(fd, mode)   

+ mac 下的chmod 
  - fs.lchmod(path, mode, callback)  
  - fs.lchmodSync(path, mode) 

+ 改变文件和文件夹的所有者和群组  
  - fs.chown(path, uid, gid, callback)  
  - fs.chownSync(path, uid, gid) 

+ mac 下的chown 
  - fs.lchown(path, uid, gid, callback)  
  - fs.lchownSync(path, uid, gid)  

  

+ 改变文件的所有者和群组
  - fs.fchown(fd, uid, gid, callback)  
  - fs.fchownSync(fd, uid, gid)  

+ 关闭文件  
  - fs.close(fd, callback)  
  - fs.closeSync(fd)  

+ 返回一个包含常用文件系统操作的常量的对象  
  - fs.constants  

+ 将 src 拷贝到 dest中  
  - fs.copyFile(src, dest[, flags], callback)  
  - fs.copyFileSync(src, dest[, flags])  

+ 返回一个新建的 WriteStream 对象（详见可写流)  
  - fs.createReadStream(path[, options])  
  - fs.createWriteStream(path[, options])  

+ 检查文件系统来测试给定的路径是否存在
  - fs.exists(path, callback)  (废弃了，使用fs.stat() 或fs.access()) 
  - fs.existsSync(path)  

+ 仅仅在必要的情况下才会同步metadata  
  - fs.fdatasync(fd, callback)  
  - fs.fdatasyncSync(fd)  

+ 查看文件状态
  - fs.fstat(fd, callback)  
  - fs.fstatSync(fd)
  - fs.fsync(fd, callback)  
  - fs.fsyncSync(fd) 

+ 截取文件前len个字符
  - fs.ftruncate(fd[, len], callback)  
  - fs.ftruncateSync(fd[, len])  

+ 改变 path 所指向的对象的文件系统时间戳。  
  - fs.utimes(path, atime, mtime, callback)  
  - fs.utimesSync(path, atime, mtime) 
+ 改变 path 所指向的文件的文件系统时间戳
  - fs.futimes(fd, atime, mtime, callback)  
  - fs.futimesSync(fd, atime, mtime) 

 
+ linux 的link操作
  - fs.link(existingPath, newPath, callback)  
  - fs.linkSync(existingPath, newPath)  

+ 查看文件信息
  - fs.lstat(path, callback)  
  - fs.lstatSync(path)  

+ 创建目录
  - fs.mkdir(path[, mode], callback)  
  - fs.mkdirSync(path[, mode])  

+ 创建临时目录 返回一个文件名
  - fs.mkdtemp(prefix[, options], callback)  
  - fs.mkdtempSync(prefix[, options])  

+ 打开文件
  - fs.open(path, flags[, mode], callback)  
  - fs.openSync(path, flags[, mode])  

+ 读取文件  
  - fs.read(fd, buffer, offset, length, position, callback)  
  - fs.readSync(fd, buffer, offset, length, position)  
+ 读取目录 
  - fs.readdir(path[, options], callback)  
  - fs.readdirSync(path[, options])  
+ 地读取一个文件的全部内容
  - fs.readFile(path[, options], callback)  
  - fs.readFileSync(path[, options])  
+ 读取符号链接的字符串值
  - fs.readlink(path[, options], callback)  
  - fs.readlinkSync(path[, options])  
+ 返回文件的绝对路径  
  - fs.realpath(path[, options], callback)  
  - fs.realpathSync(path[, options])  
+ 重命名
  - fs.rename(oldPath, newPath, callback)  
  - fs.renameSync(oldPath, newPath)  
+ 删除目录
  - fs.rmdir(path, callback)  
  - fs.rmdirSync(path)

+ 查看文件或目录的信息  
  - fs.stat(path, callback)  
  - fs.statSync(path)  

+ 不知道功能
  - fs.symlink(target, path[, type], callback)  
  - fs.symlinkSync(target, path[, type])  

+ 截取文件 
  - fs.truncate(path[, len], callback)  
  - fs.truncateSync(path[, len])  

+ unlink 
  - fs.unlink(path, callback)  
  - fs.unlinkSync(path)  

+ 删除对文件的watch 
  - fs.unwatchFile(filename[, listener]) 

+ 监视 filename 的变化，filename 可以是一个文件或一个目录。
  - fs.watch(filename[, options][, listener])   

说明  
可用性  
索引节点  
文件名参数  
+ 监视文件的变化
  - fs.watchFile(filename[, options], listener) 
+ 写文件
  - fs.write(fd, buffer[, offset[, length[, position]]], callback)  
  - fs.write(fd, string[, position[, encoding]], callback)  
+ 写文件
  - fs.writeFile(file, data[, options], callback)  
  - fs.writeFileSync(file, data[, options])  
  - fs.writeSync(fd, buffer[, offset[, length[, position]]])  
  - fs.writeSync(fd, string[, position[, encoding]])  

  [//]:# (www.baidu.com)

### fs 常量  
### 文件访问常量  
### 文件打开常量  
### 文件类型常量  
### 文件模式常量