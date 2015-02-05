var Texture = function(gl, info, image)
{
  GLBound.call(this, gl);
  this.info = info;
  var map = {
    'MipMapLinearLinear': gl.LINEAR_MIPMAP_LINEAR,
    'Linear': gl.LINEAR,
    'MipMapLinearNearest': gl.LINEAR_MIPMAP_NEAREST,
    'MipMapNearestLinear': gl.NEAREST_MIPMAP_LINEAR,
    'Repeat': gl.REPEAT,
    'ClampToEdge': gl.CLAMP_TO_EDGE
  };
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, map[info.minFilter]);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, map[info.magFilter]);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, map[info.wrapS]);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, map[info.wrapT]);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  if(/MipMap/.test(info.minFilter))
  {
    gl.generateMipmap(gl.TEXTURE_2D);
  }

  gl.bindTexture(gl.TEXTURE_2D, null);

  this.texture = texture;
};

Texture.prototype.use = function(index)
{
  var gl = this._gl;
  index = index || 0;
  gl.bindTexture(gl.TEXTURE_2D, this.texture);
  gl.activeTexture(gl.TEXTURE0 + index);
};

imv.Texture = Texture;
