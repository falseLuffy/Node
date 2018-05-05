# overview 
   **文件 I/O 是对标准 POSIX 函数的简单封装。 通过 require('fs') 使用该模块。 所有的方法都有异步和同步的形式。**   
  **该笔记只写同步方法，异步方法只需要将api后缀Sync删除，加上callback就可以了**
## 增
### 新增文件夹
* 新增文件夹： fs.mkdirSync(path[, mode])  
* 创建一个临时目录： fs.mkdtempSync(prefix[,options])

## 删
    ###
删除文件夹
  - fs.rmdir(path, callback)
* fs.rmdirSync(path)

## 改


## 查


## 写 
 **fs.appendFileSync(file, data[, options], callback)**

fs.access(path[, mode], callback)

fs.accessSync(path[, mode])

fs.appendFile(file, data[, options], callback)
fs.appendFileSync(file, data[, options])
fs.chmod(path, mode, callback)
File modes
fs.chmodSync(path, mode)
fs.chown(path, uid, gid, callback)
fs.chownSync(path, uid, gid)
fs.close(fd, callback)
fs.closeSync(fd)
fs.constants
fs.copyFile(src, dest[, flags], callback)
fs.copyFileSync(src, dest[, flags])
fs.createReadStream(path[, options])
fs.createWriteStream(path[, options])
fs.exists(path, callback)
fs.existsSync(path)
fs.fchmod(fd, mode, callback)
fs.fchmodSync(fd, mode)
fs.fchown(fd, uid, gid, callback)
fs.fchownSync(fd, uid, gid)
fs.fdatasync(fd, callback)
fs.fdatasyncSync(fd)
fs.fstat(fd, callback)
fs.fstatSync(fd)
fs.fsync(fd, callback)
fs.fsyncSync(fd)
fs.ftruncate(fd[, len], callback)
fs.ftruncateSync(fd[, len])
fs.futimes(fd, atime, mtime, callback)
fs.futimesSync(fd, atime, mtime)
fs.lchmod(path, mode, callback)
fs.lchmodSync(path, mode)
fs.lchown(path, uid, gid, callback)
fs.lchownSync(path, uid, gid)
fs.link(existingPath, newPath, callback)
fs.linkSync(existingPath, newPath)
fs.lstat(path, callback)
fs.lstatSync(path)

fs.open(path, flags[, mode], callback)
fs.openSync(path, flags[, mode])
fs.read(fd, buffer, offset, length, position, callback)
fs.readdir(path[, options], callback)
fs.readdirSync(path[, options])
fs.readFile(path[, options], callback)
fs.readFileSync(path[, options])
fs.readlink(path[, options], callback)
fs.readlinkSync(path[, options])
fs.readSync(fd, buffer, offset, length, position)
fs.realpath(path[, options], callback)
fs.realpathSync(path[, options])
fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)

fs.stat(path, callback)
fs.statSync(path)
fs.symlink(target, path[, type], callback)
fs.symlinkSync(target, path[, type])
fs.truncate(path[, len], callback)
fs.truncateSync(path[, len])
fs.unlink(path, callback)
fs.unlinkSync(path)
fs.unwatchFile(filename[, listener])
fs.utimes(path, atime, mtime, callback)
fs.utimesSync(path, atime, mtime)
fs.watch(filename[, options][, listener])

fs.watchFile(filename[, options], listener)
fs.write(fd, buffer[, offset[, length[, position]]], callback)
fs.write(fd, string[, position[, encoding]], callback)
fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options])
fs.writeSync(fd, buffer[, offset[, length[, position]]])
fs.writeSync(fd, string[, position[, encoding]])
fs 常量
文件访问常量
文件打开常量
文件类型常量
文件模式常量