I automated the process of vacuuming a chamber through developing
a LabVIEW program to pump the vacuum chamber using a vacuum pump, 
stepper motor, and throttle valve. The program would initiate the pump 
and monitor the pressure and temperature while doing so.


Automating this process would eliminate approximately 0.5 hour of 
operator's time wasted daily on pumping the vacuum chamber.

Additionally, I refactored a large-scale laser capturing LabVIEW application
to make it compatible with a variety of cameras used in the laboratory.
To do this modification, I needed to fully understand the source code,
identify the places where each camera configurations were being set,
and refactor it into a more generic setup.

By doing so and utilizing the new camera drivers, I was able to make
the initialization process significantly more generic, allowing the 
operators to plug and play with newer camera models.
