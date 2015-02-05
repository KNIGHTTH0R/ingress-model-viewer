var constants = {
  teamColors: {
    RESISTANCE: vec4.fromValues(0, 0.7607843137254902, 1, 1.0),
    ENLIGHTENED: vec4.fromValues(0.1568627450980392, 0.9568627450980393, 0.1568627450980392, 1.0),
    NEUTRAL: vec4.fromValues(0.9764705882352941, 0.9764705882352941, 0.9764705882352941, 1.0),
    LOKI: vec4.fromValues(1, 0.1568627450980392, 0.1568627450980392, 1.0)
  },
  qualityColors: {
    EXTREMELY_RARE: vec4.fromValues(0.9803921568627451, 0.39215686274509803, 0.39215686274509803, 1.0),
    VERY_RARE: vec4.fromValues(0.9568627450980393, 0.5215686274509804, 0.9254901960784314, 1.0),
    MORE_RARE: vec4.fromValues(0.7647058823529411, 0, 1, 1.0),
    RARE: vec4.fromValues(0.6666666666666666, 0.5372549019607843, 0.984313725490196, 1.0),
    LESS_COMMON: vec4.fromValues(0.45098039215686275, 0.6588235294117647, 1, 1.0),
    COMMON: vec4.fromValues(0.5098039215686274, 0.9529411764705882, 0.7058823529411765, 1.0),
    VERY_COMMON: vec4.fromValues(0.6980392156862745, 0.6980392156862745, 0.6980392156862745, 1.0),
    L1: vec4.fromValues(0.996078431372549, 0.807843137254902, 0.35294117647058826, 1.0),
    L2: vec4.fromValues(1, 0.6509803921568628, 0.18823529411764706, 1.0),
    L3: vec4.fromValues(1, 0.45098039215686275, 0.08235294117647059, 1.0),
    L4: vec4.fromValues(0.8941176470588236, 0, 0, 1.0),
    L5: vec4.fromValues(0.9921568627450981, 0.1607843137254902, 0.5725490196078431, 1.0),
    L6: vec4.fromValues(0.9215686274509803, 0.14901960784313725, 0.803921568627451, 1.0),
    L7: vec4.fromValues(0.7568627450980392, 0.1411764705882353, 0.8784313725490196, 1.0),
    L8: vec4.fromValues(0.5882352941176471, 0.15294117647058825, 0.9568627450980393, 1.0)
  },
  anomalyColors: {
    1: vec4.fromValues(1.0, 0.5686274509803921, 0.21176470588235294, 1.0),
    2: vec4.fromValues(1.0, 0.3215686274509804, 0.9058823529411765, 1.0),
    3: vec4.fromValues(0.6196078431372549, 0.35294117647058826, 1.0, 1.0),
    4: vec4.fromValues(0.8431372549019608, 0.27058823529411763, 0.27058823529411763, 1.0),
    5: vec4.fromValues(1.0, 0.9450980392156862, 0.0, 1.0),
    6: vec4.fromValues(0.6509803921568628, 1.0, 0.9019607843137255, 1.0),
    7: vec4.fromValues(0.5725490196078431, 0.5803921568627451, 0.592156862745098, 1.0)
  },
  artifactColors: {
    Helios: {
      RedGlow: vec4.fromValues(0.92, 0.51, 0.14, 1.0),
      PurpleGlow: vec4.fromValues(1.0, 0.87, 0.55, 1.0),
      TargetGlow: vec4.fromValues(1.0, 0.72, 0.0, 1.0)
    },
    Amar: {
      TargetGlow: vec4.fromValues(0.62, 0.22, 0.62, 1.0),
      RedGlow: vec4.fromValues(0.79, 0.11, 0.49, 1.0),
      PurpleGlow: vec4.fromValues(0.58, 0.17, 1.0, 1.0)
    },
    Jarvis: {
      TargetGlow: vec4.fromValues(0.62, 0.22, 0.62, 1.0),
      RedGlow: vec4.fromValues(0.79, 0.11, 0.49, 1.0),
      PurpleGlow: vec4.fromValues(0.58, 0.17, 1.0, 1.0)
    }
  },
  xmColors: {
    coreGlow: vec4.fromValues(0.92, 0.7, 0.89, 1.0),
    coreGlowAlt: vec4.fromValues(0.6, 0.4, 0.6, 0.8)
  }
};

imv.Constants = constants;