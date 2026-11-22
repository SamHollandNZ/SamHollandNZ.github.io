---
title: "Micropower gamma spectrometer"
headline: "Micropower gamma spectrometer"
tags: ["Electrical", "Software"]
summary: "A micropower gamma spectrometer that measures the energy of each gamma ray, designed to fit into a watch."
order: 1
featured: true
status: "Prototype built; software and hardware debugging under way"
image: /assets/img/gamma-spectrometer-watch/hero.jpg
image_alt: "Spectrometer prototype in the heated chamber of a 3D printer during thermal calibration"
---

## Brief

This is the successor to my [Geiger counter watch](../geiger-counter-watch/)
project. Unlike a Geiger counter, which only counts the number of particles it
detects, a gamma spectrometer also measures the energy of each one. This gives
a more accurate dose figure and allows specific isotopes to be identified from
their energy spectra.

The goal is to make a spectrometer that is both low-powered and compact enough 
to fit in a watch, with better battery life, better sensitivity and a smaller
size than the previous geiger counter watch.

## Design

The spectrometer is based around a 10 × 10 × 9 mm *cerium-doped gadolinium
aluminium gallium garnet* (GAGG:Ce) scintillator crystal, coupled to a 6 × 6 mm
silicon photomultiplier (SiPM). When a gamma ray hits the crystal, the crystal
emits a small amount of light, and this flash is picked up by the SiPM.
Importantly, the brightness of the flash is proportional to the energy of the
incident gamma ray, which makes the device energy-sensitive.

![Cut-away render of a small black PCB labelled SiPM breakout, with a black housing opened to show a yellow-green crystal wrapped in white layers, sitting on the SiPM]({{ '/assets/img/gamma-spectrometer-watch/sipm-breakout-render.jpg' | relative_url }})

<p class="caption">Cutaway render of the SiPM breakout board, it shows the GAGG:Ce crystal (green) on top of the above the SiPM. with its PTFE reflector (white) and light-proof black polycarbonate cap. a mall foam pad (teal) presses the crystal against the sensor.</p>

The rest of the design is based around a low-power microcontroller and the same
low-power Sharp memory display as the previous watch project.

## Learnings

One of the main challenges in this project has been calibrating the detector.
Unlike a Geiger-Müller tube, which comes with a rough calibration figure in its
datasheet, the stack-up of crystal, coupling medium and SiPM needs to be
characterised before real measurements can be taken. A key difficulty is that
the SiPM has a large temperature coefficient, so its gain drifts with
temperature.

The photo shows the current prototype running in the heated chamber of a 3D
printer to measure its temperature coefficient. A bundle of thoriated tungsten
welding electrodes is used as a test source for the calibration.

![Spectrometer prototype in the heated chamber of a 3D printer during thermal calibration]({{ '/assets/img/gamma-spectrometer-watch/hero.jpg' | relative_url }})

<p class="caption">The prototype in the heated chamber of a 3D printer, during thermal calibration.</p>
