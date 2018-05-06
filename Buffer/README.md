# overview    
 **一种读取或操作二进制数据流的机制**    
 **Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require('buffer').Buffer。**  
  

**在 Node.js v6 之前的版本中，Buffer 实例是通过 Buffer 构造函数创建的，它根据提供的参数返回不同的 Buffer；但是这种方式存在一些问题，详情可参考node文档**  
在主要使用一下三种方式来达到之前的目的：**Buffer.from(), Buffer.alloc(), and Buffer.allocUnsafe()**
   
    + 新版node修改了buffer的创建方式  
        - Buffer.from(array) 返回一个新建的包含所提供的字节数组的副本的 Buffer。  
        - Buffer.from(arrayBuffer[, byteOffset [, length]]) 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。    
        - Buffer.from(buffer) 返回一个新建的包含所提供的 Buffer 的内容的副本的 Buffer。    
        - Buffer.from(string[, encoding]) 返回一个新建的包含所提供的字符串的副本的 Buffer。    
        - Buffer.alloc(size[, fill[, encoding]]) 返回一个指定大小的被填满的 Buffer 实例。 这个方法会明显地比 Buffer.allocUnsafe(size) 慢，但可确保新创建的 Buffer 实例绝不会包含旧的和潜在的敏感数据。    
        - Buffer.allocUnsafe(size) 与 Buffer.allocUnsafeSlow(size) 返回一个新建的指定 size 的 Buffer，但它的内容必须被初始化，可以使用 buf.fill(0) 或完全写满。  
  
## 一下方法在v6 以上版本弃用了（depracated）
    1. new Buffer(array)  
    2. new Buffer(arrayBuffer[, byteOffset [, length]])  
    3. new Buffer(buffer)  
    4. new Buffer(size)  
    5. new Buffer(string[, encoding])  
## 以下方法是当前版本(v8)支持的；
    类方法：Buffer.alloc(size[, fill[, encoding]])  
    类方法：Buffer.allocUnsafe(size)  
    类方法：Buffer.allocUnsafeSlow(size)  
    类方法：Buffer.byteLength(string[, encoding])  
    类方法：Buffer.compare(buf1, buf2)  
    类方法：Buffer.concat(list[, totalLength])  
    类方法：Buffer.from(array)  
    类方法：Buffer.from(arrayBuffer[, byteOffset[, length]])  
    类方法：Buffer.from(buffer)  
    类方法：Buffer.from(string[, encoding])  
    Class Method: Buffer.from(object[, offsetOrEncoding[, length]])  
    类方法：Buffer.isBuffer(obj)  
    类方法：Buffer.isEncoding(encoding)  
    类属性：Buffer.poolSize  


buf[index]  
buf.buffer  
buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])  
buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])  
buf.entries()  
buf.equals(otherBuffer)  
buf.fill(value[, offset[, end]][, encoding])  
buf.includes(value[, byteOffset][, encoding])  
buf.indexOf(value[, byteOffset][, encoding])  
buf.keys()  
buf.lastIndexOf(value[, byteOffset][, encoding])  
buf.length  
buf.parent  
buf.readDoubleBE(offset[, noAssert])  
buf.readDoubleLE(offset[, noAssert])  
buf.readFloatBE(offset[, noAssert])  
buf.readFloatLE(offset[, noAssert])  
buf.readInt8(offset[, noAssert])  
buf.readInt16BE(offset[, noAssert])  
buf.readInt16LE(offset[, noAssert])  
buf.readInt32BE(offset[, noAssert])  
buf.readInt32LE(offset[, noAssert])  
buf.readIntBE(offset, byteLength[, noAssert])  
buf.readIntLE(offset, byteLength[, noAssert])  
buf.readUInt8(offset[, noAssert])  
buf.readUInt16BE(offset[, noAssert])  
buf.readUInt16LE(offset[, noAssert])  
buf.readUInt32BE(offset[, noAssert])  
buf.readUInt32LE(offset[, noAssert])  
buf.readUIntBE(offset, byteLength[, noAssert])  
buf.readUIntLE(offset, byteLength[, noAssert])  
buf.slice([start[, end]])  
buf.swap16()  
buf.swap32()  
buf.swap64()  
buf.toJSON()  
buf.toString([encoding[, start[, end]]])  
buf.values()  
buf.write(string[, offset[, length]][, encoding])  
buf.writeDoubleBE(value, offset[, noAssert])  
buf.writeDoubleLE(value, offset[, noAssert])  
buf.writeFloatBE(value, offset[, noAssert])  
buf.writeFloatLE(value, offset[, noAssert])  
buf.writeInt8(value, offset[, noAssert])  
buf.writeInt16BE(value, offset[, noAssert])  
buf.writeInt16LE(value, offset[, noAssert])  
buf.writeInt32BE(value, offset[, noAssert])  
buf.writeInt32LE(value, offset[, noAssert])  
buf.writeIntBE(value, offset, byteLength[, noAssert])  
buf.writeIntLE(value, offset, byteLength[, noAssert])  
buf.writeUInt8(value, offset[, noAssert])  
buf.writeUInt16BE(value, offset[, noAssert])  
buf.writeUInt16LE(value, offset[, noAssert])  
buf.writeUInt32BE(value, offset[, noAssert])  
buf.writeUInt32LE(value, offset[, noAssert])  
buf.writeUIntBE(value, offset, byteLength[, noAssert])  
buf.writeUIntLE(value, offset, byteLength[, noAssert])  
buffer.INSPECT_MAX_BYTES  
buffer.kMaxLength  
buffer.transcode(source, fromEnc, toEnc)  
SlowBuffer 类  
new SlowBuffer(size)  
Buffer Constants  
buffer.constants.MAX_LENGTH  
buffer.constants.MAX_STRING_LENGTH