/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gl; });
/* harmony export (immutable) */ __webpack_exports__["b"] = setGL;
var gl;
function setGL(_gl) {
    gl = _gl;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(0);

class Drawable {
    constructor() {
        this.count = 0;
        this.idxGenerated = false;
        this.posGenerated = false;
        this.norGenerated = false;
        this.colGenerated = false;
        this.translateGenerated = false;
        this.uvGenerated = false;
        this.numInstances = 0; // How many instances of this Drawable the shader program should draw
    }
    destroy() {
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufPos);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufNor);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufCol);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufUV);
    }
    generateIdx() {
        this.idxGenerated = true;
        this.bufIdx = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generatePos() {
        this.posGenerated = true;
        this.bufPos = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateNor() {
        this.norGenerated = true;
        this.bufNor = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateCol() {
        this.colGenerated = true;
        this.bufCol = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateTranslate() {
        this.translateGenerated = true;
        this.bufTranslate = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateUV() {
        this.uvGenerated = true;
        this.bufUV = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    bindIdx() {
        if (this.idxGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        }
        return this.idxGenerated;
    }
    bindPos() {
        if (this.posGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        }
        return this.posGenerated;
    }
    bindNor() {
        if (this.norGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        }
        return this.norGenerated;
    }
    bindCol() {
        if (this.colGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        }
        return this.colGenerated;
    }
    bindTranslate() {
        if (this.translateGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        }
        return this.translateGenerated;
    }
    bindUV() {
        if (this.uvGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufUV);
        }
        return this.uvGenerated;
    }
    elemCount() {
        return this.count;
    }
    drawMode() {
        return __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRIANGLES;
    }
    setNumInstances(num) {
        this.numInstances = num;
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Drawable);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RANDOM; });
/* unused harmony export setMatrixArrayType */
/* unused harmony export toRadian */
/* unused harmony export equals */
/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_quat2_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec2_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec3_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gl_matrix_vec4_js__ = __webpack_require__(11);
/* unused harmony reexport glMatrix */
/* unused harmony reexport mat2 */
/* unused harmony reexport mat2d */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4_js__; });
/* unused harmony reexport quat */
/* unused harmony reexport quat2 */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec2_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec3_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__gl_matrix_vec4_js__; });













/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.1.1
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this on certain browsers/devices.
      var shouldUnlock = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome|Safari/i.test(self._navigator && self._navigator.userAgent);
      if (self._audioUnlocked || !self.ctx || !shouldUnlock) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        for (var i=0; i<self.html5PoolSize; i++) {
          var audioNode = new Audio();

          // Mark this Audio object as unlocked to ensure it can get returned
          // to the unlocked pool when released.
          audioNode._unlocked = true;

          // Add the audio node to the pool.
          self._releaseHtml5Audio(audioNode);
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended. 
        // If there is, play that sound. If not, continue as usual.  
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      var loop = !!(sound._loop || self._sprite[sprite][2]);
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = loop;
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
              self._loadQueue();
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;

          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = parseFloat(from);
      to = parseFloat(to);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Make sure the volume is in the right bounds.
        vol = Math.max(0, vol);
        vol = Math.min(1, vol);

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            self._emit('seek', id);

            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
          if (!checkIE) {
            sounds[i]._node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.1.1
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["fromMat4"] = fromMat4;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromMat2d"] = fromMat2d;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["normalFromMat4"] = normalFromMat4;
/* harmony export (immutable) */ __webpack_exports__["projection"] = projection;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  var x = v[0],
      y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromQuat2"] = fromQuat2;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  // Cache only the current line of the second matrix
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

    out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
    out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
    out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;
  var b00 = void 0,
      b01 = void 0,
      b02 = void 0;
  var b10 = void 0,
      b11 = void 0,
      b12 = void 0;
  var b20 = void 0,
      b21 = void 0,
      b22 = void 0;

  if (len < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
  a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
  a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;

  if (len < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
  var translation = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];

  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  //Only scale if it makes sense
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  var ox = o[0];
  var oy = o[1];
  var oz = o[2];

  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;

  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf = void 0;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  var x0 = void 0,
      x1 = void 0,
      x2 = void 0,
      y0 = void 0,
      y1 = void 0,
      y2 = void 0,
      z0 = void 0,
      z1 = void 0,
      z2 = void 0,
      len = void 0;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] && Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] && Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];

  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* unused harmony export identity */
/* unused harmony export setAxisAngle */
/* unused harmony export getAxisAngle */
/* unused harmony export multiply */
/* harmony export (immutable) */ __webpack_exports__["e"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["f"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["g"] = rotateZ;
/* unused harmony export calculateW */
/* unused harmony export slerp */
/* unused harmony export random */
/* unused harmony export invert */
/* unused harmony export conjugate */
/* unused harmony export fromMat3 */
/* unused harmony export fromEuler */
/* unused harmony export str */
/* unused harmony export clone */
/* unused harmony export fromValues */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copy; });
/* unused harmony export set */
/* unused harmony export add */
/* unused harmony export mul */
/* unused harmony export scale */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dot; });
/* unused harmony export lerp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return length; });
/* unused harmony export len */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return squaredLength; });
/* unused harmony export sqrLen */
/* unused harmony export normalize */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export rotationTo */
/* unused harmony export sqlerp */
/* unused harmony export setAxes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4_js__ = __webpack_require__(11);





/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);
  if (s > __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  var omega = void 0,
      cosom = void 0,
      sinom = void 0,
      scale0 = void 0,
      scale1 = void 0;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Generates a random quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();
  var u2 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();
  var u3 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();

  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);

  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot = void 0;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;

  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);

  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;

  return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
var clone = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["clone"];

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
var fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["fromValues"];

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
var copy = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["copy"];

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
var set = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["set"];

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
var add = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["add"];

/**
 * Alias for {@link quat.multiply}
 * @function
 */
var mul = multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
var scale = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["scale"];

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["dot"];

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */
var lerp = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["lerp"];

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
var length = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["length"];

/**
 * Alias for {@link quat.length}
 * @function
 */
var len = length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["squaredLength"];

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
var normalize = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["normalize"];

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["exactEquals"];

/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var equals = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["equals"];

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
var rotationTo = function () {
  var tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["create"]();
  var xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["fromValues"](1, 0, 0);
  var yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["fromValues"](0, 1, 0);

  return function (out, a, b) {
    var dot = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3_js__["len"](tmpvec3) < 0.000001) __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
var setAxes = function () {
  var matr = __WEBPACK_IMPORTED_MODULE_1__mat3_js__["create"]();

  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  var r = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 * Math.PI;
  var z = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2];
  // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);
  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x;
  // var uuv = vec3.cross([], qvec, uv);
  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx;
  // vec3.scale(uv, uv, 2 * w);
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  // vec3.scale(uuv, uuv, 2);
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  // return vec3.add(out, a, vec3.add(out, uv, uuv));
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec3.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec3.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec3.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;
  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    v2 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    v4 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];

  // calculate quat * vec
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec4.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec4.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec4.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var howler_1 = __webpack_require__(5);
var SoundLoader_1 = __webpack_require__(14);
var SoundController = (function () {
    function SoundController() {
        var _this = this;
        this.loader = new SoundLoader_1.SoundLoader();
        this.sounds = {};
        this.backgroundName = null;
        this.backgroundId = null;
        this.backgroundVolume = 1;
        this.loader.on('loaded', function (event) {
            _this.registerSounds(event.sounds);
        });
    }
    SoundController.prototype.getLoader = function () {
        return this.loader;
    };
    SoundController.prototype.registerSounds = function (sounds) {
        for (var i = 0; i < sounds.length; i++) {
            var sound = sounds[i];
            if (sound.name in this.sounds) {
                console.warn('sound-controller: Sound with key "' + sound.name + '" already exists.');
            }
            else {
                this.sounds[sound.name] = sound;
            }
        }
    };
    SoundController.prototype.updateListener = function (position, orientation, orientationUp) {
        if (orientation === void 0) { orientation = null; }
        if (orientationUp === void 0) { orientationUp = null; }
        howler_1.Howler.pos(position.x, position.y, position.z);
        if (orientation === null || orientationUp === null) {
            return;
        }
        howler_1.Howler.orientation(orientation.x, orientation.y, orientation.z, orientationUp.x, orientationUp.y, orientationUp.z);
    };
    SoundController.prototype.getMasterVolume = function () {
        return howler_1.Howler.volume();
    };
    SoundController.prototype.setMasterVolume = function (val) {
        howler_1.Howler.volume(val);
    };
    SoundController.prototype.getBackgroundVolume = function () {
        return this.backgroundVolume;
    };
    SoundController.prototype.setBackgroundVolume = function (val) {
        this.backgroundVolume = val;
        this.sounds[this.backgroundName].howl.volume(val, this.backgroundId);
    };
    SoundController.prototype.playBackground = function (name, fadeOutTime, fadeInTime, smooth) {
        var _this = this;
        if (fadeOutTime === void 0) { fadeOutTime = 0; }
        if (fadeInTime === void 0) { fadeInTime = 0; }
        if (smooth === void 0) { smooth = false; }
        if (name === this.backgroundName) {
            return;
        }
        var playing = false;
        if (this.backgroundName !== null && this.backgroundId !== null) {
            playing = true;
        }
        if (playing) {
            var sound_1 = this.sounds[this.backgroundName].howl;
            var soundId_1 = this.backgroundId;
            var id_1 = null;
            if (smooth === false && name !== null) {
                id_1 = this.play(name);
                this.sounds[name].howl.pause(id_1);
                this.sounds[name].howl.loop(true, id_1);
                this.backgroundName = name;
                this.backgroundId = id_1;
            }
            sound_1.fade(this.backgroundVolume, 0, fadeOutTime, soundId_1);
            sound_1.once('fade', function () {
                sound_1.stop(soundId_1);
                if (id_1 !== null) {
                    _this.sounds[name].howl.play(id_1);
                    _this.sounds[name].howl.fade(0, _this.backgroundVolume, fadeInTime, id_1);
                }
            }, soundId_1);
        }
        if ((smooth === true || !playing) && name !== null) {
            var id_2 = this.play(name);
            this.sounds[name].howl.loop(true, id_2);
            this.backgroundName = name;
            this.backgroundId = id_2;
            this.sounds[name].howl.once('play', function () {
                _this.sounds[name].howl.fade(0, _this.backgroundVolume, fadeInTime, id_2);
            }, id_2);
        }
        if (name === null) {
            this.backgroundId = null;
            this.backgroundName = null;
        }
    };
    SoundController.prototype.play = function (name) {
        if (name in this.sounds) {
            if (this.sounds[name].sprite === name) {
                return this.sounds[name].howl.play(name);
            }
            else {
                return this.sounds[name].howl.play();
            }
        }
        else {
            console.log('sound-controller: Sound "' + name + '" does not exists.');
        }
    };
    SoundController.prototype.playSpatial = function (name, position, pannerAttr, orientation) {
        if (orientation === void 0) { orientation = null; }
        if (name in this.sounds) {
            var soundId_2;
            var sound_2 = this.sounds[name].howl;
            if (this.sounds[name].sprite === name) {
                soundId_2 = sound_2.play(name);
            }
            else {
                soundId_2 = sound_2.play();
            }
            sound_2.once('play', function () {
                sound_2.pos(position.x, position.y, position.z, soundId_2);
                if (orientation !== null) {
                    sound_2.orientation(orientation.x, orientation.y, orientation.z, soundId_2);
                }
                sound_2.pannerAttr(pannerAttr, soundId_2);
            }, soundId_2);
            return soundId_2;
        }
        else {
            console.log('sound-controller: Sound "' + name + '" does not exists.');
        }
    };
    SoundController.prototype.stop = function (name, id) {
        if (id === void 0) { id = null; }
        if (name in this.sounds) {
            if (id === null) {
                this.sounds[name].howl.stop();
                this.backgroundId = null;
                this.backgroundName = null;
                return this;
            }
            else {
                this.sounds[name].howl.stop(id);
                return this;
            }
        }
        else {
            console.log('sound-controller: Sound "' + name + '" does not exists.');
        }
    };
    SoundController.prototype.get = function (name) {
        if (name in this.sounds) {
            return this.sounds[name];
        }
        else {
            console.log('sound-controller: Sound "' + name + '" does not exists.');
        }
    };
    SoundController.prototype.getAll = function () {
        return this.sounds;
    };
    return SoundController;
}());
exports.SoundController = SoundController;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter3_1 = __webpack_require__(32);
var howler_1 = __webpack_require__(5);
var SoundLoader = (function (_super) {
    __extends(SoundLoader, _super);
    function SoundLoader() {
        var _this = _super.call(this) || this;
        _this.loading = false;
        _this.queue = [];
        _this.loadedSounds = 0;
        _this.loadingSounds = [];
        return _this;
    }
    SoundLoader.prototype.add = function (name, howlOptions, sprite) {
        if (sprite === void 0) { sprite = null; }
        if (this.loading) {
            return;
        }
        this.queue.push({
            name: name,
            howlOptions: howlOptions
        });
        return this;
    };
    SoundLoader.prototype.load = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.loadedSounds = 0;
        this.loadingSounds = [];
        for (var i = 0; i < this.queue.length; i++) {
            var singleResource = this.queue[i];
            var spriteOpt = {};
            if (singleResource.howlOptions.sprite) {
                spriteOpt = singleResource.howlOptions.sprite;
            }
            var options = Object.assign({}, singleResource.howlOptions);
            var sound = new howler_1.Howl(options);
            if (Object.keys(spriteOpt).length === 0) {
                this.loadingSounds.push({
                    name: singleResource.name,
                    howl: sound,
                    sprite: null
                });
            }
            else {
                for (var key in spriteOpt) {
                    if (spriteOpt.hasOwnProperty(key)) {
                        this.loadingSounds.push({
                            name: key,
                            howl: sound,
                            sprite: key
                        });
                    }
                }
            }
            sound.once('load', function () {
                _this.loadedResource();
            });
            sound.once('loaderror', function (id, error) {
                _this.emit('loaderror');
                console.warn(error);
                for (var i_1 = 0; i_1 < _this.loadingSounds.length; i_1++) {
                    var s = _this.loadingSounds[i_1];
                    s.howl.off('load').off('loaderror').unload();
                }
                console.warn('sound-loader: Unable to load sound [id]: ' + id + '. Loading canceled.');
                _this.reset();
            });
        }
        return this;
    };
    SoundLoader.prototype.loadedResource = function () {
        if (!this.loading) {
            console.warn('sound-loader: Attempted to load resource without calling load() method. Can be caused in load errors');
            return;
        }
        this.loadedSounds++;
        this.emit('progress', {
            progress: this.loadedSounds,
            total: this.queue.length
        });
        if (this.loadedSounds === this.queue.length) {
            this.emit('loaded', {
                sounds: this.loadingSounds
            });
            this.reset();
        }
    };
    SoundLoader.prototype.reset = function () {
        this.loading = false;
        this.queue = [];
        this.loadedSounds = 0;
        this.loadingSounds = [];
    };
    SoundLoader.prototype.clearQueue = function () {
        if (this.loading) {
            console.log('sound-loader: Cannot clear queue now');
            return;
        }
        this.queue = [];
    };
    return SoundLoader;
}(eventemitter3_1.EventEmitter));
exports.SoundLoader = SoundLoader;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createFilteredVector

var cubicHermite = __webpack_require__(48)
var bsearch = __webpack_require__(16)

function clamp(lo, hi, x) {
  return Math.min(hi, Math.max(lo, x))
}

function FilteredVector(state0, velocity0, t0) {
  this.dimension  = state0.length
  this.bounds     = [ new Array(this.dimension), new Array(this.dimension) ]
  for(var i=0; i<this.dimension; ++i) {
    this.bounds[0][i] = -Infinity
    this.bounds[1][i] = Infinity
  }
  this._state     = state0.slice().reverse()
  this._velocity  = velocity0.slice().reverse()
  this._time      = [ t0 ]
  this._scratch   = [ state0.slice(), state0.slice(), state0.slice(), state0.slice(), state0.slice() ]
}

var proto = FilteredVector.prototype

proto.flush = function(t) {
  var idx = bsearch.gt(this._time, t) - 1
  if(idx <= 0) {
    return
  }
  this._time.splice(0, idx)
  this._state.splice(0, idx * this.dimension)
  this._velocity.splice(0, idx * this.dimension)
}

proto.curve = function(t) {
  var time      = this._time
  var n         = time.length
  var idx       = bsearch.le(time, t)
  var result    = this._scratch[0]
  var state     = this._state
  var velocity  = this._velocity
  var d         = this.dimension
  var bounds    = this.bounds
  if(idx < 0) {
    var ptr = d-1
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = state[ptr]
    }
  } else if(idx >= n-1) {
    var ptr = state.length-1
    var tf = t - time[n-1]
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = state[ptr] + tf * velocity[ptr]
    }
  } else {
    var ptr = d * (idx+1) - 1
    var t0  = time[idx]
    var t1  = time[idx+1]
    var dt  = (t1 - t0) || 1.0
    var x0  = this._scratch[1]
    var x1  = this._scratch[2]
    var v0  = this._scratch[3]
    var v1  = this._scratch[4]
    var steady = true
    for(var i=0; i<d; ++i, --ptr) {
      x0[i] = state[ptr]
      v0[i] = velocity[ptr] * dt
      x1[i] = state[ptr+d]
      v1[i] = velocity[ptr+d] * dt
      steady = steady && (x0[i] === x1[i] && v0[i] === v1[i] && v0[i] === 0.0)
    }
    if(steady) {
      for(var i=0; i<d; ++i) {
        result[i] = x0[i]
      }
    } else {
      cubicHermite(x0, v0, x1, v1, (t-t0)/dt, result)
    }
  }
  var lo = bounds[0]
  var hi = bounds[1]
  for(var i=0; i<d; ++i) {
    result[i] = clamp(lo[i], hi[i], result[i])
  }
  return result
}

proto.dcurve = function(t) {
  var time     = this._time
  var n        = time.length
  var idx      = bsearch.le(time, t)
  var result   = this._scratch[0]
  var state    = this._state
  var velocity = this._velocity
  var d        = this.dimension
  if(idx >= n-1) {
    var ptr = state.length-1
    var tf = t - time[n-1]
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = velocity[ptr]
    }
  } else {
    var ptr = d * (idx+1) - 1
    var t0 = time[idx]
    var t1 = time[idx+1]
    var dt = (t1 - t0) || 1.0
    var x0 = this._scratch[1]
    var x1 = this._scratch[2]
    var v0 = this._scratch[3]
    var v1 = this._scratch[4]
    var steady = true
    for(var i=0; i<d; ++i, --ptr) {
      x0[i] = state[ptr]
      v0[i] = velocity[ptr] * dt
      x1[i] = state[ptr+d]
      v1[i] = velocity[ptr+d] * dt
      steady = steady && (x0[i] === x1[i] && v0[i] === v1[i] && v0[i] === 0.0)
    }
    if(steady) {
      for(var i=0; i<d; ++i) {
        result[i] = 0.0
      }
    } else {
      cubicHermite.derivative(x0, v0, x1, v1, (t-t0)/dt, result)
      for(var i=0; i<d; ++i) {
        result[i] /= dt
      }
    }
  }
  return result
}

proto.lastT = function() {
  var time = this._time
  return time[time.length-1]
}

proto.stable = function() {
  var velocity = this._velocity
  var ptr = velocity.length
  for(var i=this.dimension-1; i>=0; --i) {
    if(velocity[--ptr]) {
      return false
    }
  }
  return true
}

proto.jump = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t < t0 || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var ptr       = state.length-this.dimension
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  this._time.push(t0, t)
  for(var j=0; j<2; ++j) {
    for(var i=0; i<d; ++i) {
      state.push(state[ptr++])
      velocity.push(0)
    }
  }
  this._time.push(t)
  for(var i=d; i>0; --i) {
    state.push(clamp(lo[i-1], hi[i-1], arguments[i]))
    velocity.push(0)
  }
}

proto.push = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t < t0 || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var ptr       = state.length-this.dimension
  var dt        = t - t0
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  var sf        = (dt > 1e-6) ? 1/dt : 0
  this._time.push(t)
  for(var i=d; i>0; --i) {
    var xc = clamp(lo[i-1], hi[i-1], arguments[i])
    state.push(xc)
    velocity.push((xc - state[ptr++]) * sf)
  }
}

proto.set = function(t) {
  var d = this.dimension
  if(t < this.lastT() || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  this._time.push(t)
  for(var i=d; i>0; --i) {
    state.push(clamp(lo[i-1], hi[i-1], arguments[i]))
    velocity.push(0)
  }
}

proto.move = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t <= t0 || arguments.length !== d+1) {
    return
  }
  var state    = this._state
  var velocity = this._velocity
  var statePtr = state.length - this.dimension
  var bounds   = this.bounds
  var lo       = bounds[0]
  var hi       = bounds[1]
  var dt       = t - t0
  var sf       = (dt > 1e-6) ? 1/dt : 0.0
  this._time.push(t)
  for(var i=d; i>0; --i) {
    var dx = arguments[i]
    state.push(clamp(lo[i-1], hi[i-1], state[statePtr++] + dx))
    velocity.push(dx * sf)
  }
}

proto.idle = function(t) {
  var t0 = this.lastT()
  if(t < t0) {
    return
  }
  var d        = this.dimension
  var state    = this._state
  var velocity = this._velocity
  var statePtr = state.length-d
  var bounds   = this.bounds
  var lo       = bounds[0]
  var hi       = bounds[1]
  var dt       = t - t0
  this._time.push(t)
  for(var i=d-1; i>=0; --i) {
    state.push(clamp(lo[i], hi[i], state[statePtr] + dt * velocity[statePtr]))
    velocity.push(0)
    statePtr += 1
  }
}

function getZero(d) {
  var result = new Array(d)
  for(var i=0; i<d; ++i) {
    result[i] = 0.0
  }
  return result
}

function createFilteredVector(initState, initVelocity, initTime) {
  switch(arguments.length) {
    case 0:
      return new FilteredVector([0], [0], 0)
    case 1:
      if(typeof initState === 'number') {
        var zero = getZero(initState)
        return new FilteredVector(zero, zero, 0)
      } else {
        return new FilteredVector(initState, getZero(initState.length), 0)
      }
    case 2:
      if(typeof initVelocity === 'number') {
        var zero = getZero(initState.length)
        return new FilteredVector(initState, zero, +initVelocity)
      } else {
        initTime = 0
      }
    case 3:
      if(initState.length !== initVelocity.length) {
        throw new Error('state and velocity lengths must match')
      }
      return new FilteredVector(initState, initVelocity, initTime)
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compileSearch(funcName, predicate, reversed, extraArgs, useNdarray, earlyOut) {
  var code = [
    "function ", funcName, "(a,l,h,", extraArgs.join(","),  "){",
earlyOut ? "" : "var i=", (reversed ? "l-1" : "h+1"),
";while(l<=h){\
var m=(l+h)>>>1,x=a", useNdarray ? ".get(m)" : "[m]"]
  if(earlyOut) {
    if(predicate.indexOf("c") < 0) {
      code.push(";if(x===y){return m}else if(x<=y){")
    } else {
      code.push(";var p=c(x,y);if(p===0){return m}else if(p<=0){")
    }
  } else {
    code.push(";if(", predicate, "){i=m;")
  }
  if(reversed) {
    code.push("l=m+1}else{h=m-1}")
  } else {
    code.push("h=m-1}else{l=m+1}")
  }
  code.push("}")
  if(earlyOut) {
    code.push("return -1};")
  } else {
    code.push("return i};")
  }
  return code.join("")
}

function compileBoundsSearch(predicate, reversed, suffix, earlyOut) {
  var result = new Function([
  compileSearch("A", "x" + predicate + "y", reversed, ["y"], false, earlyOut),
  compileSearch("B", "x" + predicate + "y", reversed, ["y"], true, earlyOut),
  compileSearch("P", "c(x,y)" + predicate + "0", reversed, ["y", "c"], false, earlyOut),
  compileSearch("Q", "c(x,y)" + predicate + "0", reversed, ["y", "c"], true, earlyOut),
"function dispatchBsearch", suffix, "(a,y,c,l,h){\
if(a.shape){\
if(typeof(c)==='function'){\
return Q(a,(l===undefined)?0:l|0,(h===undefined)?a.shape[0]-1:h|0,y,c)\
}else{\
return B(a,(c===undefined)?0:c|0,(l===undefined)?a.shape[0]-1:l|0,y)\
}}else{\
if(typeof(c)==='function'){\
return P(a,(l===undefined)?0:l|0,(h===undefined)?a.length-1:h|0,y,c)\
}else{\
return A(a,(c===undefined)?0:c|0,(l===undefined)?a.length-1:l|0,y)\
}}}\
return dispatchBsearch", suffix].join(""))
  return result()
}

module.exports = {
  ge: compileBoundsSearch(">=", false, "GE"),
  gt: compileBoundsSearch(">", false, "GT"),
  lt: compileBoundsSearch("<", true, "LT"),
  le: compileBoundsSearch("<=", true, "LE"),
  eq: compileBoundsSearch("-", true, "EQ", true)
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(20);

module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = create;

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = determinant;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__ = __webpack_require__(81);

class Building {
    constructor(startX, startY, startZ, width, height, length) {
        this.startX = startX;
        this.startY = startY;
        this.startZ = startZ;
        this.width = width;
        this.height = height;
        this.length = length;
        this.stack = [];
        //procedurally modify height based on z value....
        if (startZ < 0.0) {
            if (Math.random() < 0.4) {
                this.startY = Math.pow((Math.abs(startZ)) / 6.0, 3.0);
            }
        }
    }
    evaluate(code) {
        var c1 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX, this.startY, this.startZ, this.width, this.height, this.length);
        this.stack.push(c1);
        //building cod e 1
        if (code == 1) {
            if (this.startY - this.height > 0.0) {
                var c2 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX - Math.random() / 0.7, this.startY - this.height, this.startZ + Math.random() / 0.6, this.width * 1.8, this.startY - this.height, this.length * 1.6);
                this.stack.push(c2);
            }
            return;
        }
        //building code 2
        if (code == 2) {
            console.log("hellll");
            var y = this.startY;
            var h1 = y - this.height;
            console.log(" y is" + y);
            if (y > 0.0) {
                var c2 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX - Math.random() / 0.7, y, this.startZ + Math.random() / 0.6, this.width * 2.8, h1, this.length * 1.8);
                this.stack.push(c2);
                y = h1;
            }
            console.log("new y is" + y);
            if (y > 0.0) {
                h1 = y;
                console.log("h1 is " + h1);
                var c2 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX - Math.random() / 0.7, y, this.startZ + Math.random() / 0.6, this.width * 1.8, h1, this.length * 1.6);
                this.stack.push(c2);
                var c3 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX + Math.random() / 0.8, y, this.startZ - Math.random() / 0.4, this.width * 2.8, h1, this.length * 2.3);
                this.stack.push(c3);
            }
            return;
        }
        //building code 2
        if (code == 3) {
            var y = this.startY;
            var h1 = y - this.height;
            if (y > 0.0) {
                var c2 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX - Math.random() / 0.7, y, this.startZ + Math.random() / 0.6, this.width * 2.8, h1, this.length * 1.8);
                this.stack.push(c2);
                y = h1;
            }
            if (y > 0.0) {
                h1 = y;
                var height = Math.random() * 2.5;
                if (height > h1) {
                    height = h1;
                }
                var c2 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX - Math.random() / 0.7, y, this.startZ + Math.random() / 0.6, this.width * 1.8, y - height, this.length * 1.6);
                this.stack.push(c2);
                var c3 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX + Math.random() / 0.8, y, this.startZ - Math.random() / 0.4, this.width * 2.8, y - height, this.length * 2.3);
                this.stack.push(c3);
                y = y - height;
            }
            if (y > 0.0) {
                var c2 = new __WEBPACK_IMPORTED_MODULE_0__geometry_Cube__["a" /* default */](this.startX - Math.random() / 0.9, y, this.startZ + Math.random() / 0.6, this.width * 2.8, y, this.length * 1.8);
                this.stack.push(c2);
                y = h1;
            }
            return;
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Building);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_howler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_howler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_howler_sound_controller__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_howler_sound_controller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_howler_sound_controller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stats_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stats_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_stats_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Square__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geometry_Leaf__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geometry_Mario__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geometry_Pipes__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geometry_Ground__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geometry_Box__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geometry_Question__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geometry_LSystemMesh__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rendering_gl_OpenGLRenderer__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__globals__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__geometry_ScreenQuad__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__geometry_Plane__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__City__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Town__ = __webpack_require__(82);




















// Define an object with application parameters and button callbacks
// This will be referred to by dat.GUI's functions that add GUI elements.
const controls = {
    'Update': update,
    'Iterations': 1,
    'LeafSize': 1,
    'Leaf Color': [0.0, 255.0, 0.0],
    'Piranha Color': [245.0, 0.0, 0.0],
    'Tube Color': [0.0, 255, 0.0]
};
let leaf;
let mario;
let pipes;
let ground;
let question;
let brain;
let robot;
let box;
let plantMesh;
let screenQuad;
let canGo;
let controller = __WEBPACK_IMPORTED_MODULE_2_howler_sound_controller__["HowlerSoundController"];
let cube;
let city;
let town;
let back;
let darkside;
let darkID;
var start;
var elapsed;
let planePos;
let plane;
let loader;
let camera2;
function loadScene() {
    leaf = new __WEBPACK_IMPORTED_MODULE_5__geometry_Leaf__["a" /* default */]();
    mario = new __WEBPACK_IMPORTED_MODULE_6__geometry_Mario__["a" /* default */]();
    pipes = new __WEBPACK_IMPORTED_MODULE_7__geometry_Pipes__["a" /* default */]();
    question = new __WEBPACK_IMPORTED_MODULE_10__geometry_Question__["a" /* default */]();
    brain = new __WEBPACK_IMPORTED_MODULE_10__geometry_Question__["a" /* default */]();
    robot = new __WEBPACK_IMPORTED_MODULE_10__geometry_Question__["a" /* default */]();
    box = new __WEBPACK_IMPORTED_MODULE_9__geometry_Box__["a" /* default */]();
    ground = new __WEBPACK_IMPORTED_MODULE_8__geometry_Ground__["a" /* default */]();
    plantMesh = new __WEBPACK_IMPORTED_MODULE_11__geometry_LSystemMesh__["a" /* default */]();
    screenQuad = new __WEBPACK_IMPORTED_MODULE_16__geometry_ScreenQuad__["a" /* default */]();
    screenQuad.create();
    back = new __WEBPACK_IMPORTED_MODULE_4__geometry_Square__["a" /* default */]();
    back.create();
    canGo = 0;
    plane = new __WEBPACK_IMPORTED_MODULE_17__geometry_Plane__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(2000, 2000), 20);
    plane.create();
    planePos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(0, 120);
    // Get load manager via method
    //   loader = controller.getLoader();
    //
    //   loader.add('dark', {
    //     src: ['darkside.mp3']
    // });
    //
    city = new __WEBPACK_IMPORTED_MODULE_18__City__["a" /* default */]();
    town = new __WEBPACK_IMPORTED_MODULE_19__Town__["a" /* default */]();
    darkside = new __WEBPACK_IMPORTED_MODULE_1_howler__["Howl"]({
        src: ['darkside.mp3'],
        html5: false
    });
    //var loader : Date  = new Date();
    //var loadtime : number = new Date().valueOf() - loader.valueOf();
}
//funtion to load OBJ ... thank u, cis 460 half edge
function loadOBJ(mesh, objFile, callback) {
    var vertIDX = [];
    var vertNor = [];
    var vertBuff = [];
    var buffNor = [];
    var buffIDX = {};
    var finalIDX = [];
    var index = 0;
    var lines = objFile.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var isVert = lines[i].startsWith('v ');
        var isNor = lines[i].startsWith('vn ');
        var isFace = lines[i].startsWith('f ');
        if (isVert) {
            var line = lines[i].split(/\s+/);
            for (var j = 1; j <= 3; j++) {
                vertIDX.push(line[j]);
            }
        }
        else if (isNor) {
            line = lines[i].split(/\s+/);
            for (var j = 1; j <= 3; j++) {
                vertNor.push(line[j]);
            }
        }
        else if (isFace) {
            line = lines[i].split(/\s+/);
            var emptyStringIndex = line.indexOf('');
            if (emptyStringIndex > -1) {
                line.splice(emptyStringIndex, 1);
            }
            var fIndex = line.indexOf('f');
            if (fIndex > -1) {
                line.splice(fIndex, 1);
            }
            for (var j = 0; j < line.length; j++) {
                if (line[j] in buffIDX) {
                    finalIDX.push(buffIDX[line[j]]);
                }
                else {
                    var face = line[j].split('/');
                    var f0 = (parseInt(face[0]) - 1) * 3;
                    var f2 = (parseInt(face[2]) - 1) * 3;
                    vertBuff.push(vertIDX[f0 + 0]);
                    vertBuff.push(vertIDX[f0 + 1]);
                    vertBuff.push(vertIDX[f0 + 2]);
                    vertBuff.push(1);
                    buffNor.push(vertNor[f2 + 0]);
                    buffNor.push(vertNor[f2 + 1]);
                    buffNor.push(vertNor[f2 + 2]);
                    buffNor.push(0);
                    buffIDX[line[j]] = index;
                    finalIDX.push(index);
                    index += 1;
                }
            }
        }
    }
    var finalPos = vertBuff;
    var finalNor = buffNor;
    var finalIndex = finalIDX;
    callback(finalIndex, finalPos, finalNor);
}
function update() {
    //create the Leaf and plant system
}
function main() {
    // Initial display for framerate
    const stats = __WEBPACK_IMPORTED_MODULE_3_stats_js__();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    //uncomment for the fps
    //  document.body.appendChild(stats.domElement);
    // Add controls to the gui
    //const gui = new DAT.GUI();
    // get canvas and webgl context
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
        alert('WebGL 2 not supported!');
    }
    // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
    // Later, we can import `gl` from `globals.ts` to access it
    Object(__WEBPACK_IMPORTED_MODULE_14__globals__["b" /* setGL */])(gl);
    // Initial call to load scene
    loadScene();
    console.log(darkside.state());
    var currState = darkside.state();
    //var darkID : number = darkside.play();
    //var playing : Boolean = darkside.playing( darkID );
    //console.log(playing);
    start = new Date();
    //   while (true){
    //   if (playing){
    //   start = new Date();
    //   break;
    // }
    // }
    //elapsed = new Date().valueOf() - start.valueOf();
    const camera = new __WEBPACK_IMPORTED_MODULE_13__Camera__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 5, 5), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, -20));
    //car front
    camera2 = new __WEBPACK_IMPORTED_MODULE_13__Camera__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-6, 0.5, 1.2), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0));
    //car side
    const camera3 = new __WEBPACK_IMPORTED_MODULE_13__Camera__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-3.5, 1, -1), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0));
    const renderer = new __WEBPACK_IMPORTED_MODULE_12__rendering_gl_OpenGLRenderer__["a" /* default */](canvas);
    //THISSSSSSSSSSSSSS
    renderer.setClearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    const lambert = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(83)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(84)),
    ]);
    const instancedShader = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(85)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(86)),
    ]);
    const flat = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(87)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(88)),
    ]);
    const floor = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(89)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(90)),
    ]);
    const boxShader = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(91)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(92)),
    ]);
    const tealShader = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(93)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(94)),
    ]);
    const dark1 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(95)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(96)),
    ]);
    const dark2 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(97)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(98)),
    ]);
    const dark3 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(99)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(100)),
    ]);
    const dark4 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(101)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(102)),
    ]);
    const dark5 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(103)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(104)),
    ]);
    const dark6 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(105)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(106)),
    ]);
    const dark7 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(107)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(108)),
    ]);
    const dark8 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(109)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(110)),
    ]);
    const dark9 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(111)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(112)),
    ]);
    const dark10 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(113)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(114)),
    ]);
    const dark11 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(115)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(116)),
    ]);
    const dark12 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(117)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(118)),
    ]);
    const dark13 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(119)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(120)),
    ]);
    const dark14 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(121)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(122)),
    ]);
    const dark15 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(123)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(124)),
    ]);
    const dark16 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(125)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(126)),
    ]);
    const dark17 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(127)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(128)),
    ]);
    const dark18 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(129)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(130)),
    ]);
    const dark19 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(131)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(132)),
    ]);
    const dark20 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(133)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(134)),
    ]);
    const dark21 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(135)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(136)),
    ]);
    const dark22 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(137)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(138)),
    ]);
    const dark23 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(139)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(140)),
    ]);
    const dark24 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(141)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(142)),
    ]);
    const dark25 = new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(143)),
        new __WEBPACK_IMPORTED_MODULE_15__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(144)),
    ]);
    function leafCallback(indices, positions, normals) {
        leaf.indices = Uint32Array.from(indices);
        leaf.positions = Float32Array.from(positions);
        leaf.normals = Float32Array.from(normals);
        leaf.create();
    }
    function marioCallback(indices, positions, normals) {
        mario.indices = Uint32Array.from(indices);
        mario.positions = Float32Array.from(positions);
        mario.normals = Float32Array.from(normals);
        mario.create();
    }
    function pipesCallback(indices, positions, normals) {
        pipes.indices = Uint32Array.from(indices);
        pipes.positions = Float32Array.from(positions);
        pipes.normals = Float32Array.from(normals);
        pipes.create();
    }
    function robotCallback(indices, positions, normals) {
        robot.indices = Uint32Array.from(indices);
        robot.positions = Float32Array.from(positions);
        robot.normals = Float32Array.from(normals);
        robot.create();
    }
    function groundCallback(indices, positions, normals) {
        ground.indices = Uint32Array.from(indices);
        ground.positions = Float32Array.from(positions);
        ground.normals = Float32Array.from(normals);
        ground.create();
    }
    function boxCallback(indices, positions, normals) {
        box.indices = Uint32Array.from(indices);
        box.positions = Float32Array.from(positions);
        box.normals = Float32Array.from(normals);
        box.create();
    }
    function questionCallback(indices, positions, normals) {
        question.indices = Uint32Array.from(indices);
        question.positions = Float32Array.from(positions);
        question.normals = Float32Array.from(normals);
        question.create();
    }
    // SOURCE CODE FOR READING OBJ FILE FROM PIAZZA
    //https://piazza.com/class/jr11vjieq8t6om?cid=103
    function parseOBJ(file, callback) {
        let indices = new Uint32Array(0);
        let positions = new Float32Array(0);
        let normals = new Float32Array(0);
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    loadOBJ(leaf, allText, callback);
                }
            }
        };
        rawFile.send(null);
    }
    let brainFileName = "./brain.obj";
    parseOBJ(brainFileName, leafCallback);
    let robotFileName = "./robot.obj";
    parseOBJ(robotFileName, robotCallback);
    let marioFilename = "./bite.obj";
    parseOBJ(marioFilename, marioCallback);
    let tubeFile = "./car.obj";
    parseOBJ(tubeFile, pipesCallback);
    let groundFile = "./ground2.obj";
    parseOBJ(groundFile, groundCallback);
    let boxFile = "./box.obj";
    parseOBJ(boxFile, boxCallback);
    let quesFile = "./brick.obj";
    parseOBJ(quesFile, questionCallback);
    update();
    // This function will be called every frame
    function tick() {
        camera.update();
        camera2.update();
        camera3.update();
        stats.begin();
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        renderer.clear();
        pipes.create();
        robot.create();
        elapsed = new Date().valueOf() - start.valueOf();
        if (canGo == 0) {
            renderer.render(camera, dark1, 0, [screenQuad]);
        }
        else {
            if (elapsed <= 2000) {
                renderer.render(camera, dark1, elapsed, [screenQuad]);
            }
            if (elapsed > 2000 && elapsed <= 11500) {
                renderer.render(camera, dark2, elapsed, [screenQuad]);
            }
            if (elapsed > 11500 && elapsed <= 21500) {
                renderer.render(camera, dark20, elapsed, [screenQuad]);
            }
            if (elapsed > 21500 && elapsed <= 41000) {
                renderer.render(camera, dark21, elapsed, [screenQuad]);
            }
            if (elapsed > 41000 && elapsed <= 49500) {
                let velocity = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
                //velocity[1] += -0.05 - Math.abs(Math.cos(10.471 * elapsed / 5000));
                velocity[0] += 0.9 + Math.sin(0.471 * elapsed / 5000);
                let newPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].add(newPos, velocity, planePos);
                dark5.setPlanePos(newPos);
                planePos = newPos;
                renderer.render(camera, dark5, elapsed, [plane]);
            }
            if (elapsed > 49500 && elapsed <= 60000) {
                renderer.render(camera, dark6, elapsed, [screenQuad]);
            }
            if (elapsed > 60000 && elapsed <= 70000) {
                renderer.render(camera, dark7, elapsed, [screenQuad]);
            }
            if (elapsed > 70000 && elapsed <= 79000) {
                renderer.render(camera, dark8, elapsed, [screenQuad]);
            }
            if (elapsed > 79000 && elapsed <= 89000) {
                renderer.render(camera, dark9, elapsed, [screenQuad]);
            }
            if (elapsed > 89000 && elapsed <= 98000) {
                renderer.render(camera, dark10, elapsed, [screenQuad]);
            }
            if (elapsed > 98000 && elapsed <= 108000) {
                renderer.render(camera, dark11, elapsed, [screenQuad]);
            }
            if (elapsed > 108000 && elapsed <= 117000) {
                renderer.render(camera, dark12, elapsed, [screenQuad]);
            }
            if (elapsed > 117000 && elapsed <= 127000) {
                renderer.render(camera, dark13, elapsed, [screenQuad]);
            }
            if (elapsed > 127000 && elapsed <= 137000) {
                renderer.render(camera, dark14, elapsed, [screenQuad]);
            }
            if (elapsed > 137000 && elapsed <= 146000) {
                renderer.render(camera, dark15, elapsed, [screenQuad]);
            }
            if (elapsed > 146000 && elapsed <= 151000) {
                renderer.render(camera, dark16, elapsed, [screenQuad]);
            }
            if (elapsed > 151000 && elapsed <= 161000) {
                let velocity = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(10, 0);
                velocity[0] += (1.9 + Math.abs(Math.sin(10.471 * elapsed / 1000)));
                let newPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].sub(newPos, planePos, velocity);
                dark17.setPlanePos(newPos);
                planePos = newPos;
                renderer.render(camera2, dark17, elapsed, [plane]);
                renderer.render(camera, dark16, elapsed, [screenQuad]);
                renderer.render(camera2, lambert, elapsed, [pipes]);
            }
            if (elapsed > 161000 && elapsed <= 170500) {
                let velocity = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
                velocity[1] += -0.05 - Math.abs(Math.cos(10.471 * elapsed / 5000));
                velocity[0] += 0.5 + Math.sin(10.471 * elapsed / 5000);
                let newPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].add(newPos, velocity, planePos);
                dark3.setPlanePos(newPos);
                planePos = newPos;
                renderer.render(camera, dark3, elapsed, [plane]);
                renderer.render(camera, dark4, elapsed, [screenQuad]);
            }
            if (elapsed > 170500 && elapsed <= 180000) {
                renderer.render(camera, dark16, elapsed, [screenQuad]);
                renderer.render(camera3, lambert, elapsed, [pipes]);
            }
            if (elapsed > 180000 && elapsed <= 190000) {
                renderer.render(camera, dark9, elapsed, [screenQuad]);
                renderer.render(camera2, dark18, elapsed, [robot]);
            }
            if (elapsed > 190000 && elapsed <= 199000) {
                renderer.render(camera, dark21, elapsed, [screenQuad]);
            }
            if (elapsed > 199000 && elapsed <= 209000) {
                renderer.render(camera, dark22, elapsed, [screenQuad]);
            }
            if (elapsed > 209000 && elapsed <= 218000) {
                renderer.render(camera, dark23, elapsed, [screenQuad]);
            }
            if (elapsed > 218000 && elapsed <= 223000) {
                renderer.render(camera, dark24, elapsed, [screenQuad]);
            }
            //should start us over
            if (elapsed > 225000) {
                canGo = 0;
            }
        }
        //renderer.render(camera, floor, [ground]);
        stats.end();
        // Tell the browser to call `tick` again whenever it renders a new frame
        requestAnimationFrame(tick);
    }
    window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.setAspectRatio(window.innerWidth / window.innerHeight);
        camera.updateProjectionMatrix();
        camera2.setAspectRatio(window.innerWidth / window.innerHeight);
        camera2.updateProjectionMatrix();
        camera3.setAspectRatio(window.innerWidth / window.innerHeight);
        camera3.updateProjectionMatrix();
        boxShader.setDimensions(window.innerWidth, window.innerHeight);
        tealShader.setDimensions(window.innerWidth, window.innerHeight);
    }, false);
    window.addEventListener('keyup', function (e) {
        switch (e.key) {
            case 'w':
                darkside.play();
                start = new Date();
                canGo = 1;
                break;
        }
    }, false);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.setAspectRatio(window.innerWidth / window.innerHeight);
    camera2.setAspectRatio(window.innerWidth / window.innerHeight);
    camera3.setAspectRatio(window.innerWidth / window.innerHeight);
    boxShader.setDimensions(window.innerWidth, window.innerHeight);
    tealShader.setDimensions(window.innerWidth, window.innerHeight);
    dark1.setDimensions(window.innerWidth, window.innerHeight);
    dark2.setDimensions(window.innerWidth, window.innerHeight);
    dark3.setDimensions(window.innerWidth, window.innerHeight);
    dark4.setDimensions(window.innerWidth, window.innerHeight);
    dark5.setDimensions(window.innerWidth, window.innerHeight);
    dark6.setDimensions(window.innerWidth, window.innerHeight);
    dark7.setDimensions(window.innerWidth, window.innerHeight);
    dark8.setDimensions(window.innerWidth, window.innerHeight);
    dark9.setDimensions(window.innerWidth, window.innerHeight);
    dark10.setDimensions(window.innerWidth, window.innerHeight);
    dark11.setDimensions(window.innerWidth, window.innerHeight);
    dark12.setDimensions(window.innerWidth, window.innerHeight);
    dark13.setDimensions(window.innerWidth, window.innerHeight);
    dark14.setDimensions(window.innerWidth, window.innerHeight);
    dark15.setDimensions(window.innerWidth, window.innerHeight);
    dark16.setDimensions(window.innerWidth, window.innerHeight);
    dark17.setDimensions(window.innerWidth, window.innerHeight);
    dark18.setDimensions(window.innerWidth, window.innerHeight);
    dark20.setDimensions(window.innerWidth, window.innerHeight);
    dark21.setDimensions(window.innerWidth, window.innerHeight);
    dark22.setDimensions(window.innerWidth, window.innerHeight);
    dark23.setDimensions(window.innerWidth, window.innerHeight);
    dark24.setDimensions(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
    camera2.updateProjectionMatrix();
    camera3.updateProjectionMatrix();
    // Start the render loop
    tick();
}
main();


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export LDU */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export mul */
/* unused harmony export sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }
  out[0] = 1;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];

  // Calculate the determinant
  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat2.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export invert */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export translate */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromTranslation */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export mul */
/* unused harmony export sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }
  out[0] = 1;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];

  var det = aa * ad - ab * ac;
  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export fromValues */
/* unused harmony export fromRotationTranslationValues */
/* unused harmony export fromRotationTranslation */
/* unused harmony export fromTranslation */
/* unused harmony export fromRotation */
/* unused harmony export fromMat4 */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export set */
/* unused harmony export getReal */
/* unused harmony export getDual */
/* unused harmony export setReal */
/* unused harmony export setDual */
/* unused harmony export getTranslation */
/* unused harmony export translate */
/* unused harmony export rotateX */
/* unused harmony export rotateY */
/* unused harmony export rotateZ */
/* unused harmony export rotateByQuatAppend */
/* unused harmony export rotateByQuatPrepend */
/* unused harmony export rotateAroundAxis */
/* unused harmony export add */
/* unused harmony export multiply */
/* unused harmony export mul */
/* unused harmony export scale */
/* unused harmony export dot */
/* unused harmony export lerp */
/* unused harmony export invert */
/* unused harmony export conjugate */
/* unused harmony export length */
/* unused harmony export len */
/* unused harmony export squaredLength */
/* unused harmony export sqrLen */
/* unused harmony export normalize */
/* unused harmony export str */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quat_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mat4_js__ = __webpack_require__(8);




/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }
  dq[3] = 1;
  return dq;
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
function clone(a) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}

/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}

/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}

/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
function fromMat4(out, a) {
  //TODO Optimize this
  var outer = __WEBPACK_IMPORTED_MODULE_1__quat_js__["b" /* create */]();
  __WEBPACK_IMPORTED_MODULE_2__mat4_js__["getRotation"](outer, a);
  var t = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  __WEBPACK_IMPORTED_MODULE_2__mat4_js__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;

  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}

/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */
var getReal = __WEBPACK_IMPORTED_MODULE_1__quat_js__["a" /* copy */];

/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */
function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}

/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */
var setReal = __WEBPACK_IMPORTED_MODULE_1__quat_js__["a" /* copy */];

/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */
function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["e" /* rotateX */](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["f" /* rotateY */](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["g" /* rotateZ */](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];

  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];

  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return copy(out, a);
  }
  var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);

  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;

  return out;
}

/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}

/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */
function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}

/**
 * Alias for {@link quat2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}

/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = __WEBPACK_IMPORTED_MODULE_1__quat_js__["c" /* dot */];

/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */
function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;

  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;

  return out;
}

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}

/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
var length = __WEBPACK_IMPORTED_MODULE_1__quat_js__["d" /* length */];

/**
 * Alias for {@link quat2.length}
 * @function
 */
var len = length;

/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = __WEBPACK_IMPORTED_MODULE_1__quat_js__["h" /* squaredLength */];

/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
function normalize(out, a) {
  var magnitude = squaredLength(a);
  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);

    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;

    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];

    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;

    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;

    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }
  return out;
}

/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */
function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c);

  //perform rotation and translate to correct position
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];

  return out;
}

/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];

  var len1 = x1 * x1 + y1 * y1;
  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;
  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec2.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec2.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var SoundController_1 = __webpack_require__(13);
var controller = new SoundController_1.SoundController();
exports.HowlerSoundController = controller;
__export(__webpack_require__(13));
__export(__webpack_require__(14));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Stats=t()}(this,function(){"use strict";var c=function(){var n=0,l=document.createElement("div");function e(e){return l.appendChild(e.dom),e}function t(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),t(++n%l.children.length)},!1);var i=(performance||Date).now(),a=i,o=0,f=e(new c.Panel("FPS","#0ff","#002")),r=e(new c.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new c.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:l,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(r.update(e-i,200),a+1e3<=e&&(f.update(1e3*o/(e-a),100),a=e,o=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:l,setMode:t}};return c.Panel=function(n,l,i){var a=1/0,o=0,f=Math.round,r=f(window.devicePixelRatio||1),d=80*r,e=48*r,c=3*r,p=2*r,u=3*r,s=15*r,m=74*r,h=30*r,y=document.createElement("canvas");y.width=d,y.height=e,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,d,e),v.fillStyle=l,v.fillText(n,c,p),v.fillRect(u,s,m,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u,s,m,h),{dom:y,update:function(e,t){a=Math.min(a,e),o=Math.max(o,e),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,d,s),v.fillStyle=l,v.fillText(f(e)+" "+n+" ("+f(a)+"-"+f(o)+")",c,p),v.drawImage(y,u+r,s,m-r,h,u,s,m-r,h),v.fillRect(u+m-r,s,r,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u+m-r,s,r,f((1-e/t)*h))}}},c});


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


class Square extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            0, 2, 3]);
        this.positions = new Float32Array([-105, -105, 0, 1,
            105, -105, 0, 1,
            105, 105, 0, 1,
            -105, 105, 0, 1]);
        this.generateIdx();
        this.generatePos();
        this.generateCol();
        this.generateTranslate();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        console.log(`Created square`);
    }
    setInstanceVBOs(offsets, colors) {
        this.colors = colors;
        this.offsets = offsets;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.offsets, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Square);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(0);



class Leaf extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
        this.color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.05, 0.93, 0.15);
    }
    setColor(newColor) {
        this.color = newColor;
    }
    resetColors() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(this.color[0]);
            colorsArr.push(this.color[1]);
            colorsArr.push(this.color[2]);
            colorsArr.push(1.0);
        }
        this.colors = new Float32Array(colorsArr);
    }
    create() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(0.30);
            colorsArr.push(0.6);
            colorsArr.push(0.26);
            colorsArr.push(1);
        }
        this.colors = new Float32Array(colorsArr);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Leaf);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(0);



class Mario extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
        this.color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.95, 0.33, 0.25);
    }
    setColor(newColor) {
        this.color = newColor;
    }
    resetColors() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(this.color[0]);
            colorsArr.push(this.color[1]);
            colorsArr.push(this.color[2]);
            colorsArr.push(1.0);
        }
        this.colors = new Float32Array(colorsArr);
    }
    create() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(this.color[0]);
            colorsArr.push(this.color[1]);
            colorsArr.push(this.color[2]);
            colorsArr.push(1.0);
        }
        this.colors = new Float32Array(colorsArr);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Mario);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(0);



class Pipes extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
        this.color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.25, 0.73, 0.25);
    }
    setColor(newColor) {
        this.color = newColor;
    }
    resetColors() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(this.color[0]);
            colorsArr.push(this.color[1]);
            colorsArr.push(this.color[2]);
            colorsArr.push(1.0);
        }
        this.colors = new Float32Array(colorsArr);
    }
    create() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(this.color[0]);
            colorsArr.push(this.color[1]);
            colorsArr.push(this.color[2]);
            colorsArr.push(1.0);
        }
        this.colors = new Float32Array(colorsArr);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Pipes);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


class Ground extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
    }
    create() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(0.73);
            colorsArr.push(0.64);
            colorsArr.push(0.49);
            colorsArr.push(1);
        }
        this.colors = new Float32Array(colorsArr);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Ground);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


class Box extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
    }
    create() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(0.99);
            colorsArr.push(0.74);
            colorsArr.push(0.02);
            colorsArr.push(1);
        }
        this.colors = new Float32Array(colorsArr);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        //this.numInstances = 2;
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Box);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


class Question extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
    }
    create() {
        var colorsArr = [];
        for (var i = 0; i < this.positions.length; i += 4) {
            colorsArr.push(0.0);
            colorsArr.push(0.0);
            colorsArr.push(0.0);
            colorsArr.push(1);
        }
        this.colors = new Float32Array(colorsArr);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Question);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


class LSystem extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
        this.colTemp = [];
        this.posTemp = [];
        this.norTemp = [];
        this.uvsTemp = [];
        this.idxTemp = [];
        //this.indices = new Uint32Array(0);
        this.positions = new Float32Array(0);
        this.normals = new Float32Array(0);
        this.colors = new Float32Array(0);
        this.idxTemp = [];
        this.posTemp = [];
        this.norTemp = [];
        this.colTemp = [];
        this.uvsTemp = [];
    }
    addIndex(newIndex) {
        this.idxTemp.push(newIndex);
    }
    addPos(newPos) {
        this.posTemp.push(newPos);
    }
    addNor(newNor) {
        this.norTemp.push(newNor);
    }
    addCol(newCol) {
        this.colTemp.push(newCol);
    }
    clear() {
        this.idxTemp = [];
        this.posTemp = [];
        this.uvsTemp = [];
        this.norTemp = [];
        this.colTemp = [];
    }
    getMaxIndex() {
        if (this.idxTemp.length == 0) {
            return -1;
        }
        else {
            var max = this.idxTemp.reduce(function (a, b) {
                return Math.max(a, b);
            });
            return max;
        }
    }
    create() {
        this.indices = new Uint32Array(this.idxTemp);
        this.positions = new Float32Array(this.posTemp);
        this.normals = new Float32Array(this.norTemp);
        this.colors = new Float32Array(this.colTemp);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (LSystem);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


// In this file, `gl` is accessible because it is imported above
class OpenGLRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(0.42, 0.46, 0.14, 1); // default geometry color
        this.time = 0;
    }
    setClearColor(r, g, b, a) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clearColor(r, g, b, a);
    }
    setSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    setGeometryColor(color) {
        this.color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(color[0] / 255, color[1] / 255, color[2] / 255, 1);
    }
    clear() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT | __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_BUFFER_BIT);
    }
    render(camera, prog, elapsed, drawables) {
        let model = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        let viewProj = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        let color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(1, 0, 0, 1);
        let axes = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat3 */].fromValues(camera.right[0], camera.right[1], camera.right[2], camera.up[0], camera.up[1], camera.up[2], camera.forward[0], camera.forward[1], camera.forward[2]);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(model);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].multiply(viewProj, camera.projectionMatrix, camera.viewMatrix);
        prog.setModelMatrix(model);
        prog.setViewProjMatrix(viewProj);
        prog.setCameraAxes(axes);
        prog.setGeometryColor(this.color);
        prog.setTime(elapsed);
        //this.time++;
        for (let drawable of drawables) {
            prog.draw(drawable);
        }
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (OpenGLRenderer);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(3);
var CameraControls = __webpack_require__(44);

class Camera {
    constructor(position, target) {
        this.projectionMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.viewMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.fovy = 45;
        this.aspectRatio = 1;
        this.near = 0.1;
        this.far = 1000;
        this.position = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        this.direction = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        this.target = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        this.up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        this.right = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        this.forward = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        const canvas = document.getElementById('canvas');
        this.controls = CameraControls(canvas, {
            eye: position,
            center: target,
        });
        this.controls.up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 100, 0);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.target, this.position, this.direction);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].lookAt(this.viewMatrix, this.controls.eye, this.controls.center, this.controls.up);
        this.position = this.controls.eye;
        this.up = this.controls.up;
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].subtract(this.forward, this.target, this.position);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(this.forward, this.forward);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].cross(this.right, this.forward, this.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(this.right, this.right);
    }
    setAspectRatio(aspectRatio) {
        this.aspectRatio = aspectRatio;
    }
    updateProjectionMatrix() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].perspective(this.projectionMatrix, this.fovy, this.aspectRatio, this.near, this.far);
    }
    update() {
        this.controls.tick();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.target, this.position, this.direction);
        this.position = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(this.controls.eye[0], this.controls.eye[1], this.controls.eye[2]);
        this.target = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(this.controls.center[0], this.controls.center[1], this.controls.center[2]);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].lookAt(this.viewMatrix, this.controls.eye, this.controls.center, this.controls.up);
        this.position = this.controls.eye;
        this.up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(this.controls.up[0], this.controls.up[1], this.controls.up[2]);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(this.up, this.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].subtract(this.forward, this.target, this.position);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(this.forward, this.forward);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].cross(this.right, this.forward, this.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(this.right, this.right);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].cross(this.up, this.right, this.forward);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(this.up, this.up);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Camera);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createCamera

var now         = __webpack_require__(45)
var createView  = __webpack_require__(46)
var mouseChange = __webpack_require__(69)
var mouseWheel  = __webpack_require__(71)
var mouseOffset = __webpack_require__(74)
var hasPassive  = __webpack_require__(75)

function createCamera(element, options) {
  element = element || document.body
  options = options || {}

  var limits  = [ 0.01, Infinity ]
  if('distanceLimits' in options) {
    limits[0] = options.distanceLimits[0]
    limits[1] = options.distanceLimits[1]
  }
  if('zoomMin' in options) {
    limits[0] = options.zoomMin
  }
  if('zoomMax' in options) {
    limits[1] = options.zoomMax
  }

  var view = createView({
    center: options.center || [0,0,0],
    up:     options.up     || [0,1,0],
    eye:    options.eye    || [0,0,10],
    mode:   options.mode   || 'orbit',
    distanceLimits: limits
  })

  var pmatrix = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  var distance = 0.0
  var width   = element.clientWidth
  var height  = element.clientHeight

  var camera = {
    view:               view,
    element:            element,
    delay:              options.delay          || 16,
    rotateSpeed:        options.rotateSpeed    || 1,
    zoomSpeed:          options.zoomSpeed      || 1,
    translateSpeed:     options.translateSpeed || 1,
    flipX:              !!options.flipX,
    flipY:              !!options.flipY,
    modes:              view.modes,
    tick: function() {
      var t = now()
      var delay = this.delay
      view.idle(t-delay)
      view.flush(t-(100+delay*2))
      var ctime = t - 2 * delay
      view.recalcMatrix(ctime)
      var allEqual = true
      var matrix = view.computedMatrix
      for(var i=0; i<16; ++i) {
        allEqual = allEqual && (pmatrix[i] === matrix[i])
        pmatrix[i] = matrix[i]
      }
      var sizeChanged =
          element.clientWidth === width &&
          element.clientHeight === height
      width  = element.clientWidth
      height = element.clientHeight
      if(allEqual) {
        return !sizeChanged
      }
      distance = Math.exp(view.computedRadius[0])
      return true
    },
    lookAt: function(center, eye, up) {
      view.lookAt(view.lastT(), center, eye, up)
    },
    rotate: function(pitch, yaw, roll) {
      view.rotate(view.lastT(), pitch, yaw, roll)
    },
    pan: function(dx, dy, dz) {
      view.pan(view.lastT(), dx, dy, dz)
    },
    translate: function(dx, dy, dz) {
      view.translate(view.lastT(), dx, dy, dz)
    }
  }

  Object.defineProperties(camera, {
    matrix: {
      get: function() {
        return view.computedMatrix
      },
      set: function(mat) {
        view.setMatrix(view.lastT(), mat)
        return view.computedMatrix
      },
      enumerable: true
    },
    mode: {
      get: function() {
        return view.getMode()
      },
      set: function(mode) {
        view.setMode(mode)
        return view.getMode()
      },
      enumerable: true
    },
    center: {
      get: function() {
        return view.computedCenter
      },
      set: function(ncenter) {
        view.lookAt(view.lastT(), ncenter)
        return view.computedCenter
      },
      enumerable: true
    },
    eye: {
      get: function() {
        return view.computedEye
      },
      set: function(neye) {
        view.lookAt(view.lastT(), null, neye)
        return view.computedEye
      },
      enumerable: true
    },
    up: {
      get: function() {
        return view.computedUp
      },
      set: function(nup) {
        view.lookAt(view.lastT(), null, null, nup)
        return view.computedUp
      },
      enumerable: true
    },
    distance: {
      get: function() {
        return distance
      },
      set: function(d) {
        view.setDistance(view.lastT(), d)
        return d
      },
      enumerable: true
    },
    distanceLimits: {
      get: function() {
        return view.getDistanceLimits(limits)
      },
      set: function(v) {
        view.setDistanceLimits(v)
        return v
      },
      enumerable: true
    }
  })

  element.addEventListener('contextmenu', function(ev) {
    ev.preventDefault()
    return false
  })

  var lastX = 0, lastY = 0, lastMods = {shift: false, control: false, alt: false, meta: false}
  mouseChange(element, handleInteraction)

  //enable simple touch interactions
  element.addEventListener('touchstart', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(0, xy[0], xy[1], lastMods)
    handleInteraction(1, xy[0], xy[1], lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  element.addEventListener('touchmove', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(1, xy[0], xy[1], lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  element.addEventListener('touchend', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(0, lastX, lastY, lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  function handleInteraction (buttons, x, y, mods) {
    var scale = 1.0 / element.clientHeight
    var dx    = scale * (x - lastX)
    var dy    = scale * (y - lastY)

    var flipX = camera.flipX ? 1 : -1
    var flipY = camera.flipY ? 1 : -1

    var drot  = Math.PI * camera.rotateSpeed

    var t = now()

    if(buttons & 1) {
      if(mods.shift) {
        view.rotate(t, 0, 0, -dx * drot)
      } else {
        view.rotate(t, flipX * drot * dx, -flipY * drot * dy, 0)
      }
    } else if(buttons & 2) {
      view.pan(t, -camera.translateSpeed * dx * distance, camera.translateSpeed * dy * distance, 0)
    } else if(buttons & 4) {
      var kzoom = camera.zoomSpeed * dy / window.innerHeight * (t - view.lastT()) * 50.0
      view.pan(t, 0, 0, distance * (Math.exp(kzoom) - 1))
    }

    lastX = x
    lastY = y
    lastMods = mods
  }

  mouseWheel(element, function(dx, dy, dz) {
    var flipX = camera.flipX ? 1 : -1
    var flipY = camera.flipY ? 1 : -1
    var t = now()
    if(Math.abs(dx) > Math.abs(dy)) {
      view.rotate(t, 0, 0, -dx * flipX * Math.PI * camera.rotateSpeed / window.innerWidth)
    } else {
      var kzoom = camera.zoomSpeed * flipY * dy / window.innerHeight * (t - view.lastT()) / 100.0
      view.pan(t, 0, 0, distance * (Math.exp(kzoom) - 1))
    }
  }, true)

  return camera
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports =
  global.performance &&
  global.performance.now ? function now() {
    return performance.now()
  } : Date.now || function now() {
    return +new Date
  }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createViewController

var createTurntable = __webpack_require__(47)
var createOrbit     = __webpack_require__(50)
var createMatrix    = __webpack_require__(53)

function ViewController(controllers, mode) {
  this._controllerNames = Object.keys(controllers)
  this._controllerList = this._controllerNames.map(function(n) {
    return controllers[n]
  })
  this._mode   = mode
  this._active = controllers[mode]
  if(!this._active) {
    this._mode   = 'turntable'
    this._active = controllers.turntable
  }
  this.modes = this._controllerNames
  this.computedMatrix = this._active.computedMatrix
  this.computedEye    = this._active.computedEye
  this.computedUp     = this._active.computedUp
  this.computedCenter = this._active.computedCenter
  this.computedRadius = this._active.computedRadius
}

var proto = ViewController.prototype

var COMMON_METHODS = [
  ['flush', 1],
  ['idle', 1],
  ['lookAt', 4],
  ['rotate', 4],
  ['pan', 4],
  ['translate', 4],
  ['setMatrix', 2],
  ['setDistanceLimits', 2],
  ['setDistance', 2]
]

COMMON_METHODS.forEach(function(method) {
  var name = method[0]
  var argNames = []
  for(var i=0; i<method[1]; ++i) {
    argNames.push('a'+i)
  }
  var code = 'var cc=this._controllerList;for(var i=0;i<cc.length;++i){cc[i].'+method[0]+'('+argNames.join()+')}'
  proto[name] = Function.apply(null, argNames.concat(code))
})

proto.recalcMatrix = function(t) {
  this._active.recalcMatrix(t)
}

proto.getDistance = function(t) {
  return this._active.getDistance(t)
}
proto.getDistanceLimits = function(out) {
  return this._active.getDistanceLimits(out)
}

proto.lastT = function() {
  return this._active.lastT()
}

proto.setMode = function(mode) {
  if(mode === this._mode) {
    return
  }
  var idx = this._controllerNames.indexOf(mode)
  if(idx < 0) {
    return
  }
  var prev  = this._active
  var next  = this._controllerList[idx]
  var lastT = Math.max(prev.lastT(), next.lastT())

  prev.recalcMatrix(lastT)
  next.setMatrix(lastT, prev.computedMatrix)
  
  this._active = next
  this._mode   = mode

  //Update matrix properties
  this.computedMatrix = this._active.computedMatrix
  this.computedEye    = this._active.computedEye
  this.computedUp     = this._active.computedUp
  this.computedCenter = this._active.computedCenter
  this.computedRadius = this._active.computedRadius
}

proto.getMode = function() {
  return this._mode
}

function createViewController(options) {
  options = options || {}

  var eye       = options.eye    || [0,0,1]
  var center    = options.center || [0,0,0]
  var up        = options.up     || [0,1,0]
  var limits    = options.distanceLimits || [0, Infinity]
  var mode      = options.mode   || 'turntable'

  var turntable = createTurntable()
  var orbit     = createOrbit()
  var matrix    = createMatrix()

  turntable.setDistanceLimits(limits[0], limits[1])
  turntable.lookAt(0, eye, center, up)
  orbit.setDistanceLimits(limits[0], limits[1])
  orbit.lookAt(0, eye, center, up)
  matrix.setDistanceLimits(limits[0], limits[1])
  matrix.lookAt(0, eye, center, up)

  return new ViewController({
    turntable: turntable,
    orbit: orbit,
    matrix: matrix
  }, mode)
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createTurntableController

var filterVector = __webpack_require__(15)
var invert44     = __webpack_require__(4)
var rotateM      = __webpack_require__(49)
var cross        = __webpack_require__(17)
var normalize3   = __webpack_require__(6)
var dot3         = __webpack_require__(18)

function len3(x, y, z) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))
}

function clamp1(x) {
  return Math.min(1.0, Math.max(-1.0, x))
}

function findOrthoPair(v) {
  var vx = Math.abs(v[0])
  var vy = Math.abs(v[1])
  var vz = Math.abs(v[2])

  var u = [0,0,0]
  if(vx > Math.max(vy, vz)) {
    u[2] = 1
  } else if(vy > Math.max(vx, vz)) {
    u[0] = 1
  } else {
    u[1] = 1
  }

  var vv = 0
  var uv = 0
  for(var i=0; i<3; ++i ) {
    vv += v[i] * v[i]
    uv += u[i] * v[i]
  }
  for(var i=0; i<3; ++i) {
    u[i] -= (uv / vv) *  v[i]
  }
  normalize3(u, u)
  return u
}

function TurntableController(zoomMin, zoomMax, center, up, right, radius, theta, phi) {
  this.center = filterVector(center)
  this.up     = filterVector(up)
  this.right  = filterVector(right)
  this.radius = filterVector([radius])
  this.angle  = filterVector([theta, phi])
  this.angle.bounds = [[-Infinity,-Math.PI/2], [Infinity,Math.PI/2]]
  this.setDistanceLimits(zoomMin, zoomMax)

  this.computedCenter = this.center.curve(0)
  this.computedUp     = this.up.curve(0)
  this.computedRight  = this.right.curve(0)
  this.computedRadius = this.radius.curve(0)
  this.computedAngle  = this.angle.curve(0)
  this.computedToward = [0,0,0]
  this.computedEye    = [0,0,0]
  this.computedMatrix = new Array(16)
  for(var i=0; i<16; ++i) {
    this.computedMatrix[i] = 0.5
  }

  this.recalcMatrix(0)
}

var proto = TurntableController.prototype

proto.setDistanceLimits = function(minDist, maxDist) {
  if(minDist > 0) {
    minDist = Math.log(minDist)
  } else {
    minDist = -Infinity
  }
  if(maxDist > 0) {
    maxDist = Math.log(maxDist)
  } else {
    maxDist = Infinity
  }
  maxDist = Math.max(maxDist, minDist)
  this.radius.bounds[0][0] = minDist
  this.radius.bounds[1][0] = maxDist
}

proto.getDistanceLimits = function(out) {
  var bounds = this.radius.bounds[0]
  if(out) {
    out[0] = Math.exp(bounds[0][0])
    out[1] = Math.exp(bounds[1][0])
    return out
  }
  return [ Math.exp(bounds[0][0]), Math.exp(bounds[1][0]) ]
}

proto.recalcMatrix = function(t) {
  //Recompute curves
  this.center.curve(t)
  this.up.curve(t)
  this.right.curve(t)
  this.radius.curve(t)
  this.angle.curve(t)

  //Compute frame for camera matrix
  var up     = this.computedUp
  var right  = this.computedRight
  var uu = 0.0
  var ur = 0.0
  for(var i=0; i<3; ++i) {
    ur += up[i] * right[i]
    uu += up[i] * up[i]
  }
  var ul = Math.sqrt(uu)
  var rr = 0.0
  for(var i=0; i<3; ++i) {
    right[i] -= up[i] * ur / uu
    rr       += right[i] * right[i]
    up[i]    /= ul
  }
  var rl = Math.sqrt(rr)
  for(var i=0; i<3; ++i) {
    right[i] /= rl
  }

  //Compute toward vector
  var toward = this.computedToward
  cross(toward, up, right)
  normalize3(toward, toward)

  //Compute angular parameters
  var radius = Math.exp(this.computedRadius[0])
  var theta  = this.computedAngle[0]
  var phi    = this.computedAngle[1]

  var ctheta = Math.cos(theta)
  var stheta = Math.sin(theta)
  var cphi   = Math.cos(phi)
  var sphi   = Math.sin(phi)

  var center = this.computedCenter

  var wx = ctheta * cphi 
  var wy = stheta * cphi
  var wz = sphi

  var sx = -ctheta * sphi
  var sy = -stheta * sphi
  var sz = cphi

  var eye = this.computedEye
  var mat = this.computedMatrix
  for(var i=0; i<3; ++i) {
    var x      = wx * right[i] + wy * toward[i] + wz * up[i]
    mat[4*i+1] = sx * right[i] + sy * toward[i] + sz * up[i]
    mat[4*i+2] = x
    mat[4*i+3] = 0.0
  }

  var ax = mat[1]
  var ay = mat[5]
  var az = mat[9]
  var bx = mat[2]
  var by = mat[6]
  var bz = mat[10]
  var cx = ay * bz - az * by
  var cy = az * bx - ax * bz
  var cz = ax * by - ay * bx
  var cl = len3(cx, cy, cz)
  cx /= cl
  cy /= cl
  cz /= cl
  mat[0] = cx
  mat[4] = cy
  mat[8] = cz

  for(var i=0; i<3; ++i) {
    eye[i] = center[i] + mat[2+4*i]*radius
  }

  for(var i=0; i<3; ++i) {
    var rr = 0.0
    for(var j=0; j<3; ++j) {
      rr += mat[i+4*j] * eye[j]
    }
    mat[12+i] = -rr
  }
  mat[15] = 1.0
}

proto.getMatrix = function(t, result) {
  this.recalcMatrix(t)
  var mat = this.computedMatrix
  if(result) {
    for(var i=0; i<16; ++i) {
      result[i] = mat[i]
    }
    return result
  }
  return mat
}

var zAxis = [0,0,0]
proto.rotate = function(t, dtheta, dphi, droll) {
  this.angle.move(t, dtheta, dphi)
  if(droll) {
    this.recalcMatrix(t)

    var mat = this.computedMatrix
    zAxis[0] = mat[2]
    zAxis[1] = mat[6]
    zAxis[2] = mat[10]

    var up     = this.computedUp
    var right  = this.computedRight
    var toward = this.computedToward

    for(var i=0; i<3; ++i) {
      mat[4*i]   = up[i]
      mat[4*i+1] = right[i]
      mat[4*i+2] = toward[i]
    }
    rotateM(mat, mat, droll, zAxis)
    for(var i=0; i<3; ++i) {
      up[i] =    mat[4*i]
      right[i] = mat[4*i+1]
    }

    this.up.set(t, up[0], up[1], up[2])
    this.right.set(t, right[0], right[1], right[2])
  }
}

proto.pan = function(t, dx, dy, dz) {
  dx = dx || 0.0
  dy = dy || 0.0
  dz = dz || 0.0

  this.recalcMatrix(t)
  var mat = this.computedMatrix

  var dist = Math.exp(this.computedRadius[0])

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]
  var ul = len3(ux, uy, uz)
  ux /= ul
  uy /= ul
  uz /= ul

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl

  var vx = rx * dx + ux * dy
  var vy = ry * dx + uy * dy
  var vz = rz * dx + uz * dy
  this.center.move(t, vx, vy, vz)

  //Update z-component of radius
  var radius = Math.exp(this.computedRadius[0])
  radius = Math.max(1e-4, radius + dz)
  this.radius.set(t, Math.log(radius))
}

proto.translate = function(t, dx, dy, dz) {
  this.center.move(t,
    dx||0.0,
    dy||0.0,
    dz||0.0)
}

//Recenters the coordinate axes
proto.setMatrix = function(t, mat, axes, noSnap) {
  
  //Get the axes for tare
  var ushift = 1
  if(typeof axes === 'number') {
    ushift = (axes)|0
  } 
  if(ushift < 0 || ushift > 3) {
    ushift = 1
  }
  var vshift = (ushift + 2) % 3
  var fshift = (ushift + 1) % 3

  //Recompute state for new t value
  if(!mat) { 
    this.recalcMatrix(t)
    mat = this.computedMatrix
  }

  //Get right and up vectors
  var ux = mat[ushift]
  var uy = mat[ushift+4]
  var uz = mat[ushift+8]
  if(!noSnap) {
    var ul = len3(ux, uy, uz)
    ux /= ul
    uy /= ul
    uz /= ul
  } else {
    var ax = Math.abs(ux)
    var ay = Math.abs(uy)
    var az = Math.abs(uz)
    var am = Math.max(ax,ay,az)
    if(ax === am) {
      ux = (ux < 0) ? -1 : 1
      uy = uz = 0
    } else if(az === am) {
      uz = (uz < 0) ? -1 : 1
      ux = uy = 0
    } else {
      uy = (uy < 0) ? -1 : 1
      ux = uz = 0
    }
  }

  var rx = mat[vshift]
  var ry = mat[vshift+4]
  var rz = mat[vshift+8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl
  
  var fx = uy * rz - uz * ry
  var fy = uz * rx - ux * rz
  var fz = ux * ry - uy * rx
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  this.center.jump(t, ex, ey, ez)
  this.radius.idle(t)
  this.up.jump(t, ux, uy, uz)
  this.right.jump(t, rx, ry, rz)

  var phi, theta
  if(ushift === 2) {
    var cx = mat[1]
    var cy = mat[5]
    var cz = mat[9]
    var cr = cx * rx + cy * ry + cz * rz
    var cf = cx * fx + cy * fy + cz * fz
    if(tu < 0) {
      phi = -Math.PI/2
    } else {
      phi = Math.PI/2
    }
    theta = Math.atan2(cf, cr)
  } else {
    var tx = mat[2]
    var ty = mat[6]
    var tz = mat[10]
    var tu = tx * ux + ty * uy + tz * uz
    var tr = tx * rx + ty * ry + tz * rz
    var tf = tx * fx + ty * fy + tz * fz

    phi = Math.asin(clamp1(tu))
    theta = Math.atan2(tf, tr)
  }

  this.angle.jump(t, theta, phi)

  this.recalcMatrix(t)
  var dx = mat[2]
  var dy = mat[6]
  var dz = mat[10]

  var imat = this.computedMatrix
  invert44(imat, mat)
  var w  = imat[15]
  var ex = imat[12] / w
  var ey = imat[13] / w
  var ez = imat[14] / w

  var gs = Math.exp(this.computedRadius[0])
  this.center.jump(t, ex-dx*gs, ey-dy*gs, ez-dz*gs)
}

proto.lastT = function() {
  return Math.max(
    this.center.lastT(),
    this.up.lastT(),
    this.right.lastT(),
    this.radius.lastT(),
    this.angle.lastT())
}

proto.idle = function(t) {
  this.center.idle(t)
  this.up.idle(t)
  this.right.idle(t)
  this.radius.idle(t)
  this.angle.idle(t)
}

proto.flush = function(t) {
  this.center.flush(t)
  this.up.flush(t)
  this.right.flush(t)
  this.radius.flush(t)
  this.angle.flush(t)
}

proto.setDistance = function(t, d) {
  if(d > 0) {
    this.radius.set(t, Math.log(d))
  }
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)

  eye    = eye    || this.computedEye
  center = center || this.computedCenter
  up     = up     || this.computedUp

  var ux = up[0]
  var uy = up[1]
  var uz = up[2]
  var ul = len3(ux, uy, uz)
  if(ul < 1e-6) {
    return
  }
  ux /= ul
  uy /= ul
  uz /= ul

  var tx = eye[0] - center[0]
  var ty = eye[1] - center[1]
  var tz = eye[2] - center[2]
  var tl = len3(tx, ty, tz)
  if(tl < 1e-6) {
    return
  }
  tx /= tl
  ty /= tl
  tz /= tl

  var right = this.computedRight
  var rx = right[0]
  var ry = right[1]
  var rz = right[2]
  var ru = ux*rx + uy*ry + uz*rz
  rx -= ru * ux
  ry -= ru * uy
  rz -= ru * uz
  var rl = len3(rx, ry, rz)

  if(rl < 0.01) {
    rx = uy * tz - uz * ty
    ry = uz * tx - ux * tz
    rz = ux * ty - uy * tx
    rl = len3(rx, ry, rz)
    if(rl < 1e-6) {
      return
    }
  }
  rx /= rl
  ry /= rl
  rz /= rl

  this.up.set(t, ux, uy, uz)
  this.right.set(t, rx, ry, rz)
  this.center.set(t, center[0], center[1], center[2])
  this.radius.set(t, Math.log(tl))

  var fx = uy * rz - uz * ry
  var fy = uz * rx - ux * rz
  var fz = ux * ry - uy * rx
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  var tu = ux*tx + uy*ty + uz*tz
  var tr = rx*tx + ry*ty + rz*tz
  var tf = fx*tx + fy*ty + fz*tz

  var phi   = Math.asin(clamp1(tu))
  var theta = Math.atan2(tf, tr)

  var angleState = this.angle._state
  var lastTheta  = angleState[angleState.length-1]
  var lastPhi    = angleState[angleState.length-2]
  lastTheta      = lastTheta % (2.0 * Math.PI)
  var dp = Math.abs(lastTheta + 2.0 * Math.PI - theta)
  var d0 = Math.abs(lastTheta - theta)
  var dn = Math.abs(lastTheta - 2.0 * Math.PI - theta)
  if(dp < d0) {
    lastTheta += 2.0 * Math.PI
  }
  if(dn < d0) {
    lastTheta -= 2.0 * Math.PI
  }

  this.angle.jump(this.angle.lastT(), lastTheta, lastPhi)
  this.angle.set(t, theta, phi)
}

function createTurntableController(options) {
  options = options || {}

  var center = options.center || [0,0,0]
  var up     = options.up     || [0,1,0]
  var right  = options.right  || findOrthoPair(up)
  var radius = options.radius || 1.0
  var theta  = options.theta  || 0.0
  var phi    = options.phi    || 0.0

  center = [].slice.call(center, 0, 3)

  up = [].slice.call(up, 0, 3)
  normalize3(up, up)

  right = [].slice.call(right, 0, 3)
  normalize3(right, right)

  if('eye' in options) {
    var eye = options.eye
    var toward = [
      eye[0]-center[0],
      eye[1]-center[1],
      eye[2]-center[2]
    ]
    cross(right, toward, up)
    if(len3(right[0], right[1], right[2]) < 1e-6) {
      right = findOrthoPair(up)
    } else {
      normalize3(right, right)
    }

    radius = len3(toward[0], toward[1], toward[2])

    var ut = dot3(up, toward) / radius
    var rt = dot3(right, toward) / radius
    phi    = Math.acos(ut)
    theta  = Math.acos(rt)
  }

  //Use logarithmic coordinates for radius
  radius = Math.log(radius)

  //Return the controller
  return new TurntableController(
    options.zoomMin,
    options.zoomMax,
    center,
    up,
    right,
    radius,
    theta,
    phi)
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dcubicHermite(p0, v0, p1, v1, t, f) {
  var dh00 = 6*t*t-6*t,
      dh10 = 3*t*t-4*t + 1,
      dh01 = -6*t*t+6*t,
      dh11 = 3*t*t-2*t
  if(p0.length) {
    if(!f) {
      f = new Array(p0.length)
    }
    for(var i=p0.length-1; i>=0; --i) {
      f[i] = dh00*p0[i] + dh10*v0[i] + dh01*p1[i] + dh11*v1[i]
    }
    return f
  }
  return dh00*p0 + dh10*v0 + dh01*p1[i] + dh11*v1
}

function cubicHermite(p0, v0, p1, v1, t, f) {
  var ti  = (t-1), t2 = t*t, ti2 = ti*ti,
      h00 = (1+2*t)*ti2,
      h10 = t*ti2,
      h01 = t2*(3-2*t),
      h11 = t2*ti
  if(p0.length) {
    if(!f) {
      f = new Array(p0.length)
    }
    for(var i=p0.length-1; i>=0; --i) {
      f[i] = h00*p0[i] + h10*v0[i] + h01*p1[i] + h11*v1[i]
    }
    return f
  }
  return h00*p0 + h10*v0 + h01*p1 + h11*v1
}

module.exports = cubicHermite
module.exports.derivative = dcubicHermite

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = rotate;

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < 0.000001) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createOrbitController

var filterVector  = __webpack_require__(15)
var lookAt        = __webpack_require__(19)
var mat4FromQuat  = __webpack_require__(51)
var invert44      = __webpack_require__(4)
var quatFromFrame = __webpack_require__(52)

function len3(x,y,z) {
  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2))
}

function len4(w,x,y,z) {
  return Math.sqrt(Math.pow(w,2) + Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2))
}

function normalize4(out, a) {
  var ax = a[0]
  var ay = a[1]
  var az = a[2]
  var aw = a[3]
  var al = len4(ax, ay, az, aw)
  if(al > 1e-6) {
    out[0] = ax/al
    out[1] = ay/al
    out[2] = az/al
    out[3] = aw/al
  } else {
    out[0] = out[1] = out[2] = 0.0
    out[3] = 1.0
  }
}

function OrbitCameraController(initQuat, initCenter, initRadius) {
  this.radius    = filterVector([initRadius])
  this.center    = filterVector(initCenter)
  this.rotation  = filterVector(initQuat)

  this.computedRadius   = this.radius.curve(0)
  this.computedCenter   = this.center.curve(0)
  this.computedRotation = this.rotation.curve(0)
  this.computedUp       = [0.1,0,0]
  this.computedEye      = [0.1,0,0]
  this.computedMatrix   = [0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  this.recalcMatrix(0)
}

var proto = OrbitCameraController.prototype

proto.lastT = function() {
  return Math.max(
    this.radius.lastT(),
    this.center.lastT(),
    this.rotation.lastT())
}

proto.recalcMatrix = function(t) {
  this.radius.curve(t)
  this.center.curve(t)
  this.rotation.curve(t)

  var quat = this.computedRotation
  normalize4(quat, quat)

  var mat = this.computedMatrix
  mat4FromQuat(mat, quat)

  var center = this.computedCenter
  var eye    = this.computedEye
  var up     = this.computedUp
  var radius = Math.exp(this.computedRadius[0])

  eye[0] = center[0] + radius * mat[2]
  eye[1] = center[1] + radius * mat[6]
  eye[2] = center[2] + radius * mat[10]
  up[0] = mat[1]
  up[1] = mat[5]
  up[2] = mat[9]

  for(var i=0; i<3; ++i) {
    var rr = 0.0
    for(var j=0; j<3; ++j) {
      rr += mat[i+4*j] * eye[j]
    }
    mat[12+i] = -rr
  }
}

proto.getMatrix = function(t, result) {
  this.recalcMatrix(t)
  var m = this.computedMatrix
  if(result) {
    for(var i=0; i<16; ++i) {
      result[i] = m[i]
    }
    return result
  }
  return m
}

proto.idle = function(t) {
  this.center.idle(t)
  this.radius.idle(t)
  this.rotation.idle(t)
}

proto.flush = function(t) {
  this.center.flush(t)
  this.radius.flush(t)
  this.rotation.flush(t)
}

proto.pan = function(t, dx, dy, dz) {
  dx = dx || 0.0
  dy = dy || 0.0
  dz = dz || 0.0

  this.recalcMatrix(t)
  var mat = this.computedMatrix

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]
  var ul = len3(ux, uy, uz)
  ux /= ul
  uy /= ul
  uz /= ul

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl

  var fx = mat[2]
  var fy = mat[6]
  var fz = mat[10]
  var fu = fx * ux + fy * uy + fz * uz
  var fr = fx * rx + fy * ry + fz * rz
  fx -= fu * ux + fr * rx
  fy -= fu * uy + fr * ry
  fz -= fu * uz + fr * rz
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  var vx = rx * dx + ux * dy
  var vy = ry * dx + uy * dy
  var vz = rz * dx + uz * dy

  this.center.move(t, vx, vy, vz)

  //Update z-component of radius
  var radius = Math.exp(this.computedRadius[0])
  radius = Math.max(1e-4, radius + dz)
  this.radius.set(t, Math.log(radius))
}

proto.rotate = function(t, dx, dy, dz) {
  this.recalcMatrix(t)

  dx = dx||0.0
  dy = dy||0.0

  var mat = this.computedMatrix

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]

  var fx = mat[2]
  var fy = mat[6]
  var fz = mat[10]

  var qx = dx * rx + dy * ux
  var qy = dx * ry + dy * uy
  var qz = dx * rz + dy * uz

  var bx = -(fy * qz - fz * qy)
  var by = -(fz * qx - fx * qz)
  var bz = -(fx * qy - fy * qx)  
  var bw = Math.sqrt(Math.max(0.0, 1.0 - Math.pow(bx,2) - Math.pow(by,2) - Math.pow(bz,2)))
  var bl = len4(bx, by, bz, bw)
  if(bl > 1e-6) {
    bx /= bl
    by /= bl
    bz /= bl
    bw /= bl
  } else {
    bx = by = bz = 0.0
    bw = 1.0
  }

  var rotation = this.computedRotation
  var ax = rotation[0]
  var ay = rotation[1]
  var az = rotation[2]
  var aw = rotation[3]

  var cx = ax*bw + aw*bx + ay*bz - az*by
  var cy = ay*bw + aw*by + az*bx - ax*bz
  var cz = az*bw + aw*bz + ax*by - ay*bx
  var cw = aw*bw - ax*bx - ay*by - az*bz
  
  //Apply roll
  if(dz) {
    bx = fx
    by = fy
    bz = fz
    var s = Math.sin(dz) / len3(bx, by, bz)
    bx *= s
    by *= s
    bz *= s
    bw = Math.cos(dx)
    cx = cx*bw + cw*bx + cy*bz - cz*by
    cy = cy*bw + cw*by + cz*bx - cx*bz
    cz = cz*bw + cw*bz + cx*by - cy*bx
    cw = cw*bw - cx*bx - cy*by - cz*bz
  }

  var cl = len4(cx, cy, cz, cw)
  if(cl > 1e-6) {
    cx /= cl
    cy /= cl
    cz /= cl
    cw /= cl
  } else {
    cx = cy = cz = 0.0
    cw = 1.0
  }

  this.rotation.set(t, cx, cy, cz, cw)
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)

  center = center || this.computedCenter
  eye    = eye    || this.computedEye
  up     = up     || this.computedUp

  var mat = this.computedMatrix
  lookAt(mat, eye, center, up)

  var rotation = this.computedRotation
  quatFromFrame(rotation,
    mat[0], mat[1], mat[2],
    mat[4], mat[5], mat[6],
    mat[8], mat[9], mat[10])
  normalize4(rotation, rotation)
  this.rotation.set(t, rotation[0], rotation[1], rotation[2], rotation[3])

  var fl = 0.0
  for(var i=0; i<3; ++i) {
    fl += Math.pow(center[i] - eye[i], 2)
  }
  this.radius.set(t, 0.5 * Math.log(Math.max(fl, 1e-6)))

  this.center.set(t, center[0], center[1], center[2])
}

proto.translate = function(t, dx, dy, dz) {
  this.center.move(t,
    dx||0.0,
    dy||0.0,
    dz||0.0)
}

proto.setMatrix = function(t, matrix) {

  var rotation = this.computedRotation
  quatFromFrame(rotation,
    matrix[0], matrix[1], matrix[2],
    matrix[4], matrix[5], matrix[6],
    matrix[8], matrix[9], matrix[10])
  normalize4(rotation, rotation)
  this.rotation.set(t, rotation[0], rotation[1], rotation[2], rotation[3])

  var mat = this.computedMatrix
  invert44(mat, matrix)
  var w = mat[15]
  if(Math.abs(w) > 1e-6) {
    var cx = mat[12]/w
    var cy = mat[13]/w
    var cz = mat[14]/w

    this.recalcMatrix(t)  
    var r = Math.exp(this.computedRadius[0])
    this.center.set(t, cx-mat[2]*r, cy-mat[6]*r, cz-mat[10]*r)
    this.radius.idle(t)
  } else {
    this.center.idle(t)
    this.radius.idle(t)
  }
}

proto.setDistance = function(t, d) {
  if(d > 0) {
    this.radius.set(t, Math.log(d))
  }
}

proto.setDistanceLimits = function(lo, hi) {
  if(lo > 0) {
    lo = Math.log(lo)
  } else {
    lo = -Infinity    
  }
  if(hi > 0) {
    hi = Math.log(hi)
  } else {
    hi = Infinity
  }
  hi = Math.max(hi, lo)
  this.radius.bounds[0][0] = lo
  this.radius.bounds[1][0] = hi
}

proto.getDistanceLimits = function(out) {
  var bounds = this.radius.bounds
  if(out) {
    out[0] = Math.exp(bounds[0][0])
    out[1] = Math.exp(bounds[1][0])
    return out
  }
  return [ Math.exp(bounds[0][0]), Math.exp(bounds[1][0]) ]
}

proto.toJSON = function() {
  this.recalcMatrix(this.lastT())
  return {
    center:   this.computedCenter.slice(),
    rotation: this.computedRotation.slice(),
    distance: Math.log(this.computedRadius[0]),
    zoomMin:  this.radius.bounds[0][0],
    zoomMax:  this.radius.bounds[1][0]
  }
}

proto.fromJSON = function(options) {
  var t = this.lastT()
  var c = options.center
  if(c) {
    this.center.set(t, c[0], c[1], c[2])
  }
  var r = options.rotation
  if(r) {
    this.rotation.set(t, r[0], r[1], r[2], r[3])
  }
  var d = options.distance
  if(d && d > 0) {
    this.radius.set(t, Math.log(d))
  }
  this.setDistanceLimits(options.zoomMin, options.zoomMax)
}

function createOrbitController(options) {
  options = options || {}
  var center   = options.center   || [0,0,0]
  var rotation = options.rotation || [0,0,0,1]
  var radius   = options.radius   || 1.0

  center = [].slice.call(center, 0, 3)
  rotation = [].slice.call(rotation, 0, 4)
  normalize4(rotation, rotation)

  var result = new OrbitCameraController(
    rotation,
    center,
    Math.log(radius))

  result.setDistanceLimits(options.zoomMin, options.zoomMax)

  if('eye' in options || 'up' in options) {
    result.lookAt(0, options.eye, options.center, options.up)
  }

  return result
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = fromQuat;

/**
 * Creates a matrix from a quaternion rotation.
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = quatFromFrame

function quatFromFrame(
  out,
  rx, ry, rz,
  ux, uy, uz,
  fx, fy, fz) {
  var tr = rx + uy + fz
  if(l > 0) {
    var l = Math.sqrt(tr + 1.0)
    out[0] = 0.5 * (uz - fy) / l
    out[1] = 0.5 * (fx - rz) / l
    out[2] = 0.5 * (ry - uy) / l
    out[3] = 0.5 * l
  } else {
    var tf = Math.max(rx, uy, fz)
    var l = Math.sqrt(2 * tf - tr + 1.0)
    if(rx >= tf) {
      //x y z  order
      out[0] = 0.5 * l
      out[1] = 0.5 * (ux + ry) / l
      out[2] = 0.5 * (fx + rz) / l
      out[3] = 0.5 * (uz - fy) / l
    } else if(uy >= tf) {
      //y z x  order
      out[0] = 0.5 * (ry + ux) / l
      out[1] = 0.5 * l
      out[2] = 0.5 * (fy + uz) / l
      out[3] = 0.5 * (fx - rz) / l
    } else {
      //z x y  order
      out[0] = 0.5 * (rz + fx) / l
      out[1] = 0.5 * (uz + fy) / l
      out[2] = 0.5 * l
      out[3] = 0.5 * (ry - ux) / l
    }
  }
  return out
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bsearch   = __webpack_require__(16)
var m4interp  = __webpack_require__(54)
var invert44  = __webpack_require__(4)
var rotateX   = __webpack_require__(66)
var rotateY   = __webpack_require__(67)
var rotateZ   = __webpack_require__(68)
var lookAt    = __webpack_require__(19)
var translate = __webpack_require__(21)
var scale     = __webpack_require__(23)
var normalize = __webpack_require__(6)

var DEFAULT_CENTER = [0,0,0]

module.exports = createMatrixCameraController

function MatrixCameraController(initialMatrix) {
  this._components    = initialMatrix.slice()
  this._time          = [0]
  this.prevMatrix     = initialMatrix.slice()
  this.nextMatrix     = initialMatrix.slice()
  this.computedMatrix = initialMatrix.slice()
  this.computedInverse = initialMatrix.slice()
  this.computedEye    = [0,0,0]
  this.computedUp     = [0,0,0]
  this.computedCenter = [0,0,0]
  this.computedRadius = [0]
  this._limits        = [-Infinity, Infinity]
}

var proto = MatrixCameraController.prototype

proto.recalcMatrix = function(t) {
  var time = this._time
  var tidx = bsearch.le(time, t)
  var mat = this.computedMatrix
  if(tidx < 0) {
    return
  }
  var comps = this._components
  if(tidx === time.length-1) {
    var ptr = 16*tidx
    for(var i=0; i<16; ++i) {
      mat[i] = comps[ptr++]
    }
  } else {
    var dt = (time[tidx+1] - time[tidx])
    var ptr = 16*tidx
    var prev = this.prevMatrix
    var allEqual = true
    for(var i=0; i<16; ++i) {
      prev[i] = comps[ptr++]
    }
    var next = this.nextMatrix
    for(var i=0; i<16; ++i) {
      next[i] = comps[ptr++]
      allEqual = allEqual && (prev[i] === next[i])
    }
    if(dt < 1e-6 || allEqual) {
      for(var i=0; i<16; ++i) {
        mat[i] = prev[i]
      }
    } else {
      m4interp(mat, prev, next, (t - time[tidx])/dt)
    }
  }

  var up = this.computedUp
  up[0] = mat[1]
  up[1] = mat[5]
  up[2] = mat[9]
  normalize(up, up)

  var imat = this.computedInverse
  invert44(imat, mat)
  var eye = this.computedEye
  var w = imat[15]
  eye[0] = imat[12]/w
  eye[1] = imat[13]/w
  eye[2] = imat[14]/w

  var center = this.computedCenter
  var radius = Math.exp(this.computedRadius[0])
  for(var i=0; i<3; ++i) {
    center[i] = eye[i] - mat[2+4*i] * radius
  }
}

proto.idle = function(t) {
  if(t < this.lastT()) {
    return
  }
  var mc = this._components
  var ptr = mc.length-16
  for(var i=0; i<16; ++i) {
    mc.push(mc[ptr++])
  }
  this._time.push(t)
}

proto.flush = function(t) {
  var idx = bsearch.gt(this._time, t) - 2
  if(idx < 0) {
    return
  }
  this._time.splice(0, idx)
  this._components.splice(0, 16*idx)
}

proto.lastT = function() {
  return this._time[this._time.length-1]
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)
  eye    = eye || this.computedEye
  center = center || DEFAULT_CENTER
  up     = up || this.computedUp
  this.setMatrix(t, lookAt(this.computedMatrix, eye, center, up))
  var d2 = 0.0
  for(var i=0; i<3; ++i) {
    d2 += Math.pow(center[i] - eye[i], 2)
  }
  d2 = Math.log(Math.sqrt(d2))
  this.computedRadius[0] = d2
}

proto.rotate = function(t, yaw, pitch, roll) {
  this.recalcMatrix(t)
  var mat = this.computedInverse
  if(yaw)   rotateY(mat, mat, yaw)
  if(pitch) rotateX(mat, mat, pitch)
  if(roll)  rotateZ(mat, mat, roll)
  this.setMatrix(t, invert44(this.computedMatrix, mat))
}

var tvec = [0,0,0]

proto.pan = function(t, dx, dy, dz) {
  tvec[0] = -(dx || 0.0)
  tvec[1] = -(dy || 0.0)
  tvec[2] = -(dz || 0.0)
  this.recalcMatrix(t)
  var mat = this.computedInverse
  translate(mat, mat, tvec)
  this.setMatrix(t, invert44(mat, mat))
}

proto.translate = function(t, dx, dy, dz) {
  tvec[0] = dx || 0.0
  tvec[1] = dy || 0.0
  tvec[2] = dz || 0.0
  this.recalcMatrix(t)
  var mat = this.computedMatrix
  translate(mat, mat, tvec)
  this.setMatrix(t, mat)
}

proto.setMatrix = function(t, mat) {
  if(t < this.lastT()) {
    return
  }
  this._time.push(t)
  for(var i=0; i<16; ++i) {
    this._components.push(mat[i])
  }
}

proto.setDistance = function(t, d) {
  this.computedRadius[0] = d
}

proto.setDistanceLimits = function(a,b) {
  var lim = this._limits
  lim[0] = a
  lim[1] = b
}

proto.getDistanceLimits = function(out) {
  var lim = this._limits
  if(out) {
    out[0] = lim[0]
    out[1] = lim[1]
    return out
  }
  return lim
}

function createMatrixCameraController(options) {
  options = options || {}
  var matrix = options.matrix || 
              [1,0,0,0,
               0,1,0,0,
               0,0,1,0,
               0,0,0,1]
  return new MatrixCameraController(matrix)
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var lerp = __webpack_require__(55)

var recompose = __webpack_require__(56)
var decompose = __webpack_require__(59)
var determinant = __webpack_require__(24)
var slerp = __webpack_require__(64)

var state0 = state()
var state1 = state()
var tmp = state()

module.exports = interpolate
function interpolate(out, start, end, alpha) {
    if (determinant(start) === 0 || determinant(end) === 0)
        return false

    //decompose the start and end matrices into individual components
    var r0 = decompose(start, state0.translate, state0.scale, state0.skew, state0.perspective, state0.quaternion)
    var r1 = decompose(end, state1.translate, state1.scale, state1.skew, state1.perspective, state1.quaternion)
    if (!r0 || !r1)
        return false    


    //now lerp/slerp the start and end components into a temporary     lerp(tmptranslate, state0.translate, state1.translate, alpha)
    lerp(tmp.translate, state0.translate, state1.translate, alpha)
    lerp(tmp.skew, state0.skew, state1.skew, alpha)
    lerp(tmp.scale, state0.scale, state1.scale, alpha)
    lerp(tmp.perspective, state0.perspective, state1.perspective, alpha)
    slerp(tmp.quaternion, state0.quaternion, state1.quaternion, alpha)

    //and recompose into our 'out' matrix
    recompose(out, tmp.translate, tmp.scale, tmp.skew, tmp.perspective, tmp.quaternion)
    return true
}

function state() {
    return {
        translate: vec3(),
        scale: vec3(1),
        skew: vec3(),
        perspective: vec4(),
        quaternion: vec4()
    }
}

function vec3(n) {
    return [n||0,n||0,n||0]
}

function vec4() {
    return [0,0,0,1]
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = lerp;

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    out[2] = az + t * (b[2] - az)
    return out
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/*
Input:  translation ; a 3 component vector
        scale       ; a 3 component vector
        skew        ; skew factors XY,XZ,YZ represented as a 3 component vector
        perspective ; a 4 component vector
        quaternion  ; a 4 component vector
Output: matrix      ; a 4x4 matrix

From: http://www.w3.org/TR/css3-transforms/#recomposing-to-a-3d-matrix
*/

var mat4 = {
    identity: __webpack_require__(20),
    translate: __webpack_require__(21),
    multiply: __webpack_require__(57),
    create: __webpack_require__(22),
    scale: __webpack_require__(23),
    fromRotationTranslation: __webpack_require__(58)
}

var rotationMatrix = mat4.create()
var temp = mat4.create()

module.exports = function recomposeMat4(matrix, translation, scale, skew, perspective, quaternion) {
    mat4.identity(matrix)

    //apply translation & rotation
    mat4.fromRotationTranslation(matrix, quaternion, translation)

    //apply perspective
    matrix[3] = perspective[0]
    matrix[7] = perspective[1]
    matrix[11] = perspective[2]
    matrix[15] = perspective[3]
        
    // apply skew
    // temp is a identity 4x4 matrix initially
    mat4.identity(temp)

    if (skew[2] !== 0) {
        temp[9] = skew[2]
        mat4.multiply(matrix, matrix, temp)
    }

    if (skew[1] !== 0) {
        temp[9] = 0
        temp[8] = skew[1]
        mat4.multiply(matrix, matrix, temp)
    }

    if (skew[0] !== 0) {
        temp[8] = 0
        temp[4] = skew[0]
        mat4.multiply(matrix, matrix, temp)
    }

    //apply scale
    mat4.scale(matrix, matrix, scale)
    return matrix
}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = fromRotationTranslation;

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/*jshint unused:true*/
/*
Input:  matrix      ; a 4x4 matrix
Output: translation ; a 3 component vector
        scale       ; a 3 component vector
        skew        ; skew factors XY,XZ,YZ represented as a 3 component vector
        perspective ; a 4 component vector
        quaternion  ; a 4 component vector
Returns false if the matrix cannot be decomposed, true if it can


References:
https://github.com/kamicane/matrix3d/blob/master/lib/Matrix3d.js
https://github.com/ChromiumWebApps/chromium/blob/master/ui/gfx/transform_util.cc
http://www.w3.org/TR/css3-transforms/#decomposing-a-3d-matrix
*/

var normalize = __webpack_require__(60)

var create = __webpack_require__(22)
var clone = __webpack_require__(61)
var determinant = __webpack_require__(24)
var invert = __webpack_require__(4)
var transpose = __webpack_require__(62)
var vec3 = {
    length: __webpack_require__(63),
    normalize: __webpack_require__(6),
    dot: __webpack_require__(18),
    cross: __webpack_require__(17)
}

var tmp = create()
var perspectiveMatrix = create()
var tmpVec4 = [0, 0, 0, 0]
var row = [ [0,0,0], [0,0,0], [0,0,0] ]
var pdum3 = [0,0,0]

module.exports = function decomposeMat4(matrix, translation, scale, skew, perspective, quaternion) {
    if (!translation) translation = [0,0,0]
    if (!scale) scale = [0,0,0]
    if (!skew) skew = [0,0,0]
    if (!perspective) perspective = [0,0,0,1]
    if (!quaternion) quaternion = [0,0,0,1]

    //normalize, if not possible then bail out early
    if (!normalize(tmp, matrix))
        return false

    // perspectiveMatrix is used to solve for perspective, but it also provides
    // an easy way to test for singularity of the upper 3x3 component.
    clone(perspectiveMatrix, tmp)

    perspectiveMatrix[3] = 0
    perspectiveMatrix[7] = 0
    perspectiveMatrix[11] = 0
    perspectiveMatrix[15] = 1

    // If the perspectiveMatrix is not invertible, we are also unable to
    // decompose, so we'll bail early. Constant taken from SkMatrix44::invert.
    if (Math.abs(determinant(perspectiveMatrix) < 1e-8))
        return false

    var a03 = tmp[3], a13 = tmp[7], a23 = tmp[11],
            a30 = tmp[12], a31 = tmp[13], a32 = tmp[14], a33 = tmp[15]

    // First, isolate perspective.
    if (a03 !== 0 || a13 !== 0 || a23 !== 0) {
        tmpVec4[0] = a03
        tmpVec4[1] = a13
        tmpVec4[2] = a23
        tmpVec4[3] = a33

        // Solve the equation by inverting perspectiveMatrix and multiplying
        // rightHandSide by the inverse.
        // resuing the perspectiveMatrix here since it's no longer needed
        var ret = invert(perspectiveMatrix, perspectiveMatrix)
        if (!ret) return false
        transpose(perspectiveMatrix, perspectiveMatrix)

        //multiply by transposed inverse perspective matrix, into perspective vec4
        vec4multMat4(perspective, tmpVec4, perspectiveMatrix)
    } else { 
        //no perspective
        perspective[0] = perspective[1] = perspective[2] = 0
        perspective[3] = 1
    }

    // Next take care of translation
    translation[0] = a30
    translation[1] = a31
    translation[2] = a32

    // Now get scale and shear. 'row' is a 3 element array of 3 component vectors
    mat3from4(row, tmp)

    // Compute X scale factor and normalize first row.
    scale[0] = vec3.length(row[0])
    vec3.normalize(row[0], row[0])

    // Compute XY shear factor and make 2nd row orthogonal to 1st.
    skew[0] = vec3.dot(row[0], row[1])
    combine(row[1], row[1], row[0], 1.0, -skew[0])

    // Now, compute Y scale and normalize 2nd row.
    scale[1] = vec3.length(row[1])
    vec3.normalize(row[1], row[1])
    skew[0] /= scale[1]

    // Compute XZ and YZ shears, orthogonalize 3rd row
    skew[1] = vec3.dot(row[0], row[2])
    combine(row[2], row[2], row[0], 1.0, -skew[1])
    skew[2] = vec3.dot(row[1], row[2])
    combine(row[2], row[2], row[1], 1.0, -skew[2])

    // Next, get Z scale and normalize 3rd row.
    scale[2] = vec3.length(row[2])
    vec3.normalize(row[2], row[2])
    skew[1] /= scale[2]
    skew[2] /= scale[2]


    // At this point, the matrix (in rows) is orthonormal.
    // Check for a coordinate system flip.  If the determinant
    // is -1, then negate the matrix and the scaling factors.
    vec3.cross(pdum3, row[1], row[2])
    if (vec3.dot(row[0], pdum3) < 0) {
        for (var i = 0; i < 3; i++) {
            scale[i] *= -1;
            row[i][0] *= -1
            row[i][1] *= -1
            row[i][2] *= -1
        }
    }

    // Now, get the rotations out
    quaternion[0] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] - row[1][1] - row[2][2], 0))
    quaternion[1] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] + row[1][1] - row[2][2], 0))
    quaternion[2] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] - row[1][1] + row[2][2], 0))
    quaternion[3] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] + row[1][1] + row[2][2], 0))

    if (row[2][1] > row[1][2])
        quaternion[0] = -quaternion[0]
    if (row[0][2] > row[2][0])
        quaternion[1] = -quaternion[1]
    if (row[1][0] > row[0][1])
        quaternion[2] = -quaternion[2]
    return true
}

//will be replaced by gl-vec4 eventually
function vec4multMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}

//gets upper-left of a 4x4 matrix into a 3x3 of vectors
function mat3from4(out, mat4x4) {
    out[0][0] = mat4x4[0]
    out[0][1] = mat4x4[1]
    out[0][2] = mat4x4[2]
    
    out[1][0] = mat4x4[4]
    out[1][1] = mat4x4[5]
    out[1][2] = mat4x4[6]

    out[2][0] = mat4x4[8]
    out[2][1] = mat4x4[9]
    out[2][2] = mat4x4[10]
}

function combine(out, a, b, scale1, scale2) {
    out[0] = a[0] * scale1 + b[0] * scale2
    out[1] = a[1] * scale1 + b[1] * scale2
    out[2] = a[2] * scale1 + b[2] * scale2
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function normalize(out, mat) {
    var m44 = mat[15]
    // Cannot normalize.
    if (m44 === 0) 
        return false
    var scale = 1 / m44
    for (var i=0; i<16; i++)
        out[i] = mat[i] * scale
    return true
}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = clone;

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
    var out = new Float32Array(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = transpose;

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65)

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = slerp

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp (out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = b[0], by = b[1], bz = b[2], bw = b[3]

  var omega, cosom, sinom, scale0, scale1

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom
    bx = -bx
    by = -by
    bz = -bz
    bw = -bw
  }
  // calculate coefficients
  if ((1.0 - cosom) > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom)
    sinom = Math.sin(omega)
    scale0 = Math.sin((1.0 - t) * omega) / sinom
    scale1 = Math.sin(t * omega) / sinom
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t
    scale1 = t
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx
  out[1] = scale0 * ay + scale1 * by
  out[2] = scale0 * az + scale1 * bz
  out[3] = scale0 * aw + scale1 * bw

  return out
}


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = rotateX;

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = rotateY;

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = rotateZ;

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = mouseListen

var mouse = __webpack_require__(70)

function mouseListen (element, callback) {
  if (!callback) {
    callback = element
    element = window
  }

  var buttonState = 0
  var x = 0
  var y = 0
  var mods = {
    shift: false,
    alt: false,
    control: false,
    meta: false
  }
  var attached = false

  function updateMods (ev) {
    var changed = false
    if ('altKey' in ev) {
      changed = changed || ev.altKey !== mods.alt
      mods.alt = !!ev.altKey
    }
    if ('shiftKey' in ev) {
      changed = changed || ev.shiftKey !== mods.shift
      mods.shift = !!ev.shiftKey
    }
    if ('ctrlKey' in ev) {
      changed = changed || ev.ctrlKey !== mods.control
      mods.control = !!ev.ctrlKey
    }
    if ('metaKey' in ev) {
      changed = changed || ev.metaKey !== mods.meta
      mods.meta = !!ev.metaKey
    }
    return changed
  }

  function handleEvent (nextButtons, ev) {
    var nextX = mouse.x(ev)
    var nextY = mouse.y(ev)
    if ('buttons' in ev) {
      nextButtons = ev.buttons | 0
    }
    if (nextButtons !== buttonState ||
      nextX !== x ||
      nextY !== y ||
      updateMods(ev)) {
      buttonState = nextButtons | 0
      x = nextX || 0
      y = nextY || 0
      callback && callback(buttonState, x, y, mods)
    }
  }

  function clearState (ev) {
    handleEvent(0, ev)
  }

  function handleBlur () {
    if (buttonState ||
      x ||
      y ||
      mods.shift ||
      mods.alt ||
      mods.meta ||
      mods.control) {
      x = y = 0
      buttonState = 0
      mods.shift = mods.alt = mods.control = mods.meta = false
      callback && callback(0, 0, 0, mods)
    }
  }

  function handleMods (ev) {
    if (updateMods(ev)) {
      callback && callback(buttonState, x, y, mods)
    }
  }

  function handleMouseMove (ev) {
    if (mouse.buttons(ev) === 0) {
      handleEvent(0, ev)
    } else {
      handleEvent(buttonState, ev)
    }
  }

  function handleMouseDown (ev) {
    handleEvent(buttonState | mouse.buttons(ev), ev)
  }

  function handleMouseUp (ev) {
    handleEvent(buttonState & ~mouse.buttons(ev), ev)
  }

  function attachListeners () {
    if (attached) {
      return
    }
    attached = true

    element.addEventListener('mousemove', handleMouseMove)

    element.addEventListener('mousedown', handleMouseDown)

    element.addEventListener('mouseup', handleMouseUp)

    element.addEventListener('mouseleave', clearState)
    element.addEventListener('mouseenter', clearState)
    element.addEventListener('mouseout', clearState)
    element.addEventListener('mouseover', clearState)

    element.addEventListener('blur', handleBlur)

    element.addEventListener('keyup', handleMods)
    element.addEventListener('keydown', handleMods)
    element.addEventListener('keypress', handleMods)

    if (element !== window) {
      window.addEventListener('blur', handleBlur)

      window.addEventListener('keyup', handleMods)
      window.addEventListener('keydown', handleMods)
      window.addEventListener('keypress', handleMods)
    }
  }

  function detachListeners () {
    if (!attached) {
      return
    }
    attached = false

    element.removeEventListener('mousemove', handleMouseMove)

    element.removeEventListener('mousedown', handleMouseDown)

    element.removeEventListener('mouseup', handleMouseUp)

    element.removeEventListener('mouseleave', clearState)
    element.removeEventListener('mouseenter', clearState)
    element.removeEventListener('mouseout', clearState)
    element.removeEventListener('mouseover', clearState)

    element.removeEventListener('blur', handleBlur)

    element.removeEventListener('keyup', handleMods)
    element.removeEventListener('keydown', handleMods)
    element.removeEventListener('keypress', handleMods)

    if (element !== window) {
      window.removeEventListener('blur', handleBlur)

      window.removeEventListener('keyup', handleMods)
      window.removeEventListener('keydown', handleMods)
      window.removeEventListener('keypress', handleMods)
    }
  }

  // Attach listeners
  attachListeners()

  var result = {
    element: element
  }

  Object.defineProperties(result, {
    enabled: {
      get: function () { return attached },
      set: function (f) {
        if (f) {
          attachListeners()
        } else {
          detachListeners()
        }
      },
      enumerable: true
    },
    buttons: {
      get: function () { return buttonState },
      enumerable: true
    },
    x: {
      get: function () { return x },
      enumerable: true
    },
    y: {
      get: function () { return y },
      enumerable: true
    },
    mods: {
      get: function () { return mods },
      enumerable: true
    }
  })

  return result
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function mouseButtons(ev) {
  if(typeof ev === 'object') {
    if('buttons' in ev) {
      return ev.buttons
    } else if('which' in ev) {
      var b = ev.which
      if(b === 2) {
        return 4
      } else if(b === 3) {
        return 2
      } else if(b > 0) {
        return 1<<(b-1)
      }
    } else if('button' in ev) {
      var b = ev.button
      if(b === 1) {
        return 4
      } else if(b === 2) {
        return 2
      } else if(b >= 0) {
        return 1<<b
      }
    }
  }
  return 0
}
exports.buttons = mouseButtons

function mouseElement(ev) {
  return ev.target || ev.srcElement || window
}
exports.element = mouseElement

function mouseRelativeX(ev) {
  if(typeof ev === 'object') {
    if('offsetX' in ev) {
      return ev.offsetX
    }
    var target = mouseElement(ev)
    var bounds = target.getBoundingClientRect()
    return ev.clientX - bounds.left
  }
  return 0
}
exports.x = mouseRelativeX

function mouseRelativeY(ev) {
  if(typeof ev === 'object') {
    if('offsetY' in ev) {
      return ev.offsetY
    }
    var target = mouseElement(ev)
    var bounds = target.getBoundingClientRect()
    return ev.clientY - bounds.top
  }
  return 0
}
exports.y = mouseRelativeY


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPX = __webpack_require__(72)

module.exports = mouseWheelListen

function mouseWheelListen(element, callback, noScroll) {
  if(typeof element === 'function') {
    noScroll = !!callback
    callback = element
    element = window
  }
  var lineHeight = toPX('ex', element)
  var listener = function(ev) {
    if(noScroll) {
      ev.preventDefault()
    }
    var dx = ev.deltaX || 0
    var dy = ev.deltaY || 0
    var dz = ev.deltaZ || 0
    var mode = ev.deltaMode
    var scale = 1
    switch(mode) {
      case 1:
        scale = lineHeight
      break
      case 2:
        scale = window.innerHeight
      break
    }
    dx *= scale
    dy *= scale
    dz *= scale
    if(dx || dy || dz) {
      return callback(dx, dy, dz, ev)
    }
  }
  element.addEventListener('wheel', listener)
  return listener
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseUnit = __webpack_require__(73)

module.exports = toPX

var PIXELS_PER_INCH = getSizeBrutal('in', document.body) // 96


function getPropertyInPX(element, prop) {
  var parts = parseUnit(getComputedStyle(element).getPropertyValue(prop))
  return parts[0] * toPX(parts[1], element)
}

//This brutal hack is needed
function getSizeBrutal(unit, element) {
  var testDIV = document.createElement('div')
  testDIV.style['height'] = '128' + unit
  element.appendChild(testDIV)
  var size = getPropertyInPX(testDIV, 'height') / 128
  element.removeChild(testDIV)
  return size
}

function toPX(str, element) {
  if (!str) return null

  element = element || document.body
  str = (str + '' || 'px').trim().toLowerCase()
  if(element === window || element === document) {
    element = document.body
  }

  switch(str) {
    case '%':  //Ambiguous, not sure if we should use width or height
      return element.clientHeight / 100.0
    case 'ch':
    case 'ex':
      return getSizeBrutal(str, element)
    case 'em':
      return getPropertyInPX(element, 'font-size')
    case 'rem':
      return getPropertyInPX(document.body, 'font-size')
    case 'vw':
      return window.innerWidth/100
    case 'vh':
      return window.innerHeight/100
    case 'vmin':
      return Math.min(window.innerWidth, window.innerHeight) / 100
    case 'vmax':
      return Math.max(window.innerWidth, window.innerHeight) / 100
    case 'in':
      return PIXELS_PER_INCH
    case 'cm':
      return PIXELS_PER_INCH / 2.54
    case 'mm':
      return PIXELS_PER_INCH / 25.4
    case 'pt':
      return PIXELS_PER_INCH / 72
    case 'pc':
      return PIXELS_PER_INCH / 6
    case 'px':
      return 1
  }

  // detect number of units
  var parts = parseUnit(str)
  if (!isNaN(parts[0]) && parts[1]) {
    var px = toPX(parts[1], element)
    return typeof px === 'number' ? parts[0] * px : null
  }

  return null
}


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function parseUnit(str, out) {
    if (!out)
        out = [ 0, '' ]

    str = String(str)
    var num = parseFloat(str, 10)
    out[0] = num
    out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || ''
    return out
}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

var rootPosition = { left: 0, top: 0 }

module.exports = mouseEventOffset
function mouseEventOffset (ev, target, out) {
  target = target || ev.currentTarget || ev.srcElement
  if (!Array.isArray(out)) {
    out = [ 0, 0 ]
  }
  var cx = ev.clientX || 0
  var cy = ev.clientY || 0
  var rect = getBoundingClientOffset(target)
  out[0] = cx - rect.left
  out[1] = cy - rect.top
  return out
}

function getBoundingClientOffset (element) {
  if (element === window ||
      element === document ||
      element === document.body) {
    return rootPosition
  } else {
    return element.getBoundingClientRect()
  }
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isBrowser = __webpack_require__(76)

function detect() {
	var supported = false

	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function() {
				supported = true
			}
		})

		window.addEventListener('test', null, opts)
		window.removeEventListener('test', null, opts)
	} catch(e) {
		supported = false
	}

	return supported
}

module.exports = isBrowser && detect()


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


var activeProgram = null;
class Shader {
    constructor(type, source) {
        this.shader = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createShader(type);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].shaderSource(this.shader, source);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].compileShader(this.shader);
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getShaderParameter(this.shader, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COMPILE_STATUS)) {
            throw __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getShaderInfoLog(this.shader);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Shader;

;
class ShaderProgram {
    constructor(shaders) {
        this.prog = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createProgram();
        for (let shader of shaders) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].attachShader(this.prog, shader.shader);
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].linkProgram(this.prog);
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getProgramParameter(this.prog, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINK_STATUS)) {
            throw __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getProgramInfoLog(this.prog);
        }
        this.unifPlanePos = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_PlanePos");
        this.attrPos = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Pos");
        this.attrNor = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Nor");
        this.attrCol = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Col");
        this.unifDimensions = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Dimensions");
        this.unifModel = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Model");
        this.unifModelInvTr = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_ModelInvTr");
        this.unifViewProj = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_ViewProj");
        this.unifCameraAxes = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_CameraAxes");
        this.unifCameraAxes = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_CameraAxes");
        this.unifColor = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Color");
        this.unifTime = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Time");
        this.unifEye = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Eye");
        this.unifRef = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Ref");
        this.unifUp = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Up");
    }
    use() {
        if (activeProgram !== this.prog) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].useProgram(this.prog);
            activeProgram = this.prog;
        }
    }
    setEyeRefUp(eye, ref, up) {
        this.use();
        if (this.unifEye !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform3f(this.unifEye, eye[0], eye[1], eye[2]);
        }
        if (this.unifRef !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform3f(this.unifRef, ref[0], ref[1], ref[2]);
        }
        if (this.unifUp !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform3f(this.unifUp, up[0], up[1], up[2]);
        }
    }
    setDimensions(width, height) {
        this.use();
        if (this.unifDimensions !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform2f(this.unifDimensions, width, height);
        }
    }
    setModelMatrix(model) {
        this.use();
        if (this.unifModel !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifModel, false, model);
        }
        if (this.unifModelInvTr !== -1) {
            let modelinvtr = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].transpose(modelinvtr, model);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].invert(modelinvtr, modelinvtr);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifModelInvTr, false, modelinvtr);
        }
    }
    setViewProjMatrix(vp) {
        this.use();
        if (this.unifViewProj !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifViewProj, false, vp);
        }
    }
    setPlanePos(pos) {
        this.use();
        if (this.unifPlanePos !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform2fv(this.unifPlanePos, pos);
        }
    }
    setCameraAxes(axes) {
        this.use();
        if (this.unifCameraAxes !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix3fv(this.unifCameraAxes, false, axes);
        }
    }
    setGeometryColor(color) {
        this.use();
        if (this.unifColor !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifColor, color);
        }
    }
    setTime(t) {
        this.use();
        if (this.unifTime !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1f(this.unifTime, t);
        }
    }
    draw(d) {
        this.use();
        if (this.attrPos != -1 && d.bindPos()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrPos);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrPos, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrPos, 0); // Advance 1 index in pos VBO for each vertex
        }
        if (this.attrNor != -1 && d.bindNor()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrNor);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrNor, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrNor, 0); // Advance 1 index in nor VBO for each vertex
        }
        if (this.attrCol != -1 && d.bindCol()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrCol);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrCol, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrCol, 0); // Advance 1 index in col VBO for each drawn instance
        }
        if (this.attrTranslate != -1 && d.bindTranslate()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrTranslate);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrTranslate, 3, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrTranslate, 1); // Advance 1 index in translate VBO for each drawn instance
        }
        if (this.attrUV != -1 && d.bindUV()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrUV);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrUV, 2, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrUV, 0); // Advance 1 index in pos VBO for each vertex
        }
        d.bindIdx();
        // drawElementsInstanced uses the vertexAttribDivisor for each "in" variable to
        // determine how to link it to each drawn instance of the bound VBO.
        // For example, the index used to look in the VBO associated with
        // vs_Pos (attrPos) is advanced by 1 for each thread of the GPU running the
        // vertex shader since its divisor is 0.
        // On the other hand, the index used to look in the VBO associated with
        // vs_Translate (attrTranslfate) is advanced by 1 only when the next instance
        // of our drawn object (in the base code example, the square) is processed
        // by the GPU, thus being the same value for the first set of four vertices,
        // then advancing to a new value for the next four, then the next four, and
        // so on.
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawElements(d.drawMode(), d.elemCount(), __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].UNSIGNED_INT, d.numInstances);
        if (this.attrPos != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrPos);
        if (this.attrNor != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrNor);
        if (this.attrCol != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrCol);
        if (this.attrTranslate != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrTranslate);
        if (this.attrUV != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrUV);
    }
}
;
/* harmony default export */ __webpack_exports__["b"] = (ShaderProgram);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


class ScreenQuad extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super();
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            0, 2, 3]);
        this.positions = new Float32Array([-1, -1, 0.999, 1,
            1, -1, 0.999, 1,
            1, 1, 0.999, 1,
            -1, 1, 0.999, 1]);
        this.generateIdx();
        this.generatePos();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        //this.numInstances = 1;
        console.log(`Created ScreenQuad`);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (ScreenQuad);


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(0);



class Plane extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor(center, scale, subdivs) {
        super(); // Call the constructor of the super class. This is required.
        this.center = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(center[0], center[1], center[2]);
        this.scale = scale;
        this.subdivs = subdivs + subdivs % 2; // Ensures the number is even, rounds up.
    }
    create() {
        let width = Math.pow(2, this.subdivs / 2);
        let normalize = 1.0 / width;
        this.positions = new Float32Array((width + 1) * (width + 1) * 4);
        this.normals = new Float32Array((width + 1) * (width + 1) * 4);
        this.indices = new Uint32Array(width * width * 6); // NxN squares, each square is two triangles, each triangle is three indices
        let posIdx = 0;
        for (let x = 0; x <= width; ++x) {
            for (let z = 0; z <= width; ++z) {
                // Make a strip of vertices along Z with the current X coord
                this.normals[posIdx] = 0;
                this.positions[posIdx++] = x * normalize * this.scale[0] + this.center[0] - this.scale[0] * 0.5;
                this.normals[posIdx] = 1;
                this.positions[posIdx++] = 0 + this.center[1];
                this.normals[posIdx] = 0;
                this.positions[posIdx++] = z * normalize * this.scale[1] + this.center[2] - this.scale[1] * 0.5;
                this.normals[posIdx] = 0;
                this.positions[posIdx++] = 1;
            }
        }
        let indexIdx = 0;
        // Make the squares out of indices
        for (let i = 0; i < width; ++i) { // X iter
            for (let j = 0; j < width; ++j) { // Z iter
                this.indices[indexIdx++] = j + i * (width + 1);
                this.indices[indexIdx++] = j + 1 + i * (width + 1);
                this.indices[indexIdx++] = j + (i + 1) * (width + 1);
                this.indices[indexIdx++] = j + 1 + i * (width + 1);
                this.indices[indexIdx++] = j + (i + 1) * (width + 1);
                this.indices[indexIdx++] = j + 1 + (i + 1) * (width + 1);
            }
        }
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        console.log(`Created plane`);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Plane);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Building__ = __webpack_require__(25);

class City {
    rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    constructor() {
        this.buildings = [];
        var building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](0.0 + Math.random(), 3.0 + Math.random(), 14.0, 1.5, 2.0, 1.5);
        building.evaluate(1);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](3.0 + Math.random(), 8.0, 11.0 + Math.random(), 1.0, 2.0, 2.5);
        building.evaluate(2);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](2.0 + Math.random(), 15.0, 4.0, 1.0, 2.0, 2.5);
        building.evaluate(3);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(14, 16), 17, this.rand(0, -3.0), this.rand(0.5, 1.5), this.rand(2.0, 6.0), this.rand(0.5, 3));
        building.evaluate(2);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(8, 12), this.rand(17, 20), this.rand(-2.0, -5.0), this.rand(0.5, 1.5), this.rand(2.0, 8.0), this.rand(0.5, 3));
        building.evaluate(2);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(8, 12), this.rand(17, 23), this.rand(-2.0, -5.0), this.rand(0.5, 1.5), this.rand(2.0, 8.0), this.rand(0.5, 3));
        building.evaluate(2);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(6, 11), this.rand(17, 23), this.rand(0.0, 5.0), this.rand(0.5, 1.5), this.rand(2.0, 8.0), this.rand(0.5, 3));
        building.evaluate(3);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(-3, 0), this.rand(5, 13), this.rand(0.0, -3.0), this.rand(0.5, 1.8), this.rand(2.0, 3.0), this.rand(0.5, 2));
        building.evaluate(2);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(-2, 0), this.rand(5, 8), this.rand(1.0, 3.0), this.rand(0.5, 1.4), this.rand(2.0, 6.0), this.rand(0.5, 2));
        building.evaluate(3);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(-4, -1), this.rand(19, 27), this.rand(-7.0, -13.0), this.rand(0.5, 1.9), this.rand(2.0, 6.0), this.rand(0.5, 2));
        building.evaluate(2);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(1, 5), this.rand(24, 30), this.rand(-13.0, -16.0), this.rand(0.5, 1.5), this.rand(2.0, 6.0), this.rand(0.5, 2.5));
        building.evaluate(3);
        this.buildings.push(building);
        building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](this.rand(6, 12), this.rand(29, 34), this.rand(-15.0, -18.0), this.rand(0.5, 2.5), this.rand(2.0, 17.0), this.rand(0.5, 2.5));
        building.evaluate(3);
        this.buildings.push(building);
    }
}
/* harmony default export */ __webpack_exports__["a"] = (City);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(0);


class Cube extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor(startX, startY, startZ, width, height, length) {
        super(); // Call the constructor of the super class. This is required.
        //this.center = vec4.fromValues(center[0], center[1], center[2], 1);
        this.startX = startX;
        this.startY = startY;
        this.startZ = startZ;
        this.width = width;
        this.height = height;
        this.length = length;
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            0, 2, 3,
            4, 5, 6,
            5, 6, 7,
            8, 9, 10,
            9, 10, 11,
            12, 13, 14,
            12, 14, 15,
            16, 17, 18,
            17, 18, 19,
            20, 21, 22,
            21, 22, 23]);
        this.normals = new Float32Array([0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            1, 0, 0, 0,
            1, 0, 0, 0,
            1, 0, 0, 0,
            1, 0, 0, 0,
            -1, 0, 0, 0,
            -1, 0, 0, 0,
            -1, 0, 0, 0,
            -1, 0, 0, 0,
            0, 0, -1, 0,
            0, 0, -1, 0,
            0, 0, -1, 0,
            0, 0, -1, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, -1, 0, 0,
            0, -1, 0, 0,
            0, -1, 0, 0,
            0, -1, 0, 0
        ]);
        var startX = this.startX;
        var startY = this.startY;
        var startZ = this.startZ;
        var width = this.width;
        var height = this.height;
        var length = this.length;
        this.positions = new Float32Array([startX, startY - height, startZ, 1,
            startX + width, startY - height, startZ, 1,
            startX + width, startY, startZ, 1,
            startX, startY, startZ, 1,
            //right face
            startX + width, startY - height, startZ, 1,
            startX + width, startY, startZ, 1,
            startX + width, startY - height, startZ - length, 1,
            startX + width, startY, startZ - length, 1,
            //left face
            startX, startY - height, startZ, 1,
            startX, startY, startZ, 1,
            startX, startY - height, startZ - length, 1,
            startX, startY, startZ - length, 1,
            //back face
            startX, startY - height, startZ - length, 1,
            startX + width, startY - height, startZ - length, 1,
            startX + width, startY, startZ - length, 1,
            startX, startY, startZ - length, 1,
            //top face
            startX, startY, startZ, 1,
            startX + width, startY, startZ, 1,
            startX, startY, startZ - length, 1,
            startX + width, startY, startZ - length, 1,
            //bottom face
            startX, startY - height, startZ, 1,
            startX + width, startY - height, startZ, 1,
            startX, startY - height, startZ - length, 1,
            startX + width, startY - height, startZ - length, 1]);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].STATIC_DRAW);
        console.log(`Created CUBE`);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Cube);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Building__ = __webpack_require__(25);

class Town {
    rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    constructor() {
        this.buildings = [];
        var building;
        var basicY = 2.0;
        for (var i = 0; i < 80; i++) {
            //random points in valid grid space
            var x = this.rand(-12, -2);
            var z = this.rand(10, 20);
            //check for intersections
            if (Math.abs(x - -4.0) < 1) {
                continue;
            }
            if (Math.abs(x - 4.0) < 1.5) {
                continue;
            }
            if (Math.abs(x - -10.0) < 1) {
                continue;
            }
            if (Math.abs(z - 11.0) < 1) {
                continue;
            }
            if (Math.abs(z - 17.0) < 2) {
                continue;
            }
            building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](x, basicY + Math.random(), z, 0.9, 2.0, 0.5);
            building.evaluate(1);
            this.buildings.push(building);
        }
        for (var i = 0; i < 80; i++) {
            //random points in valid grid space
            var x = this.rand(3, 12);
            var z = this.rand(15, 24);
            var xlist = [8.0, 11.0];
            var zlist = [11.0, 17.0];
            //check for intersections
            if (Math.abs(x - 4.0) < 1.0) {
                continue;
            }
            if (Math.abs(x - 8.0) < 1.0) {
                continue;
            }
            if (Math.abs(x - 11.0) < 1.0) {
                continue;
            }
            if (Math.abs(z - 11.0) < 1.0) {
                z = 9.0;
            }
            if (Math.abs(z - 17.0) < 2) {
                z = 13.0;
            }
            building = new __WEBPACK_IMPORTED_MODULE_0__Building__["a" /* default */](x, basicY + Math.random(), z, 0.9, 2.0, 0.5);
            building.evaluate(1);
            this.buildings.push(building);
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Town);


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nuniform mat4 u_Model;\r\nuniform mat4 u_ModelInvTr;\r\nuniform mat4 u_ViewProj;\r\nin vec4 vs_Pos;\r\nin vec4 vs_Nor;\r\nin vec4 vs_Col;\r\nout vec4 fs_Nor;\r\nout vec4 fs_LightVec;\r\nout vec4 fs_Col;\r\n\r\nout vec4 fs_Pos;\r\nuniform float u_Time;\r\n\r\nconst vec4 lightPos = vec4(5, 5, 3, 1);\r\n\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n\r\n    mat3 invTranspose = mat3(u_ModelInvTr);\r\n    fs_Nor = vec4(invTranspose * vec3(vs_Nor), 0);\r\n    vec4 modelposition = u_Model * vs_Pos;\r\n\r\n    modelposition.y += 0.05 * sin(u_Time / 1000.0 * 10.46);\r\n    modelposition.x += 0.5 * sin(u_Time / 1000.0 * 5.23);\r\n    fs_LightVec = lightPos - modelposition;\r\n\r\n    gl_Position = u_ViewProj * modelposition;\r\n}\r\n"

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nprecision highp float;\r\n\r\nuniform vec4 u_Color;\r\n\r\n\r\nin vec4 fs_Nor;\r\nin vec4 fs_LightVec;\r\nin vec4 fs_Col;\r\n\r\nuniform float u_Time;\r\n\r\n\r\nout vec4 out_Col;\r\n\r\nvoid main()\r\n{\r\n\r\n        vec4 diffuseColor = vec4(0.0, 0.0, 1.0, 1.0);\r\n\r\n\r\n        float diffuseTerm = dot(normalize(fs_Nor), normalize(fs_LightVec));\r\n\r\n        diffuseTerm = clamp(diffuseTerm, 0.0, 1.0);\r\n\r\n        float ambientTerm = 0.3;\r\n        float lightIntensity = diffuseTerm + ambientTerm;\r\n\r\n\r\n        out_Col = vec4(diffuseColor.rgb * lightIntensity, diffuseColor.a);\r\n        out_Col = diffuseColor + fs_Nor * 1.2;\r\n        if (out_Col.g > 0.3 && out_Col.b < 0.85){\r\n          out_Col = vec4(1.0, 0.0, 1.0, 1.0);\r\n        }\r\n\r\n        if (mod(u_Time, 10.0) == 0.0){\r\n          out_Col = vec4(1.0, 0.0, 1.0, 1.0);\r\n        }\r\n        if (mod(u_Time, 15.0) == 0.0){\r\n          out_Col = vec4(0.0, 1.0, 1.0, 1.0);\r\n        }\r\n}\r\n"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nuniform mat4 u_ViewProj;\r\nuniform float u_Time;\r\n\r\nuniform mat3 u_CameraAxes; // Used for rendering particles as billboards (quads that are always looking at the camera)\r\n// gl_Position = center + vs_Pos.x * camRight + vs_Pos.y * camUp;\r\n\r\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\r\nin vec4 vs_Nor; // Non-instanced, and presently unused\r\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\r\nin vec3 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene\r\nin vec2 vs_UV; // Non-instanced, and presently unused in main(). Feel free to use it for your meshes.\r\n\r\nout vec4 fs_Col;\r\nout vec4 fs_Pos;\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n    fs_Pos = vs_Pos;\r\n\r\n    vec3 offset = vs_Translate;\r\n    offset.z = (sin((u_Time + offset.x) * 3.14159 * 0.1) + cos((u_Time + offset.y) * 3.14159 * 0.1)) * 1.5;\r\n\r\n    vec3 billboardPos = offset + vs_Pos.x * u_CameraAxes[0] + vs_Pos.y * u_CameraAxes[1];\r\n\r\n    gl_Position = u_ViewProj * vec4(billboardPos, 1.0);\r\n}\r\n"

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nin vec4 fs_Col;\r\nin vec4 fs_Pos;\r\n\r\nout vec4 out_Col;\r\n\r\nvoid main()\r\n{\r\n    float dist = 1.0 - (length(fs_Pos.xyz) * 2.0);\r\n    out_Col = vec4(dist) * fs_Col;\r\n}\r\n"

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat noise(vec2 p) {\r\n\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n  //out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);\r\n  vec2 uv = (fs_Pos);\r\n  float intensity = 0.8;\r\n\r\n    //Create the stacked layers\r\n\r\n    //so what this is doing is creating offset layers\r\n    //and the height of each section follows a cosin curve\r\n    //ok sweet\r\n\tfor (float inc = 1.0; inc < 25.0; inc++) {\r\n\r\n\t\tfloat fi = inc;\r\n\r\n\t\tfloat s = floor(5.0*(uv.x)/fi + 50.0*fi + u_Time / 1000.0);\r\n\r\n        float yLimit = noise(vec2(s));\r\n        yLimit *= fi/95.0;\r\n        yLimit -= 0.04*fi;\r\n        yLimit += 0.125 * cos(uv.x*5.0 + u_Time / 1000.0 + fi/9.0);\r\n       \tyLimit += 0.8;\r\n\r\n\t\tif (uv.y < yLimit) {\r\n\t\t\tintensity = inc/10.0;\r\n\t\t}\r\n\t}\r\n\r\n  float col1 = mix(intensity * uv.x * 0.8 + 0.5, 0.0, 01.1);\r\n\r\n\t//Set the final color\r\n\tout_Col = vec4(vec3(col1, intensity*uv.y * 0.9 + 0.5, 0.3), 1.0 );\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nuniform mat4 u_Model;\r\n\r\nuniform mat4 u_ModelInvTr;\r\nuniform mat4 u_ViewProj;\r\nin vec4 vs_Pos;\r\nin vec4 vs_Nor;\r\nin vec4 vs_Col;\r\nout vec4 fs_Nor;\r\nout vec4 fs_LightVec;\r\nout vec4 fs_Col;\r\nout vec4 fs_Pos;\r\nuniform float u_Time;\r\nconst vec4 lightPos = vec4(5, 5, 3, 1);\r\n\r\n  float Noise(float x, float y){\r\n    return (fract(sin(dot(vec2(x, y), vec2(12.9898, 4.1414))) * 43758.5453));\r\n  }\r\n\r\n  float interpNoise2D(float x, float y){\r\n\r\n    float intX = floor(x);\r\n    float fractX = fract(x);\r\n    float intY = floor(y);\r\n    float fractY = fract(y);\r\n\r\n    float v1 = Noise(intX, intY);\r\n    float v2 = Noise(intX + 1.0, intY);\r\n    float v3 = Noise(intX, intY + 1.0);\r\n    float v4 = Noise(intX + 1.0, intY + 1.0);\r\n\r\n    float i1 = mix(v1, v2, fractX);\r\n    float i2 = mix(v3, v4, fractX);\r\n\r\n    return mix(i1, i2, fractY);\r\n\r\n\r\n  }\r\nfloat fbm(float x, float y){\r\n\r\n      float total = 0.f;\r\n      float peristence = 0.5f;\r\n      float octaves = 8.f;\r\n\r\n      for(float i = 0.f; i < octaves; i++){\r\n          float freq = pow(2.f, i);\r\n          float amp = pow(peristence, i);\r\n          total += interpNoise2D((x * freq), (y * freq)) * amp;\r\n      }\r\n\r\n      return total;\r\n\r\n  }\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n    mat3 invTranspose = mat3(u_ModelInvTr);\r\n    fs_Nor = vec4(invTranspose * vec3(vs_Nor), 0);\r\n\r\n    vec4 modelposition = u_Model * vs_Pos;\r\n  //  modelposition.y += fbm(vs_Pos.x / 32.0, vs_Pos.z / 32.0) * abs(sin(u_Time / 1000.0));\r\n\r\n  if (modelposition.y < -0.1){\r\n    modelposition.y = -0.15;\r\n    fs_Pos.y = -0.15;\r\n  }\r\n\r\n    fs_Pos.x = modelposition.x;\r\n    fs_Pos.z = modelposition.z;\r\n\r\n    fs_LightVec = lightPos - modelposition;\r\n\r\n    gl_Position = u_ViewProj * modelposition;\r\n}\r\n"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\n\r\nprecision highp float;\r\n\r\nuniform vec4 u_Color;\r\n\r\n\r\nin vec4 fs_Nor;\r\nin vec4 fs_LightVec;\r\nin vec4 fs_Col;\r\n\r\nuniform float u_Time;\r\n\r\nin vec4 fs_Pos;\r\n\r\n\r\nout vec4 out_Col;\r\n\r\n\r\nfloat checker(vec2 uv, float repeats)\r\n{\r\n  float cx = floor(repeats * uv.x);\r\n  float cy = floor(repeats * uv.y);\r\n  float result = mod(cx + cy, 2.0);\r\n  return sign(result);\r\n}\r\n\r\nvoid main()\r\n{\r\n\r\n\r\n        vec4 lightPos = vec4(8.0 * sin(u_Time / 1000.0), fs_LightVec.y, 14.0, 1.0);\r\n\r\n        vec4 lightPos2 = vec4(fs_LightVec.x, sin(u_Time/ 10000.0), 14.0, 1.0);\r\n\r\n        vec4 diffuseColor = vec4(0.2, 0.45, 0.35, 1.0);\r\n        vec4 diffuseColor2 = vec4(0.2, 0.75, 0.15, 1.0);\r\n\r\n\r\n        diffuseColor = (diffuseColor + diffuseColor2) / 2.0;\r\n\r\n\r\n        if (fs_Pos.y < 0.0){\r\n          diffuseColor = vec4(0.2, 0.25, 0.5, 1.0);\r\n        }\r\n        float diffuseTerm = dot(normalize(fs_Nor), normalize(lightPos));\r\n        float diffuseTerm2 = dot(normalize(fs_Nor), normalize(lightPos2));\r\n        diffuseTerm = (diffuseTerm + diffuseTerm2) / 2.0;\r\n        diffuseTerm = clamp(diffuseTerm, 0.0, 1.0);\r\n\r\n        float ambientTerm = 0.3;\r\n\r\n        float lightIntensity = diffuseTerm + ambientTerm;\r\n        out_Col = vec4(diffuseColor.rgb * lightIntensity, diffuseColor.a);\r\n\r\n        vec2 uv = vec2(fs_Pos.x, fs_Pos.z);\r\n        float c = mix(1.0, 0.0, checker(uv, 1.0));\r\n        //out_Col = vec4(c, 0.9, 0.7, 1.0);\r\n\r\n\r\n        // if (fs_Pos.x > 0.0 && fs_Pos.x < 1.0 && fs_Pos.z > 0.0 && fs_Pos.z < 25.0){\r\n        //   out_Col = out_Col = vec4(1.0, 0.0, 0.37, 1.0);\r\n        // }\r\n\r\n          out_Col = vec4(diffuseColor.rgb * lightIntensity, diffuseColor.a);\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\n\r\n\r\nuniform mat4 u_Model;\r\n\r\nuniform mat4 u_ModelInvTr;\r\n\r\nuniform mat4 u_ViewProj;\r\n\r\nin vec4 vs_Pos;\r\n\r\nin vec4 vs_Nor;\r\n\r\nin vec4 vs_Col;\r\n\r\nout vec4 fs_Nor;\r\nout vec4 fs_LightVec;\r\nout vec4 fs_Col;\r\n\r\nout vec4 fs_Pos;\r\nuniform float u_Time;\r\n\r\n\r\nconst vec4 lightPos = vec4(5, 5, 3, 1);\r\n\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n\r\n    mat3 invTranspose = mat3(u_ModelInvTr);\r\n    fs_Nor = vec4(invTranspose * vec3(vs_Nor), 0);\r\n\r\n\r\n    vec4 modelposition = u_Model * vs_Pos;\r\n\r\n  //modelposition.y += sin((u_Time + vs_Pos.x) / 500.0);\r\n\r\n    fs_LightVec = lightPos - modelposition;\r\n\r\n    gl_Position = u_ViewProj * modelposition;\r\n\r\n    fs_Pos = modelposition;\r\n}\r\n"

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\n\r\nprecision highp float;\r\n\r\nuniform vec4 u_Color;\r\n\r\n\r\nin vec4 fs_Nor;\r\nin vec4 fs_LightVec;\r\nin vec4 fs_Col;\r\n\r\nuniform float u_Time;\r\nuniform vec2 u_Dimensions;\r\n\r\nin vec4 fs_Pos;\r\n\r\n\r\nout vec4 out_Col;\r\n\r\n\r\nfloat checker(vec2 uv, float repeats)\r\n{\r\n  float cx = floor(repeats * uv.x);\r\n  float cy = floor(repeats * uv.y);\r\n  float result = mod(cx + cy, 2.0);\r\n  return sign(result);\r\n}\r\n\r\n\r\n\r\nvec4 rainbow(){\r\n  float l = 120.0;\r\n\r\n  float aa = gl_FragCoord.x;\r\n  float bb = gl_FragCoord.y;\r\n  vec2 fragCoord = vec2(aa, bb);\r\n\r\n  float aspect = u_Dimensions.x / u_Dimensions.y;\r\n\r\n  float a = gl_FragCoord.x;\r\n  float b = gl_FragCoord.y;\r\n\r\n  float sx = (2.f * a/u_Dimensions.x) - 1.f;\r\n  float sy = 1.f - (2.f * b/u_Dimensions.y);\r\n\r\n\r\n///source - PSYCHADELIX on shadertoy\r\nvec2 uv = fragCoord.xy / u_Dimensions.xy;\r\n\tvec2 pos = (uv.xy-0.5);\r\n\tvec2 cir = ((pos.xy*pos.xy+sin(uv.x*18.0+u_Time / 10000.0)/25.0*sin(uv.y*7.0+u_Time / 10000.0 *1.5)/1.0)+uv.x*sin(u_Time / 10000.0)/16.0+uv.y*sin(u_Time / 10000.0 *1.2)/16.0);\r\n\tfloat circles = (sqrt(abs(cir.x+cir.y*0.5)*25.0)*5.0);\r\n\tvec4 fragColor = vec4(sin(circles*1.25+2.0),abs(sin(circles*1.0-1.0)-sin(circles)),abs(sin(circles)*1.0),1.0);\r\n  return fragColor;\r\n\r\n}\r\n\r\nvoid main()\r\n{\r\n  vec4 diffuseColor = vec4(0.6, 0.3, 0.2, 1.0);\r\n  float diffuseTerm = dot(normalize(fs_Nor), normalize(fs_LightVec));\r\n  diffuseTerm = clamp(diffuseTerm, 0.0, 1.0);\r\n\r\n  float ambientTerm = 0.3;\r\n\r\n  float lightIntensity = diffuseTerm + ambientTerm;\r\n  out_Col = vec4(diffuseColor.rgb * lightIntensity, diffuseColor.a);\r\n\r\n\r\n        if(fs_Pos.y < 0.0){\r\n          out_Col = vec4(0.0, 0.2, 1.0, 1.0);\r\n        }\r\n\r\n\r\n        if (fs_Pos.x < 0.0){\r\n          out_Col = vec4(0.0, 0.4, 1.0, 1.0);\r\n        }\r\n\r\n        if (fs_Pos.x > 0.9){\r\n          out_Col = vec4(0.0, 0.9, 1.0, 1.0);\r\n        }\r\n\r\n\r\n        vec2 uv = vec2(fs_Pos.x, fs_Pos.y);\r\n        float c = mix(1.0, 0.0, checker(uv, 1.0));\r\n        out_Col = vec4(c, c, c, 1.0);\r\n\r\n        if (c == 1.0){\r\n          vec4 rain = rainbow();\r\n          out_Col = vec4(rain.rgb * lightIntensity, diffuseColor.a);\r\n        }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\n\r\n\r\nuniform mat4 u_Model;\r\n\r\nuniform mat4 u_ModelInvTr;\r\n\r\nuniform mat4 u_ViewProj;\r\n\r\nin vec4 vs_Pos;\r\n\r\nin vec4 vs_Nor;\r\n\r\nin vec4 vs_Col;\r\n\r\nout vec4 fs_Nor;\r\nout vec4 fs_LightVec;\r\nout vec4 fs_Col;\r\n\r\nout vec4 fs_Pos;\r\nuniform float u_Time;\r\n\r\n\r\nconst vec4 lightPos = vec4(5, 5, 3, 1);\r\n\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n\r\n    mat3 invTranspose = mat3(u_ModelInvTr);\r\n    fs_Nor = vec4(invTranspose * vec3(vs_Nor), 0);\r\n\r\n\r\n    vec4 modelposition = u_Model * vs_Pos;\r\n\r\n  //modelposition.y += sin((u_Time + vs_Pos.x) / 500.0);\r\n\r\n    fs_LightVec = lightPos - modelposition;\r\n\r\n    gl_Position = u_ViewProj * modelposition;\r\n\r\n    fs_Pos = modelposition;\r\n}\r\n"

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\n\r\nprecision highp float;\r\n\r\nuniform vec4 u_Color;\r\n\r\n\r\nin vec4 fs_Nor;\r\nin vec4 fs_LightVec;\r\nin vec4 fs_Col;\r\n\r\nuniform float u_Time;\r\nuniform vec2 u_Dimensions;\r\n\r\nin vec4 fs_Pos;\r\n\r\n\r\nout vec4 out_Col;\r\n\r\n\r\nfloat checker(vec2 uv, float repeats)\r\n{\r\n  float cx = floor(repeats * uv.x);\r\n  float cy = floor(repeats * uv.y);\r\n  float result = mod(cx + cy, 2.0);\r\n  return sign(result);\r\n}\r\n\r\n\r\n\r\nvec4 rainbow(){\r\n  float l = 120.0;\r\n\r\n  float aa = gl_FragCoord.x;\r\n  float bb = gl_FragCoord.y;\r\n  vec2 fragCoord = vec2(aa, bb);\r\n\r\n  float aspect = u_Dimensions.x / u_Dimensions.y;\r\n\r\n  float a = gl_FragCoord.x;\r\n  float b = gl_FragCoord.y;\r\n\r\n  float sx = (2.f * a/u_Dimensions.x) - 1.f;\r\n  float sy = 1.f - (2.f * b/u_Dimensions.y);\r\n\r\n\r\n  vec2 uv = fragCoord.xy / u_Dimensions.xy;\r\n    uv = (uv.xy-0.5);\r\n\r\n\r\n  float z = u_Time / 10000.0;\r\n\r\n\r\n\r\n    // multiple and twist uv\r\n    uv *= sin(length(uv) * 2.0) * 7.0;\r\n\r\n    // calculate morphing central blobs\r\n    float val1 = length(uv);\r\n    val1 = 1.0 - fract(length(uv + sin(u_Time / 10000.0 + uv.x) * cos(u_Time / 10000.0 + uv.y) ));\r\n\r\n    // calculate rotating radial wave pattern\r\n    float val2 = length(uv * 0.1) *\r\n        cos( pow(sin(u_Time / 10000.0 + atan(uv.y, uv.x) * 10.0) + uv.x * length(uv * 0.1), 2.0 ));\r\n\r\n\t// combine values\r\n    float val = mix(val1, val2, sin(atan(uv.y, uv.x) * 10.0) );\r\n\r\n    // colors\r\n    float r = pow(val, 5.0) * 3.0;\r\n    float g = val + 0.18;\r\n    float bl = val;\r\n    return vec4(r, g, bl, 1);\r\n\r\n}\r\n\r\nvoid main()\r\n{\r\n        vec4 diffuseColor = vec4(0.0, 0.1, 0.2, 1.0);\r\n        float diffuseTerm = dot(normalize(fs_Nor), normalize(fs_LightVec));\r\n        diffuseTerm = clamp(diffuseTerm, 0.0, 1.0);\r\n\r\n        float ambientTerm = 0.3;\r\n\r\n        float lightIntensity = diffuseTerm + ambientTerm;\r\n        out_Col = vec4(diffuseColor.rgb * lightIntensity, diffuseColor.a);\r\n\r\n        if(fs_Pos.y < 0.0){\r\n          out_Col = vec4(0.0, 0.2, 1.0, 1.0);\r\n        }\r\n\r\n\r\n        if (fs_Pos.x < 0.0){\r\n          out_Col = vec4(0.0, 0.4, 1.0, 1.0);\r\n        }\r\n\r\n        if (fs_Pos.x > 0.9){\r\n          out_Col = vec4(0.0, 0.9, 1.0, 1.0);\r\n        }\r\n\r\n\r\n        vec2 uv = vec2(fs_Pos.x, fs_Pos.z);\r\n        float c = mix(1.0, 0.0, checker(uv, 1.0));\r\n        out_Col = vec4(c, c, c, 1.0);\r\n        out_Col = vec4(diffuseColor.rgb * lightIntensity, diffuseColor.a);\r\n\r\n        if (c == 1.0){\r\n          vec4 rain = rainbow();\r\n          out_Col = vec4(rain.rgb * lightIntensity, diffuseColor.a);\r\n        }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\nfloat segment(vec2 uv)\r\n{\r\n    uv = abs(uv);\r\n\treturn (1.0-smoothstep(0.07,0.10,uv.x))\r\n         * (1.0-smoothstep(0.46,0.49,uv.y+uv.x))\r\n         * (1.25 - length(uv*vec2(3.8,1.3)));\r\n}\r\n\r\nfloat sevenSegment(vec2 uv,int num)\r\n{\r\n\tfloat seg= 0.0;\r\n\r\n    if (num>=2 && num!=7 || num==-2)\r\n        seg = max(seg,segment(uv.yx));\r\n\r\n    if (num==0 ||\r\n            (uv.y<0.?((num==2)==(uv.x<0.) || num==6 || num==8):\r\n            (uv.x>0.?(num!=5 && num!=6):(num>=4 && num!=7) )))\r\n        seg = max(seg,segment(abs(uv)-0.5));\r\n\r\n    if (num>=0 && num!=1 && num!=4 && (num!=7 || uv.y>0.))\r\n        seg = max(seg,segment(vec2(abs(uv.y)-1.0,uv.x)));\r\n\r\n\treturn seg;\r\n}\r\n\r\nfloat showNum(vec2 uv,float nr, bool zeroTrim)\r\n{\r\n    if (uv.x>-3.0 && uv.x<0.0)\r\n    {\r\n        float digit = floor(-uv.x / 1.5);\r\n\t\tnr /= pow(10.,digit);\r\n        nr = mod(floor(nr+0.000001),10.0);\r\n        if (nr==0.0 && zeroTrim && digit!=0.0)\r\n            return 0.;\r\n\t\treturn sevenSegment(uv+vec2( 0.75 + digit*1.5,0.0),int(nr));\r\n    }\r\n\treturn 0.;\r\n}\r\n\r\nfloat dots(vec2 uv)\r\n{\r\n\tuv.y = abs(uv.y)-0.5;\r\n\tfloat l = length(uv);\r\n\treturn (1.0-smoothstep(0.11,0.13,l)) * (1.0-l*2.0);\r\n}\r\n\r\n\r\nvoid main() {\r\n\r\n\r\n\tvec2 uv = (gl_FragCoord.xy-0.5*u_Dimensions.xy) / u_Dimensions.x;\r\n\r\n\t    uv *= 11.0;\r\n\t    uv.x -= 5.+uv.y*.07;\r\n\r\n\t    if (uv.x<-7.0 || uv.x>-3.0 || abs(uv.y)>1.2) {\r\n\t        out_Col = vec4(0.0, 0.0, 0.0, 1.0);\r\n\t    \treturn;\r\n\t    }\r\n\r\n\t    float p = floor(abs(uv.x/3.5));\r\n\t    uv.x = mod(uv.x,3.5)-3.5;\r\n\r\n\t\tfloat seg = 0.0;\r\n\t    if (uv.x>-3.)\r\n\t\t\tif (u_Time < 600.0){\r\n\t\t\t\tseg = showNum(uv,mod(4.0, 5.0),p==2.0);\r\n\t\t\t} else if (u_Time < 1200.0){\r\n\t\t\t\tseg = showNum(uv,mod(3.0, 5.0),p==2.0);\r\n\t\t\t} else if (u_Time < 1800.0){\r\n\t\t\t\tseg = showNum(uv,mod(2.0, 5.0),p==2.0);\r\n\t\t\t} else if (u_Time < 2400.0){\r\n\t\t\t\tseg = showNum(uv,mod(1.0, 5.0),p==2.0);\r\n\t\t\t}\r\n\r\n\t    else\r\n\t    {\r\n\t        uv.x += 3.25;\r\n\t\t\tseg = dots(uv);\r\n\t    }\r\n\r\n\r\n\t\t\tout_Col = vec4(seg * sin(u_Time * 10.46 / 1000.0),seg * cos(u_Time * 10.46 / 1000.0),seg,1.);\r\n\r\n\r\n}\r\n"

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat noise(vec2 p) {\r\n\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n//  out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);\r\n  //vec2 uv = (fs_Pos);\r\n  //float intensity = 0.8;\r\n\r\n\t// //-----------stuffs\r\n\t//\r\n\t float t = u_Time;\r\n \t\tvec3 c;\r\n\t float l = 0.0;\r\n\t float  z = t / 10000.0;\r\n   vec2 r = u_Dimensions;\r\n\t for(float i=0.0 ; i<3.0; i++) {\r\n\t \t vec2 uv;\r\n\t \t vec2 p = gl_FragCoord.xy/r;\r\n\t \t uv=p;\r\n\t \t p-=0.5;\r\n\t \t p.x*= r.x / r.y;\r\n\t \t z+=0.07;\r\n\t \t l=length(p);\r\n \t\tuv+=p/l*(sin( z)+1.0)*abs(sin(l*9.0-z*2.0)) * sin(5.236* u_Time / 1000.0);\r\n\t \tif(i > -0.1 && i < 0.1){\r\n\t\t\tc.x = 0.01/length(abs(mod(uv,1.0)-0.5));\r\n\t\t}\r\n\t\tif(i > 0.9 && i < 1.1){\r\n\t\t\tc.y = 0.01/length(abs(mod(uv,1.0)-0.5));\r\n\t\t}\r\n\t\tif(i > 1.9 && i < 2.1){\r\n\t\t\tc.z = 0.01/length(abs(mod(uv,1.0)-0.5));\r\n\t\t}\r\n\r\n\t}\r\n\r\n    vec4 white = vec4(0.89, 0.196, 0.518, 1.0);\r\n\r\n    out_Col=vec4(c/l,t);\r\n    vec4 blue = vec4(0.169, 0.729, 0.937, 1.0);\r\n\r\n     if (c.x + c.y + c.z > 0.2){\r\n\r\n       blue = vec4(0.169, 0.729, 0.9378, 1.0);\r\n       out_Col = mix(blue, white, sin(5.236 * (u_Time / 1000.0) ));\r\n    }\r\n\t//\r\n     if (c.x + c.y + c.z > 0.3){\r\n\r\n        vec4 green = vec4(0.169, 0.729, 0.937, 1.0);\r\n        vec4 orange = vec4(0.698,0.227, 0.827, 1.0);\r\n       out_Col = mix(green, orange, cos( 5.236 * u_Time/ 1000.0 ));\r\n    }\r\n\r\n\t//-------\r\n\r\n//out_Col = vec4(1.0, 1.0, 0.0, 1.0);\r\n    //Create the stacked layers\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\n\r\nuniform mat4 u_Model;\r\nuniform mat4 u_ModelInvTr;\r\nuniform mat4 u_ViewProj;\r\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\r\n\r\nin vec4 vs_Pos;\r\nin vec4 vs_Nor;\r\nin vec4 vs_Col;\r\n\r\n\r\nout vec3 fs_Pos;\r\nout vec4 fs_Nor;\r\nout vec4 fs_Col;\r\n\r\nout float fs_Sine;\r\n\r\nfloat random1( vec2 p , vec2 seed) {\r\n  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\r\n}\r\n\r\nfloat random1( vec3 p , vec3 seed) {\r\n  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);\r\n}\r\n\r\nvec2 random2(vec2 p , vec2 seed) {\r\n  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\r\n}\r\n\r\nfloat Noise(int x, int y){\r\n    return (fract(sin(dot(vec2(x, y), vec2(12.9898, 4.1414))) * 43758.5453));\r\n}\r\n\r\n\r\n//Noise interpolation 2D function\r\nfloat interpNoise2D(float x, float y){\r\n\r\n    int intX =  int(x);\r\n    float fractX = fract(x);\r\n    int intY = int(y);\r\n    float fractY = fract(y);\r\n\r\n    float v1 = Noise(intX, intY);\r\n    float v2 = Noise(intX + 1, intY);\r\n    float v3 = Noise(intX, intY + 1);\r\n    float v4 = Noise(intX + 1, intY + 1);\r\n\r\n    float i1 = mix(v1, v2, fractX);\r\n    float i2 = mix(v3, v4, fractX);\r\n\r\n    return mix(i1, i2, fractY);\r\n\r\n}\r\n\r\n//Steppe-like FBM pattern\r\nfloat steppeFbm(float x, float y){\r\n\r\n    float total = 0.f;\r\n    float peristence = 0.5f;\r\n    float octaves = 8.f;\r\n\r\n    for(float i = 0.f; i < octaves; i++){\r\n        float freq = pow(2.f, i);\r\n        float amp = pow(peristence, i);\r\n        total += interpNoise2D((x * freq) / 128.f, (y * freq) / 128.f) * amp;\r\n    }\r\n\r\n    return total;\r\n\r\n}\r\n\r\n// FBM function for 2D input\r\nfloat fbm(float x, float y){\r\n\r\n    float total = 0.f;\r\n    float peristence = 0.5f;\r\n    float octaves = 1.f;\r\n\r\n    for(float i = 0.f; i < octaves; i++){\r\n        float freq = pow(2.f, i);\r\n        float amp = pow(peristence, i);\r\n        total += interpNoise2D((x * freq), (y * freq)) * amp;\r\n    }\r\n\r\n    return total;\r\n\r\n}\r\n\r\n//interpolation functions\r\nfloat linear_interpolate(float a, float b, float t){\r\n  return a * (1.f - t) + b * t;\r\n}\r\n\r\nfloat cosine_interpolation(float a, float b, float t){\r\n  float cos_t = (1.f - cos(t * 3.14)) * 0.5f;\r\n  return linear_interpolate(a, b, cos_t);\r\n}\r\n\r\n\r\n//Function for DR SEUSS portion of environment\r\nvoid seuss(){\r\n\r\n\r\n  fs_Pos = vs_Pos.xyz;\r\n  float rand = random1(vec2(vs_Pos.x + u_PlanePos.x, vs_Pos.z + u_PlanePos.y) , vec2(1.f, 3.f));\r\n  fs_Sine = (sin((vs_Pos.x + u_PlanePos.x) * 3.14159 * 0.1) + cos((vs_Pos.z + u_PlanePos.y) * 3.14159 * 0.1));\r\n  fs_Sine += (cos((vs_Pos.x + u_PlanePos.x) * 3.14159 * 0.2) + cos((vs_Pos.z + u_PlanePos.y) * 3.14159 *  0.1));\r\n  fs_Sine += 5.0;\r\n\r\n vec4 modelposition = vec4(vs_Pos.x, fs_Sine * (cos(vs_Pos.x + u_PlanePos.x)+sin(.5f * (vs_Pos.z + u_PlanePos.y))*\r\n cos(vs_Pos.z + u_PlanePos.y)) + fbm(vs_Pos.x + u_PlanePos.x, vs_Pos.z + u_PlanePos.y), vs_Pos.z, 1.0);\r\n fs_Sine = fs_Sine * (cos(vs_Pos.x + u_PlanePos.x)+sin(.5f * (vs_Pos.z + u_PlanePos.y))*\r\n cos(vs_Pos.z + u_PlanePos.y));\r\n\r\n\r\n\r\n   fs_Sine = 5.f;\r\n\r\n\r\n  if (modelposition.y > 10.f){\r\n    modelposition.y = 10.f + rand / 5.f;\r\n  }\r\n  if (modelposition.y < -2.f){\r\n    modelposition.y = -2.f - rand;\r\n  }\r\n\r\n    modelposition.y /= 2.1f;\r\n    if (modelposition.y < .5f){\r\n      modelposition.y = 0.2f;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n  fs_Pos = modelposition.xyz;\r\n  modelposition = u_Model * modelposition;\r\n  gl_Position = u_ViewProj * modelposition;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvoid main()\r\n{\r\n\r\n    ///-----OH, THE PLACES YOU'LL GO --- DR SEUSS---\r\n\r\n\r\n\r\n\r\n    seuss();\r\n    //------------ OH THE PLACES YOULL GO ------------------------\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\r\n\r\nin vec3 fs_Pos;\r\nin vec4 fs_Nor;\r\nin vec4 fs_Col;\r\n\r\n\r\n\r\n\r\nin float fs_Sine;\r\n\r\nout vec4 out_Col; // This is the final output color that you will see on your\r\n                  // screen for the pixel that is currently being processed.\r\n\r\n                  float random1( vec2 p , vec2 seed) {\r\n                    return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\r\n                  }\r\n\r\n//WORLD IS SPLIT INTO 3 REGIONS. DR SEUSS, BEACH, DESERT MOUNTAINS\r\n\r\nvoid main()\r\n{\r\n\r\n\r\n    vec3 colorA;\r\n    vec3 colorB;\r\n\r\n\r\n\r\n     //-----DR SEUSS ------\r\n   float t = clamp(smoothstep(10.0, 20.0, length(fs_Pos / 2.f)), 0.0, 1.0); // Distance fog\r\n   out_Col = vec4(mix(vec3(0.5 * (fs_Sine + 1.0)), vec3(164.0 / 255.0, 233.0 / 255.0, 1.0), t), 1.0);\r\n   ///water\r\n   if (fs_Pos.y < 0.5f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     vec3 black = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, black, t), 01.f);\r\n   }else if (fs_Pos.y < .54f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 1.0f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 1.05f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   }\r\n   else if (fs_Pos.y < 1.54f) {\r\n     t = clamp(smoothstep(50.0, 70.0, length(fs_Pos)), 0.0, 1.0);\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 1.6f){\r\n     out_Col = vec4(0.f, 0.f, 0.f, 1.f);\r\n   } else if (fs_Pos.y < 2.0f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 2.05f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 2.5f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 2.55f){\r\n     out_Col = vec4(0.f, 0.f, 0.f, 1.f);\r\n   } else if (fs_Pos.y < 3.3f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);\r\n   } else if (fs_Pos.y < 3.35f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 4.f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);\r\n   } else if (fs_Pos.y < 4.05f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   }else if (fs_Pos.y < 4.5f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);\r\n   } else if (fs_Pos.y < 4.55f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 5.f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);\r\n   } else if (fs_Pos.y < 5.05f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 5.5f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);\r\n   } else if (fs_Pos.y < 5.55f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   }  else if (fs_Pos.y < 6.0f) {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   } else if (fs_Pos.y < 6.05f){\r\n     colorA = vec3(0.89, 0.196, 0.518);\r\n     colorB = vec3(0.169, 0.729, 0.937);\r\n     out_Col = vec4(mix(colorA, colorB, t), 01.f);\r\n   }\r\n   else {\r\n     colorA = vec3(0.0, 0.0, 0.0);\r\n     colorB = vec3(0.0, 0.0, 0.0);\r\n   // Mix uses pct (a value from 0-1) to\r\n   // mix the two colors\r\n   out_Col = vec4(mix(colorA, colorB, t), 1.f);\r\n   //wwout_Col = vec4(mix(colorA, colorB, fs_Pos.y), 1.f);\r\n\r\n\r\n }\r\n\r\n// out_Col = vec4(0.0, 1.0, 0.0, 1.0);\r\n//  float coord = fs_Pos.x + u_PlanePos.x;\r\n//  float isBlack = 0.0;\r\n//\r\n//\r\n//  if (mod(coord, 1.0) == 0.0){\r\n// \t out_Col = vec4(0.0, 0.0, 0.0, 1.0);\r\n//  }\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat viewAngle = 1.0;\r\nfloat speed = 4.0;\r\nfloat rate = 15.0;\r\nfloat baseamp = 0.15;\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 iResolution = u_Dimensions;\r\n\r\n\tvec2 p = ( gl_FragCoord.xy / u_Dimensions.xy ) * 2.0 - 1.0;\r\n\tp.x *= u_Dimensions.x / u_Dimensions.y;\r\n\r\n\r\n  float x = speed * viewAngle * u_Time / 1000.0 + rate * p.x;\r\n  float base = (1.0 + cos(x * 5.23 + u_Time / 10000.0)) * (1.0 + sin(10.46 * u_Time / 10000.0));\r\n  float z = fract(0.08*x);\r\n  z = max(z, 1.0-z);\r\n  z = pow(z, 20.0);\r\n  float pulse = exp(-1000.0 * z);\r\n  vec4 ecg_color = vec4(0.6, 0.2, 0.9, 1.0);\r\n  vec4 c = (vec4(1.0) - pow(clamp(1.0-abs(p.y-(baseamp * base + pulse -0.8)), 0.0, 1.0), 16.0)) * ecg_color;\r\n    out_Col = c;\r\n    if (out_Col.r > 0.1){\r\n    out_Col.r /= sin(u_Time / 100000.0 * 10.46);\r\n    //out_Col.b /= cos(u_Time / 10000.0 * 10.46);\r\n    }\r\n\r\n\r\n    float test = sin(13.659 * u_Time / 1000.0);\r\n\t//out_Col = vec4(test, 0.3, 0.8 , 1.0);\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\n\r\nuniform mat4 u_Model;\r\nuniform mat4 u_ModelInvTr;\r\nuniform mat4 u_ViewProj;\r\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\r\n\r\nin vec4 vs_Pos;\r\nin vec4 vs_Nor;\r\nin vec4 vs_Col;\r\n\r\nuniform float u_Time;\r\n\r\n\r\nout vec3 fs_Pos;\r\nout vec4 fs_Nor;\r\nout vec4 fs_Col;\r\n\r\nout float fs_Sine;\r\n\r\nfloat random1( vec2 p , vec2 seed) {\r\n  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\r\n}\r\n\r\nfloat random1( vec3 p , vec3 seed) {\r\n  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);\r\n}\r\n\r\nvec2 random2(vec2 p , vec2 seed) {\r\n  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\r\n}\r\n\r\nfloat Noise(int x, int y){\r\n    return (fract(sin(dot(vec2(x, y), vec2(12.9898, 4.1414))) * 43758.5453));\r\n}\r\n\r\n\r\n//Noise interpolation 2D function\r\nfloat interpNoise2D(float x, float y){\r\n\r\n    int intX =  int(x);\r\n    float fractX = fract(x);\r\n    int intY = int(y);\r\n    float fractY = fract(y);\r\n\r\n    float v1 = Noise(intX, intY);\r\n    float v2 = Noise(intX + 1, intY);\r\n    float v3 = Noise(intX, intY + 1);\r\n    float v4 = Noise(intX + 1, intY + 1);\r\n\r\n    float i1 = mix(v1, v2, fractX);\r\n    float i2 = mix(v3, v4, fractX);\r\n\r\n    return mix(i1, i2, fractY);\r\n\r\n}\r\n\r\n//Steppe-like FBM pattern\r\nfloat steppeFbm(float x, float y){\r\n\r\n    float total = 0.f;\r\n    float peristence = 0.5f;\r\n    float octaves = 8.f;\r\n\r\n    for(float i = 0.f; i < octaves; i++){\r\n        float freq = pow(2.f, i);\r\n        float amp = pow(peristence, i);\r\n        total += interpNoise2D((x * freq) / 128.f, (y * freq) / 128.f) * amp;\r\n    }\r\n\r\n    return total;\r\n\r\n}\r\n\r\n// FBM function for 2D input\r\nfloat fbm(float x, float y){\r\n\r\n    float total = 0.f;\r\n    float peristence = 0.5f;\r\n    float octaves = 1.f;\r\n\r\n    for(float i = 0.f; i < octaves; i++){\r\n        float freq = pow(2.f, i);\r\n        float amp = pow(peristence, i);\r\n        total += interpNoise2D((x * freq), (y * freq)) * amp;\r\n    }\r\n\r\n    return total;\r\n\r\n}\r\n\r\n//interpolation functions\r\nfloat linear_interpolate(float a, float b, float t){\r\n  return a * (1.f - t) + b * t;\r\n}\r\n\r\nfloat cosine_interpolation(float a, float b, float t){\r\n  float cos_t = (1.f - cos(t * 3.14)) * 0.5f;\r\n  return linear_interpolate(a, b, cos_t);\r\n}\r\n\r\n\r\n//Function for DR SEUSS portion of environment\r\nvoid seuss(){\r\n\r\n\r\n  fs_Pos = vs_Pos.xyz;\r\n  float rand = random1(vec2(vs_Pos.x + u_PlanePos.x, vs_Pos.z + u_PlanePos.y) , vec2(1.f, 3.f));\r\n  fs_Sine = (sin((vs_Pos.x + u_PlanePos.x) * 3.14159 * 0.1) + cos((vs_Pos.z + u_PlanePos.y) * 3.14159 * 0.1));\r\n  fs_Sine += (cos((vs_Pos.x + u_PlanePos.x) * 3.14159 * 0.2) + cos((vs_Pos.z + u_PlanePos.y) * 3.14159 *  0.1));\r\n  fs_Sine += 5.0;\r\n\r\n vec4 modelposition = vec4(vs_Pos.x, fs_Sine * (cos(vs_Pos.x + u_PlanePos.x)+sin(.5f * (vs_Pos.z + u_PlanePos.y))*\r\n cos(vs_Pos.z + u_PlanePos.y)) + fbm(vs_Pos.x + u_PlanePos.x, vs_Pos.z + u_PlanePos.y), vs_Pos.z, 1.0);\r\n fs_Sine = fs_Sine * (cos(vs_Pos.x + u_PlanePos.x)+sin(.5f * (vs_Pos.z + u_PlanePos.y))*\r\n cos(vs_Pos.z + u_PlanePos.y));\r\n\r\n\r\n\r\n   fs_Sine = 5.f;\r\n\r\n\r\n  if (modelposition.y > 10.f){\r\n    modelposition.y = 10.f + rand / 5.f;\r\n  }\r\n  if (modelposition.y < -2.f){\r\n    modelposition.y = -2.f - rand;\r\n  }\r\n\r\n    modelposition.y /= 2.1f;\r\n    if (modelposition.y < .5f){\r\n      modelposition.y = 0.2f;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n  fs_Pos = modelposition.xyz;\r\n  modelposition = u_Model * modelposition;\r\n  gl_Position = u_ViewProj * modelposition;\r\n\r\n}\r\n\r\n\r\n//function for desert mountains using FBM - vary over time\r\nvoid desert(){\r\n  fs_Pos = vs_Pos.xyz;\r\n  float exp = smoothstep(0.1 ,0.4, abs(vs_Pos.z) + abs(u_PlanePos.y));\r\n  fs_Sine = pow(steppeFbm((abs(vs_Pos.z) + abs(u_PlanePos.y)) * 10.0 * sin(5.236 * u_Time / 10000.0), (abs(vs_Pos.x) + abs(u_PlanePos.x)) * 10.f), 4.5f * exp)\r\n   * cos((5.236 * u_Time / 100000.0 + abs(vs_Pos.z) + abs(u_PlanePos.y)));\r\n\r\n  if (fs_Sine < 0.f){\r\n    fs_Sine = 0.f;\r\n  }\r\n\r\n  vec4 modelposition = vec4(vs_Pos.x, fs_Sine, vs_Pos.z, 1.0);\r\n\r\n  modelposition = u_Model * modelposition;\r\n  gl_Position = u_ViewProj * modelposition;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvoid main()\r\n{\r\n\r\n    ///-----OH, THE PLACES YOU'LL GO --- DR SEUSS---\r\n\r\n\r\n\r\n\r\n    desert();\r\n    //------------ OH THE PLACES YOULL GO ------------------------\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\r\n\r\nin vec3 fs_Pos;\r\nin vec4 fs_Nor;\r\nin vec4 fs_Col;\r\n\r\n\r\n\r\n\r\nin float fs_Sine;\r\n\r\nout vec4 out_Col; // This is the final output color that you will see on your\r\n                  // screen for the pixel that is currently being processed.\r\n\r\n                  float random1( vec2 p , vec2 seed) {\r\n                    return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\r\n                  }\r\n\r\n//WORLD IS SPLIT INTO 3 REGIONS. DR SEUSS, BEACH, DESERT MOUNTAINS\r\n\r\nvoid main()\r\n{\r\n\r\n\r\n    vec3 colorA;\r\n    vec3 colorB;\r\n\r\n\r\n\r\n     //-----DR SEUSS ------\r\n   float t = clamp(smoothstep(10.0, 20.0, length(fs_Pos / 2.f)), 0.0, 1.0); // Distance fog\r\n   out_Col = vec4(mix(vec3(0.5 * (fs_Sine + 1.0)), vec3(164.0 / 255.0, 233.0 / 255.0, 1.0), t), 1.0);\r\n\r\n\r\n\t colorA = vec3(0.169, 0.729, 0.937);\r\n colorB = vec3(0.698,0.227, 0.827);\r\n out_Col = vec4(mix(colorA, colorB, fs_Sine / 5.f), 1.f);\r\n\r\n if (fs_Sine < 0.5f){\r\n\t colorA = vec3(0.169, 0.729, 0.937);\r\n\t colorB = vec3(123.f/255.f, 221.f/255.f, 228.f/255.f);\r\n\t out_Col = vec4(mix(colorA, colorB, fs_Sine), 1.f);\r\n\r\n}\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n\r\nvec2 random2(vec2 p) {\r\n    return fract(sin(vec2(dot(p,vec2(127.1,381.7)),dot(p,vec2(269.5,183.3))))*43758.5453);\r\n}\r\n\r\nfloat cellular(vec2 p) {\r\n    vec2 i_st = floor(p);\r\n    vec2 f_st = fract(p);\r\n    float m_dist = 3.;\r\n    for (int j=-1; j<=1; j++ ) {\r\n        for (int i=-1; i<=1; i++ ) {\r\n            vec2 neighbor = vec2(float(i),float(j));\r\n            vec2 point = random2(i_st + neighbor);\r\n            point = 0.5 + 0.5*sin(point * u_Time / 1000.0 * 5.23);\r\n            vec2 diff = neighbor + point - f_st;\r\n            float dist = length(diff);\r\n            if( dist < m_dist ) {\r\n                m_dist = dist;\r\n            }\r\n        }\r\n    }\r\n    return m_dist;\r\n}\r\n\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 st = gl_FragCoord.xy / u_Dimensions.xy;\r\n\t    st.x *= u_Dimensions.x / u_Dimensions.y;\r\n\r\n\r\n\t    float v = 0.0;\r\n\r\n\t\t\tif (u_Time  > 48000.0 && u_Time <= 52000.0){\r\n\t\t\t\t//vec3 col1 = vec3(0.005,0.855,0.945);\r\n\t\t    //vec3 col2 = vec3(0.811,0.011,0.945);\r\n\t\t\t\tst *= 80.0;\r\n\t\t\t\tv = cellular(st);\r\n\t\t    out_Col = vec4( vec3(v), 1.0);\r\n\t\t\t}\r\n\t\telse if (u_Time  > 52000.0 && u_Time <= 53000.0){\r\n\t\t\t\t//vec3 col1 = vec3(0.005,0.855,0.945);\r\n\t\t    //vec3 col2 = vec3(0.811,0.011,0.945);\r\n\t\t\t\tst *= 60.0;\r\n\t\t\t\tv = cellular(st);\r\n\t\t    out_Col = vec4( vec3(v), 1.0);\r\n\t\t\t}\r\n\r\n\t\t\telse if (u_Time  > 53000.0 && u_Time <= 54000.0){\r\n\t\t\t\t\t//vec3 col1 = vec3(0.005,0.855,0.945);\r\n\t\t\t\t\t//vec3 col2 = vec3(0.811,0.011,0.945);\r\n\t\t\t\t\tst *= 40.0;\r\n\t\t\t\t\tv = cellular(st);\r\n\t\t\t\t\tout_Col = vec4( vec3(v), 1.0);\r\n\t\t\t\t}\r\n\r\n\t\t\telse if (u_Time > 54000.0 && u_Time < 55000.0){\r\n\t\t\t\tst *= 30.0;\r\n\t\t\t\tv = cellular(st);\r\n\t\t\t\tvec3 col1 = vec3(0.005,0.855,0.945);\r\n\t\t    vec3 col2 = vec3(0.811,0.011,0.945);\r\n\t\t    out_Col = vec4(mix(col1, col2, v * 1.05),1.0);\r\n\t\t\t}\r\n\t\t\telse if (u_Time > 55000.0 && u_Time < 56000.0){\r\n\t\t\t\tst *= 20.0;\r\n\t\t\t\tv = cellular(st);\r\n\t\t\t\tvec3 col1 = vec3(0.005,0.855,0.945);\r\n\t\t    vec3 col2 = vec3(0.811,0.011,0.945);\r\n\t\t    out_Col = vec4(mix(col1, col2, v * 1.25),1.0);\r\n\t\t\t}\r\n\t\t\telse if (u_Time > 56000.0 && u_Time < 57500.0){\r\n\t\t\t\tst *= 15.0;\r\n\t\t\t\tv = cellular(st);\r\n        vec3 col1 = vec3(0.005,0.655,0.945);\r\n\t\t    vec3 col2 = vec3(0.811,0.011,0.545);\r\n\t\t    out_Col = vec4(mix(col1, col2, v * 1.7),1.0);\r\n\t\t\t}\r\n\r\n\t\t\telse {\r\n\t\t\t\tst *= 10.0;\r\n\t\t\t\tv = cellular(st);\r\n\t\t\t\tvec3 col1 = vec3(0.005,0.655,0.945);\r\n\t\t    vec3 col2 = vec3(0.811,0.011,0.545);\r\n\t\t    out_Col = vec4(mix(col1, col2, v * 2.305 * sin(u_Time / 1000.0 * 5.23)),1.0);\r\n\t\t\t}\r\n\r\n\r\n}\r\n"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n#define PI 3.14159265358979323846\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n\r\nfloat random (in vec2 st) {\r\n    return fract(sin(dot(st.xy,\r\n                         vec2(12.9898,78.233)))\r\n                * 43758.5453123);\r\n}\r\n\r\n// Value noise by Inigo Quilez - iq/2013\r\n// https://www.shadertoy.com/view/lsf3WH\r\nfloat noise(vec2 st) {\r\n    vec2 i = floor(st);\r\n    vec2 f = fract(st);\r\n    vec2 u = f*f*(3.0-2.0*f);\r\n    return mix( mix( random( i + vec2(0.0,0.0) ),\r\n                     random( i + vec2(1.0,0.0) ), u.x),\r\n                mix( random( i + vec2(0.0,1.0) ),\r\n                     random( i + vec2(1.0,1.0) ), u.x), u.y);\r\n}\r\n\r\nmat2 rotate2d(float angle){\r\n    return mat2(cos(angle),-sin(angle),\r\n                sin(angle),cos(angle));\r\n}\r\n\r\nfloat lines(in vec2 pos, float b){\r\n    float scale = 9.0;\r\n    pos *= scale;\r\n    return smoothstep(0.0,\r\n                    .4+b*.5,\r\n                    abs((sin(pos.x*3.1415)+b*1.0))*.5);\r\n}\r\n\r\n\r\n\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\r\n\tst.y *= u_Dimensions.y/u_Dimensions.x;\r\n\r\n    vec2 pos = st.yx * vec2(1.,3.);\r\n\r\n    float pattern = pos.x;\r\n\r\n    // Add noise\r\n    pos = rotate2d( noise(pos) * sin(u_Time / 1000.0 * 10.46) ) * pos;\r\n\r\n    // Draw lines\r\n    pattern = lines(pos,.5);\r\n\r\n    vec3 col = vec3(0.504,0.302,0.605);\r\n    vec3 col2 = vec3(0.138,0.894,0.920);\r\n\r\n    out_Col = vec4(vec3(0.0), 1.0);\r\n\r\n\r\n\t\t\t if (fs_Pos.x < -0.4 && u_Time > 59000.0){\r\n\r\n\t\t\t\t out_Col = vec4(mix(col, col2, pattern) ,1.0);\r\n\r\n\r\n\t\t} else if (fs_Pos.x < 0.4 && u_Time  > 61500.0) {\r\n\r\n\t\t\t col = vec3(0.504,0.302,0.605);\r\n     col2 = vec3(0.920,0.045,0.222);\r\n\r\n\t\t\t out_Col = vec4(mix(col, col2, pattern) ,1.0);\r\n\r\n\t\t} else if (fs_Pos.x >= 0.4 && u_Time > 64000.0) {\r\n\r\n\t\t\t col = vec3(0.940,0.587,0.755);\r\n     \tcol2 = vec3(0.920,0.045,0.222);\r\n\r\n\t\t\t out_Col = vec4(mix(col, col2, pattern) ,1.0);\r\n\r\n\r\n\t\t}\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat noise(vec2 p) {\r\n\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nfloat smoothedge(float v) {\r\n    return smoothstep(0.0, 1.0 / u_Dimensions.x, v);\r\n}\r\n\r\nfloat circle(vec2 p, float radius) {\r\n  return length(p ) - radius ;\r\n}\r\n\r\nfloat rect(vec2 p, vec2 size) {\r\n  vec2 d = abs(p) - size ;\r\n  return min(max(d.x, d.y), 0.0) + length(max(d,0.0));\r\n}\r\n\r\nfloat roundRect(vec2 p, vec2 size, float radius) {\r\n  vec2 d = abs(p) - size;\r\n  return min(max(d.x, d.y), 0.0) + length(max(d,0.0))- radius;\r\n}\r\n\r\nfloat ring(vec2 p, float radius, float width) {\r\n  return abs(length(p) - radius * 0.5) - width;\r\n}\r\n\r\nfloat hexagon(vec2 p, float radius) {\r\n\t\tfloat f = 1.1 *  sin(u_Time / 2000.0 * 5.23);\r\n\t\tp = vec2(abs(p.x) * f, abs(p.y) * f);\r\n    vec2 q = abs(p);\r\n    return max(abs(q.y), q.x * 1.466025 + q.y * 0.5) - radius;\r\n}\r\n\r\nfloat hexagon2(vec2 p, float radius) {\r\n    vec2 q = abs(p);\r\n    return max(abs(q.y), q.x * 2.186 + q.y * 0.5) - radius;\r\n}\r\n\r\nfloat hexagon3(vec2 p, float radius) {\r\n    vec2 q = abs(p);\r\n    return max(abs(q.y), q.x * 1.954 + q.y * 0.892) - radius;\r\n}\r\n\r\nfloat triangle(vec2 p, float size) {\r\n    vec2 q = abs(p);\r\n    return max(q.x * 0.866025 + p.y * 0.5, -p.y * 0.5) - size * 0.5;\r\n}\r\n\r\nfloat ellipse(vec2 p, vec2 r, float s) {\r\n    return (length(p / r ) - s);\r\n}\r\n\r\nfloat capsule(vec2 p, vec2 a, vec2 b, float r) {\r\n    vec2 pa = p - a, ba = b - a;\r\n    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\r\n    return length( pa - ba*h ) - r;\r\n}\r\n\r\n//http://thndl.com/square-shaped-shaders.html\r\nfloat polygon(vec2 p, int vertices, float size) {\r\n    float a = atan(p.x, p.y) + 0.2;\r\n    float b = 6.28319 / float(vertices);\r\n    return cos(floor(0.5 + a / b) * b - a) * length(p) - size;\r\n}\r\n\r\n\r\nfloat red(){\r\nvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\tfloat d = 100.0;\r\n\r\n\td = min(d, hexagon(st - vec2(0.560,0.670), 0.05));\r\n\td = min(d, hexagon(st - vec2(0.320,0.630), 0.05));\r\n\td = min(d, hexagon(st - vec2(0.500,0.780), 0.05));\r\n\td = min(d, hexagon(st - vec2(0.620,0.890), 0.05));\r\n\td = min(d, hexagon(st - vec2(0.220,0.480), 0.03));\r\n\r\n\td = min(d, hexagon(st - vec2(0.350,0.380), 0.01));\r\n\t//small babues\r\n\t\td = min(d, hexagon(st - vec2(0.680,0.360), 0.03));\r\n\t\td = min(d, hexagon(st - vec2(0.260,0.320), 0.03));\r\n\t\td =  min(d, hexagon(st - vec2(0.320,0.750), 0.05));\r\n\r\n\r\n\treturn d;\r\n\r\n\r\n}\r\n\r\nfloat purple(){\r\n\tfloat d = 100.0;\r\n\tvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\r\n\td = min(d, hexagon(st - vec2(0.560,0.840), 0.05));\r\n\td = min(d, hexagon(st - vec2(0.620,0.780), 0.05));\r\n\t  d = min(d, hexagon(st - vec2(0.620,0.530), 0.05));\r\n\t\td = min(d, hexagon2(st - vec2(0.730,0.660), 0.05));\r\n\t\td = min(d, hexagon(st - vec2(0.440,0.850), 0.05));\r\n\t\td = min(d, hexagon(st - vec2(0.500,0.910), 0.05));\r\n\r\n\t\t\td = min(d, hexagon(st - vec2(0.440,0.720), 0.03));\r\n\t \t\td = min(d, hexagon(st - vec2(0.620,0.660), 0.03));\r\n\t     d = min(d, hexagon2(st - vec2(0.580,0.430), 0.03));\r\n\t\t\t d = min(d, hexagon(st - vec2(0.590,0.220), 0.03));\r\n\t\t\t d = min(d, hexagon(st - vec2(0.680,0.720), 0.05));\r\n\t\t\td = min(d, hexagon(st - vec2(0.680,0.600), 0.05));\r\n\t\t\td = min(d, hexagon2(st - vec2(0.680,0.490), 0.05));\r\n\t    d = min(d, hexagon2(st - vec2(0.630,0.410), 0.05));\r\n\r\n\t\t\t return d;\r\n\r\n}\r\n\r\n\r\nfloat green(){\r\n\r\n\tfloat d = 100.0;\r\n\tvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\r\n\td = min(d, hexagon2(st - vec2(0.310,0.500), 0.05));\r\n\td = min(d, hexagon2(st - vec2(0.270,0.440), 0.05));\r\n\td = min(d, hexagon2(st - vec2(0.310,0.370), 0.05));\r\n\td = min(d, hexagon2(st - vec2(0.350,0.440), 0.03));\r\n\td = min(d, hexagon(st - vec2(0.300,0.280), 0.03));\r\n\td = min(d, hexagon(st - vec2(0.630,0.280), 0.03));\r\n\td = min(d, hexagon(st - vec2(0.350,0.230), 0.03));\r\n\td = min(d, hexagon(st - vec2(0.350,0.310), 0.02));\r\n\td = min(d, hexagon(st - vec2(0.300,0.200), 0.02));\r\n\td = min(d, hexagon(st - vec2(0.380,0.600), 0.02));\r\n\td = min(d, hexagon(st - vec2(0.300,0.200), 0.02));\r\n\t d = min(d, hexagon(st - vec2(0.370,0.530), 0.01));\r\n\t d = min(d, hexagon(st - vec2(0.260,0.560), 0.05));\r\n\t  d = min(d, hexagon2(st - vec2(0.210,0.620), 0.05));\r\n\t\td = min(d, hexagon(st - vec2(0.380,0.910), 0.05));\r\n\t\td = min(d, hexagon(st - vec2(0.260,0.680), 0.05));\r\n\r\n\r\n\treturn d;\r\n}\r\n\r\nfloat blue(){\r\n\r\n\r\n\tfloat d = 1000.0;\r\n\tvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\r\n\td = min(d, hexagon(st - vec2(0.500,0.680), 0.03));\r\n\td = min(d, hexagon(st - vec2(0.490,0.590), 0.03));\r\n\r\n\t//tinier\r\n\td = min(d, hexagon(st - vec2(0.430,0.640), 0.02));\r\n\t//even tineier\r\n\td = min(d, hexagon(st - vec2(0.560,0.510), 0.01));\r\n\td = min(d, hexagon(st - vec2(0.530,0.600), 0.01));\r\n\td = min(d, hexagon(st - vec2(0.560,0.570), 0.02));\r\n\td = min(d, hexagon(st - vec2(0.570,0.350), 0.02));\r\n\td = min(d, hexagon(st - vec2(0.590,0.290), 0.01));\r\n\t   d = min(d, hexagon(st - vec2(0.410,0.560), 0.02));\r\n\t\t d = min(d, hexagon(st - vec2(0.320,0.860), 0.05));\r\n\t\t d = min(d, hexagon(st - vec2(0.380,0.800), 0.05));\r\n\t\t    d = min(d, hexagon(st - vec2(0.380,0.680), 0.03));\r\n\r\n\r\n\r\n\r\n\treturn d;\r\n\r\n}\r\n\r\n\r\nvoid main() {\r\n\r\n\r\n\tvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\t    //large hexagons\r\n\t    float mn = 100.0;\r\n\r\n\t\t\tfloat red = red();\r\n\t\t\tfloat blue = blue();\r\n\t\t\tfloat green = green();\r\n\t\t\tfloat purple = purple();\r\n\r\n\t\t\tvec3 tile = vec3(0.0);\r\n\t\t\tif (red < mn){\r\n\t\t\t\tmn = red;\r\n\t\t\t\ttile = mix (vec3(1.0, 0.0, 0.0), vec3(0.5, 0.0, 0.0) , st.x);\r\n\t\t\t}\r\n\r\n\t\t\tif (green < mn){\r\n\t\t\t\tmn = green;\r\n\t\t\t\ttile = vec3(0.0, 1.0, 0.0);\r\n\t\t\t}\r\n\r\n\t\t\tif (purple < mn){\r\n\t\t\t\tmn = purple;\r\n\t\t\t\ttile = mix(vec3(1.0, 0.0, 1.0), vec3(1.0, 0.2, 0.65) , st.x);\r\n\t\t\t}\r\n\r\n\t\t\tif (blue < mn){\r\n\t\t\t\tmn = blue;\r\n\t\t\t\ttile = vec3(0.0, 0.0, 1.0);\r\n\t\t\t}\r\n\r\n\r\n\r\n\t    //side warped hexagons\r\n\r\n\r\n\r\n\r\n\t\t\tfloat d = 1.0;\r\n\r\n\r\n\t    //thingy\r\n\t    d = min(d, hexagon3(st - vec2(0.470,0.010), 0.318));\r\n\r\n\t\t\tif (d < mn){\r\n\t\t\t\tmn = d;\r\n\t\t\t\ttile = mix(vec3(0.0, 0.9, 1.0), vec3(0.1, 0.4, 0.9),  sin(u_Time /500.0 * 5.23) * st.y * abs(st.x) * 9.0);\r\n\t\t\t}\r\n\r\n\t    //globe\r\n\t    d = min(d, ellipse(st - vec2(0.470,0.400), vec2(0.870,1.390), 0.046));\r\n\t\t\tif (d < mn){\r\n\t\t\t\tmn = d;\r\n\t\t\t\ttile = vec3(1.0, 0.0, 0.2);\r\n\t\t\t}\r\n\r\n\t    vec3 color = vec3(1.0) - vec3(tile) - vec3(smoothedge(mn));\r\n\t    out_Col = vec4(color, 1.0);\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n\r\n\r\nvec2 random2(vec2 st){\r\n    st = vec2( dot(st,vec2(127.1,311.7)),\r\n              dot(st,vec2(269.5,183.3)) );\r\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\r\n}\r\n\r\n// Value Noise by Inigo Quilez - iq/2013\r\n// https://www.shadertoy.com/view/lsf3WH\r\nfloat noise(vec2 st) {\r\n    vec2 i = floor(st);\r\n    vec2 f = fract(st);\r\n\r\n    vec2 u = f*f*(3.0-2.0*f);\r\n\r\n    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\r\n                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\r\n                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\r\n                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\r\n}\r\n\r\nmat2 rotate2d(float _angle){\r\n    return mat2(cos(_angle),-sin(_angle),\r\n                sin(_angle),cos(_angle));\r\n}\r\n\r\nfloat shape(vec2 st, float radius) {\r\n\tst = vec2(0.5)-st;\r\n    float r = length(st)*2.0;\r\n    float a = atan(st.y,st.x);\r\n    float m = abs(mod(a+u_Time / 1000.0*5.23,3.340*2.)-3.14)/3.6;\r\n    float f = radius;\r\n    m += noise(st+u_Time / 1000.0*0.1)*.5;\r\n    // a *= 1.+abs(atan(u_Time / 1000.0*0.2))*.1;\r\n    // a *= 1.+noise(st+u_Time / 1000.0*0.1)*0.1;\r\n    f += sin(a*50.)*noise(st+u_Time / 1000.0*.2)*.1;\r\n    f += (sin(a*20.)*.1*pow(m,2.));\r\n    return 1.-smoothstep(f,f+0.007,r);\r\n}\r\n\r\nfloat shapeBorder(vec2 st, float radius, float width) {\r\n    return shape(st,radius)-shape(st,radius-width);\r\n}\r\n\r\nvoid main() {\r\n  //out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);\r\n\t\tvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\t\tvec3 color = vec3(0.366,0.000,1.000) * shapeBorder(st,0.2,0.09 * sin(u_Time / 1000.0 * 10.46));\r\n\r\n\r\n\t\tif (u_Time > 84000.0){\r\n\t    color += vec3(0.863,0.181,1.000) * shapeBorder(st,1.04 * sin(u_Time / 1000.0 * 10.46),0.02 * sin(u_Time / 1000.0 * 10.46));\r\n\t\t}\r\n\r\n\t\t\tif (u_Time > 85000.0){\r\n\t    color += vec3(0.621,0.357,1.000) * shapeBorder(st, 0.4 ,0.07 * cos(u_Time / 1000.0 * 10.46));\r\n\t    color += vec3(0.863,0.181,1.000) * shapeBorder(st,0.4,0.02 * cos(u_Time / 1000.0 * 10.4636));\r\n}\r\n\r\n\r\n\t\tif (u_Time > 86000.0){\r\n\t    color += vec3(0.000,0.990,1.000) * shapeBorder(st,0.9,0.07 * cos(u_Time / 1000.0 * 10.46));\r\n\t    color -= vec3(0.063,0.181,0.000) * shapeBorder(st,0.9 * sin(u_Time / 1000.0 * 10.46),0.04 * cos(u_Time / 1000.0 * 10.46));\r\n\t\t}\r\n\r\n\t\tout_Col = vec4(0.0 + color, 1.0 );\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat noise(vec2 p) {\r\n\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);\r\n}\r\n\r\nvec2 position(float z) {\r\n\treturn vec2(\r\n\t\t0.0 + sin(z * 0.1) * 1.0 + sin(cos(z * 0.031) * 4.0) * 1.0 + sin(sin(z * 0.0091) * 3.0) * 1.0,\r\n\t\t0.0 + cos(z * 0.1) * 1.0 + cos(cos(z * 0.031) * 4.0) * 1.0 + cos(sin(z * 0.0091) * 3.0) * 1.0\r\n\t) * 1.0;\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 iResolution = u_Dimensions;\r\n\tvec2 p = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);\r\n\tfloat camZ = 25.0 * u_Time / 1000.0;\r\n\tvec2 cam = position(camZ);\r\n\r\n\tfloat dt = 0.5;\r\n\tfloat camZ2 = 25.0 * (u_Time / 1000.0 + dt);\r\n \tvec2 cam2 = position(camZ2);\r\n\tvec2 dcamdt = (cam2 - cam) / dt;\r\n\r\n\tvec3 f = vec3(0.0);\r\n \tfor(float j = 1.0; j < 100.0; j++) {\r\n\t\tfloat i = float(j);\r\n\t\tfloat realZ = floor(camZ) + i;\r\n\t\tfloat screenZ = realZ - camZ;\r\n\t\tfloat r = 1.0 / screenZ;\r\n \t\tvec2 c = (position(realZ) - cam) * 5.0 / screenZ - dcamdt * 0.2;\r\n        //c = vec2(ceil(c.x), ceil(c.y));\r\n\t \tvec3 color = (vec3(sin(realZ * 0.07), sin(realZ * 0.1), 0.8) + vec3(1.0)) / 2.0;\r\n        float len = clamp(length(p-c), 0.0, 5.0);\r\n        float val = clamp(abs(len - r), 0.0, 7.5);\r\n \t\tf += color * 0.06 / screenZ / (val + 0.06);\r\n\t}\r\n\r\n\tout_Col = vec4(f, 1.0);\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n#define p0 0.2, 0.7, 0.7,  0.6, 0.2, 0.9,  0.9, 0.2, 0.3,  0.9, 0.33, 0.77\r\n\r\nconst float numParticles = 55.;\r\nconst float numRings = 2.;\r\nconst float offsetMult = 2.;\r\n float tau = 5.23813;\r\n\r\nvec3 palette( in float t, in float a0, in float a1, in float a2, in float b0, in float b1, in float b2,\r\n              in float c0, in float c1, in float c2,in float d0, in float d1, in float d2)\r\n{\r\n    return vec3(a0,a1,a2) + vec3(b0,b1,b2)*cos( tau*(vec3(c0,c1,c2)*t+vec3(d0,d1,d2)) );\r\n}\r\n\r\nvec3 particleColor(vec2 uv, float radius, float offset, float periodOffset)\r\n{\r\n    vec3 color = palette(.4 + offset / 4., p0);\r\n    uv /= pow(periodOffset, .85) * sin(periodOffset * u_Time * 5.23 / 1000.0) + sin(periodOffset + 5.23 * u_Time / 1000.0);\r\n    vec2 pos = vec2(cos(offset * offsetMult + u_Time / 1000.0 + periodOffset),\r\n        \t\tsin(offset * offsetMult + u_Time * 5.23 / 10000.0 * 8. + periodOffset * tau * sin(u_Time * 5.23 / 10000.0)));\r\n\r\n    float dist = radius / distance(uv, pos);\r\n    return color * pow(dist, 2.) * 1.85;\r\n}\r\n\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 uv = (2.0 * gl_FragCoord.xy - u_Dimensions.xy) / u_Dimensions.y;\r\n\t uv *= 2.45;\r\n\r\n\t out_Col = vec4(0.0, 0.0, 0.0, 1.0);\r\n\r\n\t for (float n = 0.0; n <= numRings; n++)\r\n\t {\r\n\t\t\t for (float i = 0.0; i <= numParticles; i++) {\r\n\t\t\t\t out_Col.rgb += particleColor(uv, 0.02, i / numParticles, n / 2.0);\r\n\t\t }\r\n\t }\r\n\r\n}\r\n"

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\r\nvec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\r\nvec3 permute(vec3 x) { return mod289(((x*24.0)+1.0)*x); }\r\n\r\nfloat random (in vec2 st) {\r\n    return fract(sin(dot(st.xy,\r\n                         vec2(12.9898,78.233)))\r\n                * 43758.5453123);\r\n}\r\n\r\nfloat snoise(vec2 v) {\r\n    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\r\n                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\r\n                        -0.577350269189626,  // -1.0 + 2.0 * C.x\r\n                        0.024390243902439); // 1.0 / 41.0\r\n    vec2 i  = floor(v + dot(v, C.yy) );\r\n    vec2 x0 = v -   i + dot(i, C.xx);\r\n    vec2 i1;\r\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\r\n    vec4 x12 = x0.xyxy + C.xxzz;\r\n    x12.xy -= i1;\r\n    i = mod289(i); // Avoid truncation effects in permutation\r\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\r\n        + i.x + vec3(0.0, i1.x, 1.0 ));\r\n\r\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\r\n    m = m*m ;\r\n    m = m*m ;\r\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\r\n    vec3 h = abs(x) - 0.5;\r\n    vec3 ox = floor(x + 0.5);\r\n    vec3 a0 = x - ox;\r\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\r\n    vec3 g;\r\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\r\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\r\n    return 130.0 * dot(m, g);\r\n}\r\n\r\nfloat level(vec2 st) {\r\n    float n = 0.0;\r\n    for (float i = 1.0; i < 8.0; i ++) {\r\n        float m = pow(1.3, i);\r\n        n += snoise(st * m) * (1.0 / m);\r\n    }\r\n    return n * 0.5 + 1.6;\r\n}\r\n\r\nvec3 normal(vec2 st) {\r\n    float d = 0.0021;\r\n    float l0 = level(st);\r\n    float l1 = level(st + vec2(d, 0.0)); // slightly offset the x-coord\r\n    float l2 = level(st + vec2(0.0, d)); // slightly offset the y-coord\r\n    // return normalized vector perpendicular to the surface using the noise values as the elevation of these points\r\n    return normalize(vec3(-(l1 - l0), -(l2 - l0), d));\r\n}\r\n\r\n//https://en.wikipedia.org/wiki/Phong_reflection_model\r\nvec3 phong(vec2 st, vec3 normal, vec3 lightPos) {\r\n    vec3 lightDir = normalize(vec3(lightPos - vec3(st, 0.0)));\r\n    float diffuse = max(0.0, dot(normal, lightDir));\r\n    vec3 vReflection = normalize(reflect(-lightDir, normal));\r\n    float specular = pow(max(0.0, dot(normal, vReflection)), 12.0);\r\n\r\n    vec3 ambientColor = vec3(0.007,0.134,0.275);\r\n    vec3 diffuseColor = vec3(0.472,0.019,0.500);\r\n\r\n\t\tif (u_Time > 112000.0){\r\n\t\t\tambientColor =vec3(0.275,0.100,0.182);\r\n    diffuseColor = vec3(0.472,0.019,0.500);\r\n\t\t}\r\n    return min(vec3(1.0), ambientColor + diffuseColor * diffuse + specular);\r\n}\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 st = gl_FragCoord.xy / u_Dimensions.xy;\r\n\tst.x *= u_Dimensions.x / u_Dimensions.y;\r\n    float t = u_Time / 1000.0;\r\n    vec3 col = phong(st, normal(st), vec3(sin(t * 5.23) * 0.5 + 0.5, sin(t * 10.46) * 0.8 + 0.5, 1.0));\r\n\r\n\r\n    // water if the elevation is less than a threshold\r\n    float n = level(st);\r\n    if (n < 0.2) {col = vec3(0.0, 0.0, 0.8);}\r\n    out_Col = vec4(col, 1.0);\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n#define p0 0.2, 0.8, 0.9,  0.9, 0.2, 0.9,  0.9, 0.2, 0.7,  0.7, 0.53, 0.77\r\n\r\nconst float numParticles = 5.;\r\nconst float numRings = 3.;\r\nconst float offsetMult = 4.;\r\n float tau = 5.23813;\r\n\r\nvec3 palette( in float t, in float a0, in float a1, in float a2, in float b0, in float b1, in float b2,\r\n              in float c0, in float c1, in float c2,in float d0, in float d1, in float d2)\r\n{\r\n    return vec3(a0,a1,a2) + vec3(b0,b1,b2)*cos( tau*(vec3(c0,c1,c2)*t+vec3(mix(0.3, 0.9, cos(5.23* u_Time / 1000.0)),d1,d2)) );\r\n}\r\n\r\nvec3 particleColor(vec2 uv, float radius, float offset, float periodOffset)\r\n{\r\n    vec3 color = palette(.4 + offset / 4., p0);\r\n    uv = uv / pow(periodOffset, .25) * sin(periodOffset * u_Time * 5.23 / 1000.0) + sin(periodOffset + 5.23 * u_Time / 1000.0);\r\n    vec2 pos = vec2(cos(offset * offsetMult + u_Time / 1000.0 + periodOffset),\r\n        \t\tsin(offset * offsetMult + u_Time * 5.23 / 10000.0 * 3. + periodOffset * tau * sin(u_Time * 5.23 / 10000.0)));\r\n\r\n    float dist = radius / distance(uv, pos);\r\n    return color * pow(dist, 2.) * (sin(5.23 * u_Time / 10000.0) * 2.95 + 2.50);\r\n}\r\n\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 uv = (2.0 * gl_FragCoord.xy - u_Dimensions.xy) / u_Dimensions.y;\r\n\t uv *= 2.45;\r\n\r\n\t out_Col = vec4(0.0, 0.0, 0.0, 1.0);\r\n\r\n\t for (float n = 0.0; n <= numRings; n++)\r\n\t {\r\n\t\t\t for (float i = 0.0; i <= numParticles; i++) {\r\n\t\t\t\t out_Col.rgb += particleColor(uv, 0.02, i / numParticles, n / 2.0);\r\n\t\t }\r\n\t }\r\n\r\n}\r\n"

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nfloat plot(vec2 st, float pct){\r\n  return  smoothstep( pct - 0.005, pct, st.y) -\r\n          smoothstep( pct, pct + 0.005, st.y);\r\n}\r\n\r\nfloat easeInQuad(float t) {\r\n    return t * t;\r\n}\r\n\r\nfloat easeOutQuad(float t) {\r\n    return -1.0 * t * (t - 2.0);\r\n}\r\n\r\nfloat easeInOutQuad(float t) {\r\n    if ((t *= 2.0) < 1.0) {\r\n        return 0.5 * t * t;\r\n    } else {\r\n        return -0.5 * ((t - 1.0) * (t - 3.0) - 1.0);\r\n    }\r\n}\r\n\r\nfloat easeInCubic(float t) {\r\n    return t * t * t;\r\n}\r\n\r\nfloat easeOutCubic(float t) {\r\n    return (t = t - 1.0) * t * t + 1.0;\r\n}\r\n\r\nfloat easeInOutCubic(float t) {\r\n    if ((t *= 0.0) < 1.0) {\r\n        return 0.5 * t * t * t;\r\n    } else {\r\n        return 0.5 * ((t -= 2.0) * t * t + 2.0);\r\n    }\r\n}\r\n\r\nfloat easeInExpo(float t) {\r\n    return (t == 0.0) ? 0.0 : pow(2.0, 10.0 * (t - 1.0));\r\n}\r\n\r\nfloat easeOutExpo(float t) {\r\n    return (t == 1.0) ? 1.0 : -pow(2.0, -10.0 * t) + 1.0;\r\n}\r\n\r\nfloat easeInOutExpo(float t) {\r\n    if (t == 0.0 || t == 1.0) {\r\n        return t;\r\n    }\r\n    if ((t *= 2.0) < 1.0) {\r\n        return 0.5 * pow(2.0, 10.0 * (t - 1.0));\r\n    } else {\r\n        return 0.5 * (-pow(2.0, -10.0 * (t - 1.0)) + 2.0);\r\n    }\r\n}\r\n\r\n\r\nvoid main() {\r\n\tvec3 IVORY =  vec3(0.967,0.419,1.000);\r\n\tvec3  SUNSET = vec3(0.234,0.327,0.900);\r\n\tvec3 NAVY = vec3(0.561,0.160,1.000);\r\n\r\n\r\n\r\n\tvec2 st = gl_FragCoord.xy / u_Dimensions;\r\n\r\n\t    float t = fract(u_Time / 1000.0), n0 = st.y * 8.680, n1 = st.x * 1.0, v0, v1;\r\n\r\n\t    vec3 color = IVORY;\r\n\r\n\t\t\tif (u_Time > 129000.0){\r\n\t\t\t\tSUNSET = vec3(0.934,0.027,0.900);\r\n\t\t\t}\r\n\r\n\t\t\tif (u_Time > 131000.0){\r\n\t\t\t\tSUNSET = vec3(0.434,0.927,0.300);\r\n\t\t\t\tt *= 2.5;\r\n\t\t\t}\r\n\r\n\t    // Bar animations\r\n\t    if (n0 < 1.0) {\r\n\t      v0 = step(st.x, t);\r\n\t    } else if (n0 < 2.0) {\r\n\t      v0 = step(st.y, easeInQuad(t));\r\n\t    } else if (n0 < 3.0) {\r\n\t      v0 = step(st.y, easeOutQuad(t));\r\n\t    } else if (n0 < 4.0) {\r\n\t      v0 = step(st.y, easeInOutQuad(t));\r\n\t    } else if (n0 < 5.0) {\r\n\t      v0 = step(st.x, easeInOutCubic(t));\r\n\t    } else if (n0 < 6.0) {\r\n\t      v0 = step(st.y, easeOutCubic(t));\r\n\t    } else if (n0 < 7.0) {\r\n\t      v0 = step(st.y, easeInOutCubic(t));\r\n\t    }  else {\r\n\t      v0 = step(st.y, easeInOutCubic(t));\r\n\t    }\r\n\t    color = mix(color, SUNSET, v0 * sin(u_Time /1000.0 * 10.46));\r\n\r\n\t    if (n1 < 0.1){\r\n\t        color = mix(color, vec3(0.0), v0 * sin(u_Time / 1000.0 * 10.46));\r\n\t    }\r\n\t    if (n1 < 0.3 && n1 > 0.2){\r\n\t        color = mix(color, NAVY, v0 * sin(u_Time / 1000.0 * 10.46));\r\n\t    }\r\n\t    if (n1 < 0.5 && n1 > 0.4){\r\n\t        color = mix(color, vec3(0.0), v0 * sin(u_Time / 1000.0 * 10.46));\r\n\t    }\r\n\t    if (n1 < 0.7 && n1 > 0.6){\r\n\t        color = mix(color, NAVY, v0 * sin(u_Time / 1000.0 * 10.46));\r\n\t    }\r\n\t    if (n1 < 0.9 && n1 > 0.8){\r\n\t        color = mix(color, vec3(0.0), v0 * sin(u_Time / 1000.0 * 10.46));\r\n\t    }\r\n\t//Set the final color\r\n\tout_Col = vec4(color, 1.0 );\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat noise(vec2 p) {\r\n\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n\r\n\r\n//\tvec2 p = ( gl_FragCoord.xy * 5.0 / u_Dimensions.xy);\r\n\t //p *= 0.9;\r\n\t vec2 iResolution = u_Dimensions;\r\n\t vec2 st = gl_FragCoord.xy / u_Dimensions;\r\n \tvec2 p = (gl_FragCoord.xy * 5.0 - iResolution.xy) / min(iResolution.x, iResolution.y);\r\n\r\n\r\n\tvec4 a = vec4(.7,1.9,.322,0) + sin(u_Time /1000.0 * 10.46) + atan(p.y * 6.0, p.x),\r\n         b = a;\r\n\t\t\t\t  b.y+=.4;\r\n    a = cos( sin(p.x)-sin(p.y) +a ),\r\n    b = sin(a*p.x*p.y - p.y   +b );\r\n\r\n    a =  abs(b*b-a*a);\r\n\r\n    vec3 col  = mix(vec3(0.9, 0.2, 0.9), vec3(0.1, 0.6, 0.9), a.y);\r\n    col  = mix(vec3(0.1, 0.8, 0.9), vec3(0.9, 0.15, 0.9), a.x);\r\n\r\n\r\n    out_Col =  1.6 * pow(1.-a+b*a,  37.+a-a);\r\n    out_Col.g = 0.0;\r\n    if (out_Col.b > 0.7){\r\n        out_Col.g += 0.3;\r\n    }\r\n    if (out_Col.r > 0.6){\r\n        out_Col.b += 0.6;\r\n    }\r\n\t\t// if (out_Col.b > 0.7){\r\n\t\t \tout_Col = vec4(out_Col.rgb, 1.0);\r\n\t\t// }\r\n\r\n\t\tif (u_Time >= 139000.0 && st.x < 0.2){\r\n\t\t\tif (out_Col.b > 0.5){\r\n\t        out_Col.b = 0.0;\r\n\t\t\t\t\tout_Col.g = 0.75;\r\n\t    }\r\n\t    if (out_Col.r > 0.4){\r\n\t        out_Col.r = 0.0;\r\n\t\t\t\t\tout_Col.b = 0.8;\r\n\t    }\r\n\r\n\t\t}\r\n\r\n\t\tif (u_Time >= 140500.0 && st.x > 0.75){\r\n\t\t\tif (out_Col.b > 0.5){\r\n\t        out_Col.b = 0.0;\r\n\t\t\t\t\tout_Col.r = 0.75;\r\n\t    }\r\n\t    if (out_Col.g > 0.4){\r\n\t        out_Col.r = 0.0;\r\n\t\t\t\t\tout_Col.g = 0.6;\r\n\t    }\r\n\r\n\t\t}\r\n\r\n\r\n\t//Set the final color\r\n\t//out_Col = vec4(vec3(col1, intensity*uv.y * 0.81 + 0.9, 0.3), 1.0 );\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n\r\n\r\nvec2 random2(vec2 st){\r\n    st = vec2( dot(st,vec2(127.1,311.7)),\r\n              dot(st,vec2(269.5,183.3)) );\r\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\r\n}\r\n\r\n// Value Noise by Inigo Quilez - iq/2013\r\n// https://www.shadertoy.com/view/lsf3WH\r\nfloat noise(vec2 st) {\r\n    vec2 i = floor(st);\r\n    vec2 f = fract(st);\r\n\r\n    vec2 u = f*f*(3.0-2.0*f);\r\n\r\n    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\r\n                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\r\n                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\r\n                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\r\n}\r\n\r\nmat2 rotate2d(float _angle){\r\n    return mat2(cos(_angle),-sin(_angle),\r\n                sin(_angle),cos(_angle));\r\n}\r\n\r\nfloat shape(vec2 st, float radius) {\r\n\tst = vec2(0.5)-st;\r\n    float r = length(st)*2.0;\r\n    float a = atan(st.y,st.x);\r\n    float m = abs(mod(a+u_Time / 1000.0 / 1000.0*5.23,3.340*2.)-3.14)/3.6;\r\n    float f = radius;\r\n    m += noise(st+u_Time / 1000.0 / 1000.0*0.1)*.5;\r\n    // a *= 1.+abs(atan(u_Time / 1000.0 / 1000.0*0.2))*.1;\r\n    // a *= 1.+noise(st+u_Time / 1000.0 / 1000.0*0.1)*0.1;\r\n    f += sin(a*50.)*noise(st+u_Time / 1000.0 / 1000.0*.2)*.1;\r\n    f += (sin(a*20.)*.1*pow(m,2.));\r\n    return 1.-smoothstep(f,f+0.007,r);\r\n}\r\n\r\nfloat shapeBorder(vec2 st, float radius, float width) {\r\n    return shape(st,radius)-shape(st,radius-width);\r\n}\r\n\r\nvoid main() {\r\n  //out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);\r\n\t\tvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\t\tvec3 color = vec3(0.366,0.000,1.000) * shapeBorder(st,0.2,0.09 * sin(u_Time / 1000.0 * 10.46));\r\n\r\n\r\n    color += vec3(0.863,0.181,1.000) * shapeBorder(st,1.04 * sin(u_Time / 1000.0 * 10.46),mix(0.02, 0.35, st.y * st.x) * sin(u_Time / 1000.0 * 10.46));\r\n\r\n\t\t\tif (u_Time> 148000.0){\r\n\t\t\t\tcolor += vec3(0.621,0.357,1.000) * shapeBorder(st, 0.4 ,0.07 * cos(u_Time / 1000.0 * 5.236));\r\n\t\t    color += vec3(0.863,0.181,1.000) * shapeBorder(st,mix(0.65, 0.85, st.y * st.x),0.02 * cos(u_Time / 1000.0 * 10.4636));\r\n\t\t    color += vec3(0.821,0.357,1.000) * shapeBorder(st, mix(0.65, 0.85, st.y * st.x) ,0.27 * cos(u_Time / 1000.0 * 5.236));\r\n\t\t    color += vec3(1.000,0.001,0.546) * shapeBorder(st,0.4,0.12 * cos(u_Time / 1000.0 * 10.4636));\r\n\r\n}\r\n\r\n\r\n\r\n\t\tout_Col = vec4(0.0 + color, 1.0 );\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\n\r\nuniform mat4 u_Model;\r\nuniform mat4 u_ModelInvTr;\r\nuniform mat4 u_ViewProj;\r\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\r\n\r\nin vec4 vs_Pos;\r\nin vec4 vs_Nor;\r\nin vec4 vs_Col;\r\n\r\nuniform float u_Time;\r\n\r\n\r\nout vec3 fs_Pos;\r\nout vec4 fs_Nor;\r\nout vec4 fs_Col;\r\n\r\nout float fs_Sine;\r\n\r\nfloat random1( vec2 p , vec2 seed) {\r\n  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\r\n}\r\n\r\nfloat random1( vec3 p , vec3 seed) {\r\n  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);\r\n}\r\n\r\nvec2 random2(vec2 p , vec2 seed) {\r\n  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\r\n}\r\n\r\nfloat Noise(int x, int y){\r\n    return (fract(sin(dot(vec2(x, y), vec2(12.9898, 4.1414))) * 43758.5453));\r\n}\r\n\r\n\r\n//Noise interpolation 2D function\r\nfloat interpNoise2D(float x, float y){\r\n\r\n    int intX =  int(x);\r\n    float fractX = fract(x);\r\n    int intY = int(y);\r\n    float fractY = fract(y);\r\n\r\n    float v1 = Noise(intX, intY);\r\n    float v2 = Noise(intX + 1, intY);\r\n    float v3 = Noise(intX, intY + 1);\r\n    float v4 = Noise(intX + 1, intY + 1);\r\n\r\n    float i1 = mix(v1, v2, fractX);\r\n    float i2 = mix(v3, v4, fractX);\r\n\r\n    return mix(i1, i2, fractY);\r\n\r\n}\r\n\r\n//Steppe-like FBM pattern\r\nfloat steppeFbm(float x, float y){\r\n\r\n    float total = 0.f;\r\n    float peristence = 0.5f;\r\n    float octaves = 8.f;\r\n\r\n    for(float i = 0.f; i < octaves; i++){\r\n        float freq = pow(2.f, i);\r\n        float amp = pow(peristence, i);\r\n        total += interpNoise2D((x * freq) / 128.f, (y * freq) / 128.f) * amp;\r\n    }\r\n\r\n    return total;\r\n\r\n}\r\n\r\n// FBM function for 2D input\r\nfloat fbm(float x, float y){\r\n\r\n    float total = 0.f;\r\n    float peristence = 0.5f;\r\n    float octaves = 1.f;\r\n\r\n    for(float i = 0.f; i < octaves; i++){\r\n        float freq = pow(2.f, i);\r\n        float amp = pow(peristence, i);\r\n        total += interpNoise2D((x * freq), (y * freq)) * amp;\r\n    }\r\n\r\n    return total;\r\n\r\n}\r\n\r\n//interpolation functions\r\nfloat linear_interpolate(float a, float b, float t){\r\n  return a * (1.f - t) + b * t;\r\n}\r\n\r\nfloat cosine_interpolation(float a, float b, float t){\r\n  float cos_t = (1.f - cos(t * 3.14)) * 0.5f;\r\n  return linear_interpolate(a, b, cos_t);\r\n}\r\n\r\n\r\n//Function for DR SEUSS portion of environment\r\nvoid seuss(){\r\n\r\n\r\n  fs_Pos = vs_Pos.xyz;\r\n  float rand = random1(vec2(vs_Pos.x + u_PlanePos.x, vs_Pos.z + u_PlanePos.y) , vec2(1.f, 3.f));\r\n  fs_Sine = (sin((vs_Pos.x + u_PlanePos.x) * 3.14159 * 0.1) + cos((vs_Pos.z + u_PlanePos.y) * 3.14159 * 0.1));\r\n  fs_Sine += (cos((vs_Pos.x + u_PlanePos.x) * 3.14159 * 0.2) + cos((vs_Pos.z + u_PlanePos.y) * 3.14159 *  0.1));\r\n  fs_Sine += 5.0;\r\n\r\n vec4 modelposition = vec4(vs_Pos.x, fs_Sine * (cos(vs_Pos.x + u_PlanePos.x)+sin(.5f * (vs_Pos.z + u_PlanePos.y))*\r\n cos(vs_Pos.z + u_PlanePos.y)) + fbm(vs_Pos.x + u_PlanePos.x, vs_Pos.z + u_PlanePos.y), vs_Pos.z, 1.0);\r\n fs_Sine = fs_Sine * (cos(vs_Pos.x + u_PlanePos.x)+sin(.5f * (vs_Pos.z + u_PlanePos.y))*\r\n cos(vs_Pos.z + u_PlanePos.y));\r\n\r\n\r\n\r\n   fs_Sine = 5.f;\r\n\r\n\r\n  if (modelposition.y > 10.f){\r\n    modelposition.y = 10.f + rand / 5.f;\r\n  }\r\n  if (modelposition.y < -2.f){\r\n    modelposition.y = -2.f - rand;\r\n  }\r\n\r\n    modelposition.y /= 2.1f;\r\n    if (modelposition.y < .5f){\r\n      modelposition.y = 0.2f;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n  fs_Pos = modelposition.xyz;\r\n  modelposition = u_Model * modelposition;\r\n  gl_Position = u_ViewProj * modelposition;\r\n\r\n}\r\n\r\n\r\n//function for desert mountains using FBM - vary over time\r\nvoid desert(){\r\n  fs_Pos = vs_Pos.xyz;\r\n\r\n  float exp = smoothstep(0.1 ,0.4, abs(vs_Pos.z) + abs(u_PlanePos.y));\r\n  fs_Sine = pow(steppeFbm((abs(vs_Pos.z) + abs(u_PlanePos.y)) * 5.0 , (abs(vs_Pos.x) + abs(u_PlanePos.x) - 100.0) * 5.0), 3.5f * exp)\r\n   * cos((abs(vs_Pos.z) + abs(u_PlanePos.y)));\r\n\r\n  if (fs_Sine < 0.f){\r\n    fs_Sine = 0.f;\r\n  }\r\n\r\n  if(abs(fs_Pos.z) < 12.0){\r\n  \tfs_Sine = 0.15;\r\n  }\r\n\r\n  vec4 modelposition = vec4(vs_Pos.x, fs_Sine, vs_Pos.z, 1.0);\r\n\r\n  modelposition = u_Model * modelposition;\r\n  gl_Position = u_ViewProj * modelposition;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvoid main()\r\n{\r\n\r\n\r\n\r\n\r\n\r\n    desert();\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\r\n\r\nin vec3 fs_Pos;\r\nin vec4 fs_Nor;\r\nin vec4 fs_Col;\r\n\r\n\r\n\r\n\r\nin float fs_Sine;\r\n\r\nout vec4 out_Col; // This is the final output color that you will see on your\r\n                  // screen for the pixel that is currently being processed.\r\n\r\n                  float random1( vec2 p , vec2 seed) {\r\n                    return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\r\n                  }\r\n\r\n//WORLD IS SPLIT INTO 3 REGIONS. DR SEUSS, BEACH, DESERT MOUNTAINS\r\n\r\nvoid main()\r\n{\r\n\r\n\r\n    vec3 colorA;\r\n    vec3 colorB;\r\n\r\n\r\n\r\n     //-----DR SEUSS ------\r\n   float t = clamp(smoothstep(10.0, 20.0, length(fs_Pos / 2.f)), 0.0, 1.0); // Distance fog\r\n   out_Col = vec4(mix(vec3(0.5 * (fs_Sine + 1.0)), vec3(164.0 / 255.0, 233.0 / 255.0, 1.0), t), 1.0);\r\n\r\n\r\n\t colorA = vec3(0.169, 0.729, 0.937);\r\n colorB = vec3(0.698,0.227, 0.827);\r\n out_Col = vec4(mix(colorB, colorA, fs_Sine / 5.f), 1.f);\r\n\r\n if (fs_Sine < 0.5f){\r\n\t colorA = vec3(0.169, 0.729, 0.937);\r\n\t colorB = vec3(123.f/255.f, 221.f/255.f, 228.f/255.f);\r\n\t out_Col = vec4(mix(colorB, colorA, fs_Sine / 10.0), 1.f);\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nuniform mat4 u_Model;\r\nuniform mat4 u_ModelInvTr;\r\nuniform mat4 u_ViewProj;\r\nin vec4 vs_Pos;\r\nin vec4 vs_Nor;\r\nin vec4 vs_Col;\r\nout vec4 fs_Nor;\r\nout vec4 fs_LightVec;\r\nout vec4 fs_Col;\r\n\r\nout vec4 fs_Pos;\r\nuniform float u_Time;\r\n\r\nconst vec4 lightPos = vec4(5, 5, 3, 1);\r\n\r\nfloat easeInOutCubic(float t) {\r\n    if ((t *= 2.0) < 1.0) {\r\n        return 0.5 * t * t * t;\r\n    } else {\r\n        return 0.5 * ((t -= 2.0) * t * t + 2.0);\r\n    }\r\n}\r\n\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n\r\n    mat3 invTranspose = mat3(u_ModelInvTr);\r\n    fs_Nor = vec4(invTranspose * vec3(vs_Nor), 0);\r\n    vec4 modelposition = u_Model * vs_Pos;\r\n\r\n  //   mat2 rot;\r\n  // rot[0][0] =cos(radians(-45.0 * u_Time / 1000.f));\r\n  // rot[0][1] =sin(radians(-45.0 * u_Time / 1000.f));\r\n  // rot[1][0] =-sin(radians(-45.0 * u_Time / 1000.f));\r\n  // rot[1][1] =cos(radians(-45.0 * u_Time / 1000.f));\r\n  // modelposition.xz *= rot;\r\n  // modelposition.yz *= rot;\r\n\r\n  float st = (sin(u_Time * 10.46/ 10000.0));\r\n\tfloat ct = easeInOutCubic(cos(u_Time * 10.46 / 10000.0));\r\n\tvec4 new_pos;\r\n\r\n\tnew_pos.x = modelposition.x*ct - modelposition.z*st;\r\n\tnew_pos.z = modelposition.x*st + modelposition.z*ct;\r\n\r\n\tnew_pos.y = modelposition.y;\r\n\tnew_pos.w = modelposition.w;\r\n\r\n    //modelposition.y += 0.05 * sin(u_Time / 1000.0 * 10.46);\r\n    // modelposition.x += 0.5 * sin(u_Time / 1000.0 * 10.46);\r\n    //\r\n     if (modelposition.y <= 0.5){\r\n       new_pos.y *= 0.2 * sin(u_Time / 1000.0 * 5.23);\r\n     }\r\n    fs_LightVec = lightPos - new_pos;\r\n\r\n    gl_Position = u_ViewProj * new_pos;\r\n}\r\n"

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nprecision highp float;\r\n\r\nuniform vec4 u_Color;\r\n\r\n\r\nin vec4 fs_Nor;\r\nin vec4 fs_LightVec;\r\nin vec4 fs_Col;\r\n\r\nuniform float u_Time;\r\n\r\n\r\nout vec4 out_Col;\r\n\r\nvoid main()\r\n{\r\n\r\n        vec4 diffuseColor = vec4(0.0, 0.0, 1.0, 1.0);\r\n\r\n\r\n        float diffuseTerm = dot(normalize(fs_Nor), normalize(fs_LightVec));\r\n\r\n        diffuseTerm = clamp(diffuseTerm, 0.0, 1.0);\r\n\r\n        float ambientTerm = 0.3;\r\n        float lightIntensity = diffuseTerm + ambientTerm;\r\n\r\n\r\n        out_Col = vec4(diffuseColor.rgb * lightIntensity, diffuseColor.a);\r\n        out_Col = diffuseColor + fs_Nor * 1.2;\r\n        if (out_Col.g > 0.3 && out_Col.b < 0.85){\r\n          out_Col = vec4(1.0, 0.0, 1.0, 1.0);\r\n        }\r\n\r\n        if (mod(u_Time, 10.0) == 0.0){\r\n          out_Col = vec4(1.0, 0.0, 1.0, 1.0);\r\n        }\r\n        if (mod(u_Time, 15.0) == 0.0){\r\n          out_Col = vec4(0.0, 1.0, 1.0, 1.0);\r\n        }\r\n}\r\n"

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat noise(vec2 p) {\r\n\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n  //out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);\r\n  vec2 uv = (fs_Pos);\r\n  float intensity = 0.8;\r\n\r\n    //Create the stacked layers\r\n\r\n    //so what this is doing is creating offset layers\r\n    //and the height of each section follows a cosin curve\r\n    //ok sweet\r\n\tfor (float inc = 1.0; inc < 25.0; inc++) {\r\n\r\n\t\tfloat fi = inc;\r\n\r\n\t\tfloat s = floor(5.0*(uv.x)/fi + 50.0*fi + u_Time / 1000.0);\r\n\r\n        float yLimit = noise(vec2(s));\r\n        yLimit *= fi/95.0;\r\n        yLimit -= 0.04*fi;\r\n        yLimit += 0.125 * cos(uv.x*5.0 + u_Time / 1000.0 + fi/9.0);\r\n       \tyLimit += 0.8;\r\n\r\n\t\tif (uv.y < yLimit) {\r\n\t\t\tintensity = inc/10.0;\r\n\t\t}\r\n\t}\r\n\r\n  float col1 = mix(intensity * uv.x * 0.8 + 0.5, 0.0, 01.1);\r\n\r\n\t//Set the final color\r\n\tout_Col = vec4(vec3(col1, intensity*uv.y * 0.8 + 0.9, 0.7), 1.0 );\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat smoothedge(float v) {\r\n    return smoothstep(0.0, 1.0 / u_Dimensions.x, v);\r\n}\r\n\r\nfloat circle(vec2 p, float radius) {\r\n  return length(p) - radius;\r\n}\r\n\r\nfloat rect(vec2 p, vec2 size) {\r\n  vec2 d = abs(p) - size;\r\n  return min(max(d.x, d.y), 0.0) + length(max(d,0.0));\r\n}\r\n\r\nfloat roundRect(vec2 p, vec2 size, float radius) {\r\n  vec2 d = abs(p) - size;\r\n  return min(max(d.x, d.y), 0.0) + length(max(d,0.0))- radius;\r\n}\r\n\r\nfloat ring(vec2 p, float radius, float width) {\r\n  return abs(length(p) - radius * 0.5) - width;\r\n}\r\n\r\nfloat hexagon(vec2 p, float radius) {\r\n    vec2 q = abs(p);\r\n    return max(abs(q.y), q.x * 0.866025 + q.y * 0.5) - radius;\r\n}\r\n\r\nfloat triangle(vec2 p, float size) {\r\n    vec2 q = abs(p);\r\n    return max(q.x * 0.866025 + p.y * 0.5, -p.y * 0.5) - size * 0.5;\r\n}\r\n\r\nfloat ellipse(vec2 p, vec2 r, float s) {\r\n    return (length(p / r) - s);\r\n}\r\n\r\nfloat capsule(vec2 p, vec2 a, vec2 b, float r) {\r\n    vec2 pa = p - a, ba = b - a;\r\n    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\r\n    return length( pa - ba*h ) - r;\r\n}\r\n\r\n//http://thndl.com/square-shaped-shaders.html\r\nfloat polygon(vec2 p, int vertices, float size) {\r\n    float a = atan(p.x, p.y) + 0.2;\r\n    float b = 6.28319 / float(vertices);\r\n    return cos(floor(0.5 + a / b) * b - a) * length(p) - size;\r\n}\r\n\r\nfloat ground(){\r\n    vec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n    float d = 1.0;\r\n    d = min(d, rect(st - vec2(0.5, 0.15), vec2(0.9, 0.20)));\r\n    return d;\r\n}\r\n\r\nfloat fork(){\r\n    vec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n    float d = 1.0;\r\n\r\n    d = min(d, rect(st - vec2(0.170,0.450), vec2(0.005, 0.20)));\r\n    d = min(d, rect(st - vec2(0.160,0.650), vec2(0.055, 0.005)));\r\n    d = min(d, rect(st - vec2(0.210,0.725), vec2(0.005, 0.08)));\r\n    d = min(d, rect(st - vec2(0.110,0.750), vec2(0.005, 0.10)));\r\n\r\n    //thingy 2\r\n\r\n    d = min(d, rect(st - vec2(0.380,0.450), vec2(0.005, 0.120)));\r\n    d = min(d, rect(st - vec2(0.370,0.570), vec2(0.045, 0.005)));\r\n    d = min(d, rect(st - vec2(0.410,0.630), vec2(0.005, 0.06)));\r\n    d = min(d, rect(st - vec2(0.330,0.67), vec2(0.005, 0.10)));\r\n\r\n    //thingy 3\r\n\r\n    d = min(d, rect(st - vec2(0.610,0.4370), vec2(0.005, 0.230)));\r\n    d = min(d, rect(st - vec2(0.600,0.670), vec2(0.045, 0.005)));\r\n    d = min(d, rect(st - vec2(0.640,0.730), vec2(0.005, 0.06)));\r\n    d = min(d, rect(st - vec2(0.560,0.750), vec2(0.005, 0.08)));\r\n\r\n    //thingy 4\r\n    d = min(d, rect(st - vec2(0.850,0.360), vec2(0.005, 0.230)));\r\n    d = min(d, rect(st - vec2(0.840,0.590), vec2(0.085, 0.008)));\r\n    d = min(d, rect(st - vec2(0.920,0.790), vec2(0.005, 0.2)));\r\n    d = min(d, rect(st - vec2(0.760,0.730), vec2(0.005, 0.14)));\r\n\r\n    //thingy 5\r\n    d = min(d, rect(st - vec2(0.250,0.470), vec2(0.003, 0.070)));\r\n    d = min(d, rect(st - vec2(0.2450,0.540), vec2(0.035, 0.003)));\r\n    d = min(d, rect(st - vec2(0.2150,0.5800), vec2(0.005, 0.04)));\r\n    d = min(d, rect(st - vec2(0.275,0.620), vec2(0.005, 0.08)));\r\n    return d;\r\n}\r\n\r\nfloat shadow(){\r\n\r\n    float d = 1.0;\r\n    vec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\r\n    d = min(d, capsule(st - vec2(0.135,0.485), vec2(-0.380 + cos(u_Time / 1000.0),-0.390), vec2(0.030,-0.240), 0.01));\r\n    d = min(d, capsule(st - vec2(0.570,0.450), vec2(-0.290 + cos(u_Time / 1000.0),-0.450), vec2(0.030,-0.240), 0.01));\r\n    d = min(d, capsule(st - vec2(0.820,0.380), vec2(-0.260 + cos(u_Time / 1000.0),-0.470), vec2(0.030,-0.240), 0.01));\r\n    d = min(d, capsule(st - vec2(0.350,0.580), vec2(-0.190 + cos(u_Time / 1000.0),-0.330), vec2(0.030,-0.240), 0.01));\r\n\r\n\r\n    return d;\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n\tvec2 st = gl_FragCoord.xy/u_Dimensions.xy;\r\n\r\n\t    float d = 1.0;\r\n\t    float ground = ground();\r\n\t    float shadow = shadow();\r\n\t    float fork = fork();\r\n\t    vec3 color;\r\n\r\n\t    float c = 0.0;\r\n\r\n\t    if (ground < d){\r\n\t        //d = ground;\r\n\t        c = ground;\r\n\t        //color = vec3((vec3(1.000,0.828,0.809) - smoothedge(d)));\r\n\t    }\r\n\r\n\t    if (fork <= d){\r\n\t        d = fork;\r\n\t        c = fork;\r\n\t        color = vec3((vec3(0.472,0.478,0.560) - smoothedge(d)));\r\n\t        color = mix(color, vec3(0.0), st.x / 100.0);\r\n\t    }\r\n\r\n\t    if (shadow <= d){\r\n\t        d = shadow;\r\n\t        c = shadow;\r\n\t        color = vec3((vec3(0.182,0.198,0.285) - smoothedge(d)));\r\n\t    }\r\n\r\n\r\n\t    if (color.r < 0.01 && color.g < 0.01 && st.y > 0.4){\r\n\t        d = 1.0;\r\n\t        color = vec3((mix( vec3(1.000,0.705,0.037), vec3(1.000,0.735,0.184),  cos(st.x * 10.460 * u_Time / 1000.0) / 1.676)));\r\n\r\n\t\t\t\t\tif (cos(u_Time / 1000.0 * 5.23) <= 0.00){\r\n\r\n\t\t\t\t\t\tcolor = vec3(1.0, 0.4, 1.0);\r\n\t\t\t\t\t}\r\n\t    }\r\n\t    if (color.r < 0.01 && color.g < 0.01 && st.y <= 0.4){\r\n\t        d = 1.0;\r\n\t        color = vec3((vec3(1.000, 1.0, 1.0)));\r\n\t    }\r\n\r\n\t    if (st.x > 0.076 && st.x < 0.25 && st.y > 0.86 && st.y < 0.98){\r\n\r\n\t        color = vec3((vec3(1.000, 1.0, 1.0)));\r\n\r\n\t    }\r\n\r\n\t//Set the final color\r\n\tout_Col = vec4(color, 1.0);\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\n#define p0 0.9, 0.2, 0.9,  0.9, 0.2, 0.9,  0.9, 0.2, 0.7,  0.7, 0.53, 0.77\r\n\r\nconst float numParticles = 7.;\r\nconst float numRings = 6.;\r\nconst float offsetMult = 0.1;\r\n float tau = 3.23813;\r\n\r\nvec3 palette( in float t, in float a0, in float a1, in float a2, in float b0, in float b1, in float b2,\r\n              in float c0, in float c1, in float c2,in float d0, in float d1, in float d2)\r\n{\r\n\tif (u_Time >= 190000.0){\r\n\t\t  return vec3(0.2, 0.9, 0.2) + vec3(0.3, 0.9, 0.7)*cos(2.3*(vec3(0.8, 0.9, 0.7)*t+vec3(mix(0.1, 0.8, cos(5.23* u_Time / 10000.0)),0.8,0.89)) );\r\n\t}\r\n    return vec3(0.2, 0.2, 0.9) + vec3(0.9, 0.2, 0.7)*cos(2.3*(vec3(0.8, 0.9, 0.7)*t+vec3(mix(0.1, 0.3, sin(5.23* u_Time / 100000.0)),0.4,0.89)) );\r\n}\r\n\r\nvec3 particleColor(vec2 uv, float radius, float offset, float periodOffset)\r\n{\r\n    vec3 color = palette(.4 + offset / 4., p0);\r\n    uv = uv / pow(periodOffset, .75) * abs(sin(periodOffset * u_Time * 5.23 / 10000.0))+ abs(sin(periodOffset + 5.23 * u_Time / 10000.0));\r\n    vec2 pos = vec2(abs(cos(offset * offsetMult + u_Time / 1000.0 + periodOffset)),\r\n        \t\tabs(sin(offset * offsetMult + u_Time * 10.46 / 10000.0 * 6.0 + periodOffset * tau * sin(u_Time * 10.46 / 10000.0))));\r\n\r\n    float dist = radius / distance(uv, pos);\r\n    return color * pow(dist, 1.4) * (sin(5.23 * u_Time / 10000.0) * 8.95 + 2.50);\r\n}\r\n\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 uv = (2.0 * gl_FragCoord.xy - u_Dimensions.xy) / u_Dimensions.y;\r\n\t uv *= 2.45;\r\n\r\n\t out_Col = vec4(0.0, 0.0, 0.0, 1.0);\r\n\r\n\t for (float n = 0.0; n <= numRings; n++)\r\n\t {\r\n\t\t\t for (float i = 0.0; i <= numParticles; i++) {\r\n\t\t\t\t out_Col.rgb += particleColor(uv, 0.02, i / numParticles, n / 2.0);\r\n\t\t }\r\n\t }\r\n\r\n}\r\n"

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nmat2 rotate2d(float angle){\r\n    return mat2(cos(angle),-sin(angle),sin(angle),sin(angle));\r\n}\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 uv = gl_FragCoord.xy / u_Dimensions.xy;\r\n\r\n\r\n\tfloat bg = (cos(uv.x * 100.0 * sin(u_Time / 1000.0 * 5.23)) + sin((uv.y))) * 0.2;\r\n\r\n\tvec2 p = uv/2.38*cos(10.46 * u_Time / 1000.0)/ u_Time / 1000.0 - bg/0.1;\r\n    vec2 v = rotate2d(u_Time / 1000.0 + 5.0) * uv/0.1;\r\n    p *= vec2(v.x , v.y);\r\n    vec2 p2 = uv*2.0 - 1.0;\r\n\r\n    vec2 p3 = uv*2.0 - 1.0;\r\n\r\n\r\n\t\tp *= 65.0;\r\n    p2 *= 15.0;\r\n    p3 *= 25.0;\r\n\tvec2 sfunc = vec2(p.x, p.y);\r\n    vec2 sfunc2 = vec2(p2.x, p2.x);\r\n    vec2 sfunc3 = vec2(p3.x, p3.y);\r\n\t\tsfunc.y /= 0.4;\r\n    sfunc2.y /= 0.1;\r\n    sfunc3.y /= 0.2;\r\n    p *= vec2(v.x, v.y);\r\n    p3 *= vec2(v.x, v.y);\r\n\r\n\tvec3 c = vec3(abs(sfunc.y * abs(sin(u_Time / 1000.0 * 5.23))));\r\n    vec3 c2 = vec3(abs(sfunc2.y * sin(u_Time / 1000.0 * 5.23)));\r\n    vec3 c3 = vec3(abs(sfunc3.y* abs(cos(u_Time / 1000.0 * 5.23))));\r\n\tc = pow(c, vec3(-0.9));\r\n    c2 = pow(c2, vec3(-0.5));\r\n    c3 = pow(c3, vec3(-0.7));\r\n\tc *= vec3(0.9,0.25,1.0);\r\n    c2 *= vec3(0.3,0.85,1.0);\r\n    c3 *= vec3(0.7,0.15,1.0);\r\n\r\n\tout_Col = vec4( c2 + c3,1.0);\r\nif (u_Time > 204000.0){\r\n\tout_Col = vec4( c + c2 + c3,1.0);\r\n}\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nuniform vec3 u_Eye, u_Ref, u_Up;\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat noise(vec2 p) {\r\n\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n  //out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);\r\n  vec2 uv = (fs_Pos);\r\n  float intensity = 0.0;\r\n\tvec2 iResolution = u_Dimensions;\r\n\tvec2 st = gl_FragCoord.xy / u_Dimensions;\r\n\r\n    //Create the stacked layers\r\n\r\n    //so what this is doing is creating offset layers\r\n    //and the height of each section follows a cosin curve\r\n    //ok sweet\r\n\tfor (float inc = 1.0; inc < 45.0; inc++) {\r\n\r\n\t\tfloat fi = inc;\r\n\r\n\t\tfloat s = floor(60.0*(uv.x)/fi + 60.0*fi + u_Time / 1000.0 * 5.23);\r\n\r\n        float yLimit = noise(vec2(s));\r\n        yLimit *= fi/65.0;\r\n        yLimit -= 0.07*fi;\r\n        yLimit += 0.125 * cos(uv.x* 10.46 + u_Time / 1000.0 + fi/9.0);\r\n       \tyLimit += 0.8;\r\n\r\n\t\tif (uv.y < yLimit) {\r\n\t\t\tintensity = inc/03.0;\r\n\t\t}\r\n\t}\r\n\r\n  float col1 = mix(intensity * uv.x * 0.9 + 0.5, 0.8, 01.1);\r\n//u_Time > 211000.0 &&\r\n\tif (u_Time > 211000.0 && st.y > 0.7){\r\n\t\t\tout_Col = vec4(vec3(col1, intensity*uv.y * 0.9 + 0.6, 0.9), 1.0 );\r\n\t\t\treturn;\r\n\t}\r\n\t//u_Time > 213000.0 &&\r\n\telse if ( u_Time > 213000.0 && st.y < 0.35){\r\n\t\t\tout_Col = vec4(vec3(col1, intensity*uv.y * 0.2 + 0.8, 0.2), 1.0 );\r\n\t\t\treturn;\r\n\t}\r\n\r\n\t//Set the final color\r\n\tout_Col = vec4(vec3(col1, intensity*uv.y * 0.9 + 0.5, 0.8), 1.0 );\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nmat2 rotate2d(float angle){\r\n    return mat2(cos(angle),-sin(angle),sin(angle),sin(angle));\r\n}\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 uv = gl_FragCoord.xy / u_Dimensions.xy;\r\n\r\n\tfloat bg = (cos(uv.x * 1000.0 * sin(u_Time / 1000.0 * 5.23)) + sin((uv.x))) * 0.8;\r\n\tvec2 p = uv/2.38*cos(10.46 * u_Time / 1000.0)/ u_Time / 1000.0 - bg/0.1;\r\n    vec2 v = rotate2d(u_Time / 1000.0 + 5.0) * uv/0.1;\r\n    p *= vec2(v.x , v.y);\r\n    vec2 p2 = uv*2.0 - 1.0;\r\n    vec2 p3 = uv*2.0 - 1.0;\r\n\r\n\r\n\t\tp *= 65.0;\r\n    p2 *= 15.0;\r\n    p3 *= 25.0;\r\n\tvec2 sfunc = vec2(p.x, p.y);\r\n    vec2 sfunc2 = vec2(p2.x, p2.x);\r\n    vec2 sfunc3 = vec2(p3.x, p3.y);\r\n\t\tsfunc.y /= 0.7;\r\n    sfunc2.y /= 0.02;\r\n    sfunc3.y /= 0.6;\r\n    p *= vec2(v.x, v.y);\r\n    p3 *= vec2(v.x, v.y);\r\n\r\n\tvec3 c = vec3(abs((sfunc.y) * abs(sin(u_Time / 1000.0 * 5.23))));\r\n    vec3 c2 = vec3(abs(sfunc2.y * sin(u_Time / 1000.0 * 5.23)));\r\n    vec3 c3 = vec3(abs(sfunc3.y* abs(cos(u_Time / 1000.0 * 5.23))));\r\n\tc = pow(c, vec3(-0.9));\r\n    c2 = pow(c2, vec3(-0.5));\r\n    c3 = pow(c3, vec3(-0.7));\r\n\t\tc *= vec3(0.9,0.25,1.0);\r\n    c2 *= vec3(0.3, sin(u_Time / 1000.0 * 0.95),1.0);\r\n    c3 *= vec3(0.7,0.15,1.0);\r\n\r\n\t\tif (sin(u_Time / 1000.0 * 5.23) < 0.0){\r\n\t\tout_Col = vec4(c2 + c3,1.0);\r\n\t\treturn;\r\n\t\t}\r\n\r\n\r\n\tout_Col = vec4(c + c2 + c3,1.0);\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n// The vertex shader used to render the background of the scene\r\n\r\nin vec4 vs_Pos;\r\nout vec2 fs_Pos;\r\n\r\nvoid main() {\r\n  fs_Pos = vs_Pos.xy;\r\n  gl_Position = vs_Pos;\r\n}\r\n"

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n\r\nuniform vec2 u_Dimensions;\r\nuniform float u_Time;\r\n\r\nin vec2 fs_Pos;\r\nout vec4 out_Col;\r\n\r\nfloat noise(vec2 p) {\r\n\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);\r\n}\r\n\r\n//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6\r\n\r\n\r\nvoid main() {\r\n  //out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);\r\n  vec2 uv = (fs_Pos);\r\n  float intensity = 0.8;\r\n\r\n    //Create the stacked layers\r\n\r\n    //so what this is doing is creating offset layers\r\n    //and the height of each section follows a cosin curve\r\n    //ok sweet\r\n\tfor (float inc = 1.0; inc < 25.0; inc++) {\r\n\r\n\t\tfloat fi = inc;\r\n\r\n\t\tfloat s = floor(5.0*(uv.x)/fi + 50.0*fi + u_Time / 1000.0);\r\n\r\n        float yLimit = noise(vec2(s));\r\n        yLimit *= fi/95.0;\r\n        yLimit -= 0.04*fi;\r\n        yLimit += 0.125 * cos(uv.x*5.0 + u_Time / 1000.0 + fi/9.0);\r\n       \tyLimit += 0.8;\r\n\r\n\t\tif (uv.y < yLimit) {\r\n\t\t\tintensity = inc/10.0;\r\n\t\t}\r\n\t}\r\n\r\n  float col1 = mix(intensity * uv.x * 0.8 + 0.5, 0.0, 01.1);\r\n\r\n\t//Set the final color\r\n\tout_Col = vec4(vec3(col1, intensity*uv.y * 0.1 + 0.29, 0.83), 1.0 );\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map