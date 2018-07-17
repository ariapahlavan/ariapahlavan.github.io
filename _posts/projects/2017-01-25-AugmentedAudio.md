---
layout: experience
title: Augmented Audio
company: Academic
duration: Jan 2017 - Nov 2017
link: https://github.com/AriaPahlavan/ariapahlavan.github.io
category: projects
---
<p>
Augmented Audio project is my senior design project. It is a wearable device that detects objects in front of a visually-impaired user
and displays them as spatialized audio cues. These audio cues allow the user to hear a noise for 
each object in their vicinity.
</p>

<br>

<p>
We detect objects using Google’s Tensorflow Object Detection API, along with a frozen 
Single Shot Multibox Detector model (with Mobilenet) pretrained on the COCO dataset.
</p>

<br>

<p>
For every frame, the (x,y,z) coordinates are appropriately calibrated and passed to the Unity 
game engine. The Superpowered Audio Spatializer plugin generates 3D audio for each virtual 
object and sends an audio signal to the headphones.
</p>