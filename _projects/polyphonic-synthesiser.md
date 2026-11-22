---
title: "Polyphonic synthesiser"
headline: "Eight analogue voices on 725 cm² of PCB"
tags: ["Electrical", "Software"]
summary: "An eight-voice analogue polyphonic synthesiser across two custom boards, run by a Raspberry Pi Pico 2."
order: 7
featured: true
status: "In progress since 2023"
image: /assets/img/polyphonic-synthesiser/hero.jpg
image_alt: "Front panel of the eight-voice synthesiser: MIDI sockets, OLED display, encoders and a keyboard of white keycaps"
---

## Problem

This is one of my largest and most complex projects so far. A polyphonic synthesiser
is hard because the analogue sound-generation circuit has to be built once for
every note the instrument can play at the same time. Eight voices means eight
copies of everything.

## Design

The instrument is split across two circuit boards with a combined area of
725 cm²:

- **Control board:** the keyboard, rotary encoders, OLED display and external
  connections.
- **Main board:** the eight analogue voices, the digital-to-analogue converters
  that control them, a Raspberry Pi Pico 2 and a low-noise analogue power
  supply.

The firmware is object-oriented C++. It is the most complex and modular
firmware I have written.

The power budget only just fits within what a standard USB-C connection can
supply without USB Power Delivery.

## What I learned

Designing a larger multi-board system, managing power for mixed analogue and
digital circuits, and structuring firmware for expandability with
object-oriented C++.
