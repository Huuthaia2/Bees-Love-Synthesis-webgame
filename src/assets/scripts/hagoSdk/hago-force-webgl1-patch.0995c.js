(function(){if("undefined"==typeof yyrt)return;if(!yyrt.getRuntimeVersion)return void console.error("yyrt.getRuntimeVersion is not found!");const t=yyrt.getRuntimeVersion();console.warn("Runtime version: "+t+", hago patch version: 1.0.14");const e=t.split(".");if(!e||3!==e.length)return void console.error("Wrong runtime version: "+t);const r=window.__ccgl,o=parseInt(e[0]),n=parseInt(e[1]),_=parseInt(e[2]);function s(t,e,r){return o<t||!(o>t)&&(n<e||!(n>e)&&_<r)}const E=s(3,1,0);if(console.warn("needPatchLowerThan_3_1_0: "+E),E){var c=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(t){return"webgl2"===t?null:c.apply(this,arguments)};class t{constructor(){}toString(){return"[object OESTextureFloat]"}}const e=new t;class o{constructor(){}toString(){return"[object OESTextureFloatLinear]"}}const n=new o;class _{constructor(){this.HALF_FLOAT_OES=36193}toString(){return"[object OESTextureHalfFloat]"}}const s=new _;class E{constructor(){}toString(){return"[object OESTextureHalfFloatLinear]"}}const l=new E;class S{constructor(){this.UNSIGNED_INT_24_8_WEBGL=34042}toString(){return"[object WebGLDepthTexture]"}}const f=new S;class T{constructor(){}toString(){return"[object EXTColorBufferFloat]"}}const G=new T;class O{constructor(){this.RGBA16F_EXT=34842,this.RGB16F_EXT=34843,this.RG16F_EXT=33327,this.R16F_EXT=33325,this.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT=33297,this.UNSIGNED_NORMALIZED_EXT=35863}toString(){return"[object EXTColorBufferHalfFloat]"}}const p=new O;class x{constructor(){}toString(){return"[object OESElementIndexUint]"}}const h=new x;class d{constructor(){this.COMPRESSED_RGB_S3TC_DXT1_EXT=33776,this.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777,this.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778,this.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779}toString(){return"[object WebGLCompressedTextureS3TC]"}}const R=new d;class g{constructor(){this.COMPRESSED_RGB_ETC1_WEBGL=36196}toString(){return"[object WebGLCompressedTextureETC1]"}}const L=new g;class B{constructor(){this.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840,this.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842,this.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841,this.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843}toString(){return"[object WebGLCompressedTexturePVRTC]"}}const C=new B;class b{constructor(){this.FRAGMENT_SHADER_DERIVATIVE_HINT_OES=35723}toString(){return"[object OESStandardDerivatives]"}}const X=new b;class A{constructor(){this.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT=33296,this.SRGB8_ALPHA8_EXT=35907,this.SRGB_ALPHA_EXT=35906,this.SRGB_EXT=35904}toString(){return"[object EXTsRGB]"}}const y=new A;class v{constructor(){}toString(){return"[object EXTFragDepth]"}}const w=new v;class P{constructor(){this.RGBA32F_EXT=34836,this.RGB32F_EXT=34837,this.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT=33297,this.UNSIGNED_NORMALIZED_EXT=35863}toString(){return"[object WebGLColorBufferFloat]"}}const F=new P;var i=["MOZ_","WEBKIT_"],a={WEBGL_compressed_texture_s3tc:R,WEBGL_compressed_texture_pvrtc:C,WEBGL_compressed_texture_etc1:L,WEBGL_depth_texture:f,WEBGL_color_buffer_float:F,OES_element_index_uint:h,OES_standard_derivatives:X,OES_texture_float:e,OES_texture_float_linear:n,OES_texture_half_float:s,OES_texture_half_float_linear:l,EXT_color_buffer_float:G,EXT_color_buffer_half_float:p,EXT_sRGB:y,EXT_frag_depth:w};r._getSupportedExtensions||(r._getSupportedExtensions=r.getSupportedExtensions);const M={GL_EXT_sRGB:"EXT_sRGB",GL_EXT_frag_depth:"EXT_frag_depth",GL_OES_element_index_uint:"OES_element_index_uint",GL_OES_standard_derivatives:"OES_standard_derivatives",GL_OES_depth_texture:"WEBGL_depth_texture",GL_OES_texture_half_float:"OES_texture_half_float",GL_OES_texture_half_float_linear:"OES_texture_half_float_linear",GL_OES_texture_float:"OES_texture_float",GL_OES_texture_float_linear:"OES_texture_float_linear",GL_EXT_color_buffer_float:"EXT_color_buffer_float",GL_EXT_color_buffer_half_float:"EXT_color_buffer_half_float",GL_EXT_texture_compression_s3tc:"WEBGL_compressed_texture_s3tc",GL_OES_compressed_ETC1_RGB8_texture:"WEBGL_compressed_texture_etc1",GL_IMG_texture_compression_pvrtc:"WEBGL_compressed_texture_pvrtc"};r.getSupportedExtensions=function(){var t=[];return r._getSupportedExtensions().forEach(function(e){let r=e in M?M[e]:e;t.push(r),"GL_EXT_color_buffer_float"===e&&t.push("WEBGL_color_buffer_float")}),t};var u=r.getSupportedExtensions();r.getExtension=function(t){for(var e,r=0,o=i.length;r<o;++r)if(e=i[r],t.startsWith(e)){t=t.substring(e.length);break}return u.indexOf(t)>-1?t in a?a[t]:{}:null}}const l=s(3,5,17);if(console.warn("needPatchForGetVAOExtension: "+l),l)if(yyrt.getGLClientVersion&&2===yyrt.getGLClientVersion())if(r.getExtension("OES_vertex_array_object"))console.warn("Found device with VAO support, do not need to hack");else{console.warn("Found device without VAO support, hack it"),window.OESVertexArrayObject&&(OESVertexArrayObject.prototype.deleteVertexArrayOES=null,OESVertexArrayObject.prototype.isVertexArrayOES=null,OESVertexArrayObject.prototype.bindVertexArrayOES=null);var S=r.getExtension;r.getExtension=function(t){return"string"==typeof t&&-1!==t.indexOf("vertex_array_object")?(console.warn('gl.getExtension("OES_vertex_array_object") returns null'),null):S.apply(this,arguments)}}else console.warn("OpenGLES 3.0 device does not need to hack VAO extension")})();