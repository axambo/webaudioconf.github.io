webpackJsonp([0xc06ed3575f0d],{440:function(e,a){e.exports={pathContext:{abstract:"We've been developing a virtual guitar tube amp designer able to emulate each stage of a tube guitar amp, allowing multiple configurations inspired by existing hardware amps. We also created or adapted a large set of FX pedals. Finally, we wrote a pedal board host application that mimic a real guitarist pedal board, that can assemble in a graph the amp simulators, the FX pedals but can also accept virtual instruments.\nThese applications use a new open plugin standard we proposed with other researchers: the pedal board is a host and the amps, as well as FX pedals and instruments are plugins. These plugins are identified by their unique URI and located on local or remote repositories. The host application, the pedal board, scans these repositories and gets the plugin metadata. Through the pedal board GUI, it is now possible to create plugin instances by drag and dropping thumbnails to the main pedal board area. When this occurs, the Plugin's code and assets are then loaded dynamically and a plugin instance is returned as a JavaScript objet. Then, this object can be used to get the \"audio processor part of the plugin\" and connect it to the WebAudio graph, or to get its the plugin GUI as a unique HTML container element.\n\nPlugins are from multiple origins: (1) written in pure JavaScript / WebAudio -we made a dozen of such plugins, including the guitar tube amp simulators, and ported some others created by other developers (such as a general midi synth, etc), (2) WebAudioModules (VST/JUCE native plugins etc. ported to WebAssembly/AudioWorklet) or (3) written in FAUST, a popular DSL for writing DSP code, here again in WebAssembly/AudioWorklet. Other sources / importers are planned (MAX DSP/Pure Data etc.). Most plugins are controllable using midi controllers.\n\nWe did blind tests with professional guitarists. We made them play on our WebAudio simulations and also on native simulations of similar amplifiers. The results show that we are up to native simulations in terms of sound quality, timbre, dynamics, and more generally of playing comfort. For example, our simulations have been much better evaluated than those of GarageBand. The latency on Mac OS is comparable to the best native apps, and not felt by the testers.\n\nHere are some screenshots: guitar tube amp designer : https://imgur.com/a/HsT7G58, pedalboard webapp: https://imgur.com/a/5iZzvI7, online plugin tester: https://imgur.com/a/N08H7YT, online repository tester: https://imgur.com/a/eqr2o1d\n\nVideos: guitar amp simulators: See it https://youtu.be/-NdMdJQx2Bw or https://www.youtube.com/watch?v=PiOD7n3g-Qs, pedalboard: https://www.youtube.com/watch?v=elbjh6tBK6U&t=71s",authors:[{name:"Michel Buffa"},{name:"Jerome Lebrun"}],slug:"guitarists-will-be-happy-guitar-tube-amp-simulators-and-fx-pedal-in-a-virtual-pedal-board-and-more",title:"Guitarists will be happy: guitar tube amp simulators and FX pedal in a virtual pedal board, and more!",type:"demo"}}}});
//# sourceMappingURL=path---demos-and-posters-guitarists-will-be-happy-guitar-tube-amp-simulators-and-fx-pedal-in-a-virtual-pedal-board-and-more-350f1d05eecfe2a042aa.js.map