---
title: "Custom MIDI controller"
headline: "Two wheels and a joystick in an aluminium box"
tags: ["Electrical", "Mechanical", "Software"]
summary: "A MIDI controller for music production, with two wheels and a joystick mapped to a virtual instrument."
order: 11
featured: false
status: "Built, 2022"
image: /assets/img/midi-controller/hero.jpg
image_alt: "Aluminium MIDI controller with two wheels and a joystick beside a keyboard"
---

## Problem

I built this controller for my dad, for music production. Its two wheels and
joystick can be mapped to change the sound of a virtual instrument.

## Design

It is built around an ATmega328 microcontroller with an additional
high-resolution ADC, in an aluminium project box, and connects to the computer
over standard 5-pin MIDI.

## Calibration and smoothing

The main challenges were smoothing the analogue inputs and calibrating the
controller, so that the full mechanical travel of each control mapped onto the
full range in the software.
