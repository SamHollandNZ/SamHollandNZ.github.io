---
title: "MIDI fader box"
headline: "Eight 100 mm faders as a USB-MIDI device"
tags: ["Electrical", "Mechanical", "Software"]
summary: "Eight 100 mm faders read by a high-resolution ADC and sent to the computer as a USB-MIDI device."
order: 12
featured: false
status: "Built, 2023"
image: /assets/img/midi-fader-box/hero.jpg
image_alt: "Yellow 3D printed fader box with eight blue fader caps and a small display"
---

## Problem

A follow-on from my [custom MIDI controller](../midi-controller/): a box of
eight long faders for controlling music software in real time.

## Design

Eight 100 mm faders feed a high-resolution eight-channel ADC, read by a
Raspberry Pi Pico microcontroller. A small OLED display lets you set which MIDI
channels the faders send on. The box enumerates as a USB-MIDI device, so it
needs no driver. It has a custom circuit board in a 3D printed case.

## Filtering the faders

The unexpectedly hard part was filtering. MIDI output has to stay quiet when a
fader is not being moved, or the software sees a constant stream of tiny
changes. But the faders still have to feel responsive, with low latency, when
played live.

## Build

![Grey 3D printed version of the case with eight fader slots]({{ '/assets/img/midi-fader-box/case.jpg' | relative_url }})
