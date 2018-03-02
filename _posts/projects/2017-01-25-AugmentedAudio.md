---
layout: experience
title: Augmented Audio
company: Academic
duration: Jan 2017 - Nov 2017
link: https://github.com/AriaPahlavan/ariapahlavan.github.io
category: projects
---
Augmented Audio project is my senior design project. It is a wearable device that detects objects in front of a visually-impaired user 
and displays them as spatialized audio cues. These audio cues allow the user to hear a noise for 
each object in their vicinity. Additionally, these cues are calibrated for each object’s location, 
so that the user can tell the difference between an object that is directly in front of them 
versus an object that is further away and towards their left.

We detect objects in the current scene with the help of Google’s Tensorflow Object Detection API. 
We utilized this API alongside a frozen Single Shot Multibox Detector model (with Mobilenet) 
pretrained on the COCO dataset. This gave us bounding boxes around detected objects from which 
we found the center coordinates of these boxes.

To obtain the distance of these objects from the camera, we utilized the depth sensing API 
provided with our ZED camera’s SDK to get the z coordinates. For every frame, the (x,y,z) coordinates are appropriately calibrated and passed to the Unity 
game engine. The Superpowered Audio Spatializer plugin generates 3D audio for each virtual 
object and sends an audio signal to the headphones.