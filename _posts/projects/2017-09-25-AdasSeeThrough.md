---
layout: experience
title: See-Through ADAS
company: Academic
duration: Sep 2017 - Present
link: https://github.com/AriaPahlavan/
category: projects
---
<p>
See-Through ADAS honors project is an autonomous driver assistance
system with stitched video feeds from the perspective of two cars, one
behind the other, with useful annotated information. The goal of the
this project is to improve situational awareness and efficiency of
drivers, so as to reduce driver mistakes on the roads. Our design will
accomplish this with object recognition, video stitching, and video
annotations.
</p>


<br>

<p>
I devised an object-tracking algorithm with 95% accuracy in a 30 minute
test drive by utilizing and training a convolutional neural net with a
mAP score of 74.7.
</p>


<br>

<p>
I implemented a linear-time greedy algorithm to minimize the delay
between two camera feeds to 5 milliseconds.
</p>

<br>

<p>
Our object recognition is done by a convolutional neural network model
(YOLOv3), and based on its results, we annotate the frames using the
OpenCV library on Python. The frame stitching is done using OpenCV
image processing and computer vision APIs, to perform Laplacian pyramid
blending.
</p>