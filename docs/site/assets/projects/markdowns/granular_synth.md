For the final project of my embedded systems laboratory class, my partner and I developed a portable granular synthesizer, which allows recording a snippet of audio and playing different parts of it at different times and frequencies.


I optimized drawing speed on LCD up to 4x through caching pixel attributes such as pixel color and pixel layer, in an WxH matrix, where W and H are the width and height of the LCD in pixels, respectively.


To be able to store a larger audio sample on the limited storage of the microcontroller, I increased sound-sampling size from 68KB to 120KB by compressing sampled audio inputs.
