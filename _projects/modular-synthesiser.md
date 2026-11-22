---
title: "Modular synthesiser"
headline: "Modular synthesiser, my longest-running project"
tags: ["Electrical"]
summary: "Analogue synthesiser modules on custom circuit boards: my own designs, and adaptations of designs from old magazine articles."
order: 8
featured: true
status: "Ongoing since 2018"
image: /assets/img/modular-synthesiser/hero.jpg
image_alt: "Four synthesiser modules standing on a desk, with silver, black and yellow front panels"
---

## Brief

A modular synthesiser is an analogue electronic instrument made of separate
modules that can be patched together in different ways to make different
sounds. Each module typically contains one analogue function, and modules are
built to the Eurorack standard, which specifies their physical size, power
supply connection, front-panel jacks and signal levels.

![The rack patched up: MIDI, two 3340 VCOs, a 3320 VCF, triple LFO, dual VCA and dual ADSR]({{ '/assets/img/modular-synthesiser/rack.jpg' | relative_url }})

<p class="caption">The full system as it is today: a MIDI module, two oscillators, a filter, three low-frequency oscillators, a voltage-controlled amplifier and an envelope generator.</p>

## Design and build

These modules were my first real introduction to PCB design and, later, to
analogue circuit design.

### Voltage-controlled oscillator, 2018

The first module I built was a voltage-controlled oscillator (VCO). The design
was an almost exact clone of the Digisound 80-2 VCO, originally published in
*Electronics Today International* (ETI) in February 1980.

The module is a single PCB attached at a right angle to the back of an
aluminium front panel. It was Eurorack-compatible in dimensions only: it was
designed to fit a surplus Eurocard chassis I had been given, and it ran on
±15 V rather than the Eurorack standard of ±12 V.

One of the tricky parts of a VCO for a modular synthesiser is that it needs an
exponential response to its control voltage. The standard is 1 V/octave, where
an octave is a doubling in frequency. This module uses a chip designed
specifically for synthesisers, the CEM3340. It was originally designed in the
late 1970s and went back into production in 2016, following rising demand for
analogue instruments. The CEM3340 has a built-in, temperature-compensated
exponential converter, which removes most of the complexity of matching and
thermally bonding a pair of transistors.

The module worked, but it needed a lot of fiddly hand soldering to connect the
front panel to the PCB. It was also the first PCB I ever designed and ordered.

### MIDI to CV module, 2018–2019

![Four synthesiser modules standing on a desk, with silver, black and yellow front panels]({{ '/assets/img/modular-synthesiser/hero.jpg' | relative_url }})

<p class="caption">The MIDI to CV module (left) and the first VCO (middle left), next to their newer versions (right).</p>

The second module I built was a Musical Instrument Digital Interface (MIDI) to
control voltage (CV) module. It lets a digital keyboard or a computer control
a modular synthesiser, outputting the analogue voltages needed for pitch, note
on and off, and velocity.

This module was mostly my own design, built around an Arduino Nano
(ATmega328P) microcontroller with an external DAC to generate the precise
analogue voltages.

The module has no controls and was built in the same way as the first VCO,
again Eurorack-compatible in dimensions only. It was the last module I built
in this style.

### Voltage-controlled filter, 2019

The third module I built, and the first in the style I have used ever since.
The voltage-controlled filter (VCF) is a 4-pole low-pass filter with a
24 dB/octave roll-off. Like the VCO, it has a 1 V/octave exponential response
to its control voltage. It was again based on a Digisound design published in
ETI, adapted to the standard Eurorack ±12 V supply, power connector and signal
levels.

The module is made from two PCBs: the rear board holds all of the circuitry,
and the front board is a front panel with no components. Like the VCO, it is
built around a reissued chip designed for analogue instruments, in this case
the CEM3320 VCF.

This was my first project built mostly from SMD parts. One issue was its
mechanical construction: the PCB flexed too much, so the knobs felt spongy and
gave a little when pressed. I fixed this in all later modules with a standoff
and screw.

### MIDI to CV module V2, 2022

![Three modules: a black MIDI module and two bare yellow PCB-panel modules]({{ '/assets/img/modular-synthesiser/modules.jpg' | relative_url }})

<p class="caption">The V2 MIDI module, with its blank PCB.</p>

The fourth module was an upgraded version of my original MIDI to CV module,
and it is the only digital module in my current system. I happened to build
it in the middle of the chip shortage, which shaped some of the design
decisions. I used the less common ATmega168, which is pin-compatible with the
ATmega328 but has half the memory, and I could not get the DAC in the right
package, so it ended up on a prototyping board attached to the back of the
module.

This project was a milestone for me: it was the first time I used a bare
microcontroller rather than a development board.

The module has eight fully configurable outputs: four analogue and four
digital. One challenge was fitting the firmware into the small
microcontroller.

It was also the last module I designed in EAGLE. I moved to KiCad for all
later designs after Autodesk's acquisition of EAGLE, when it became clear that
EAGLE was likely to be discontinued and moved to a subscription-only model.

### Triple LFO

The first module entirely of my own design was the triple low-frequency
oscillator (LFO). It is a bank of three low-frequency oscillators with
adjustable frequency and shape, adjustable between sawtooth, triangle and ramp
waveforms.

### VCO V2

A redesign of the original VCO module, made fully Eurorack-compatible and
built in the same way as the later modules.

## What I learned

This project is where I developed my PCB design skills and learned the basics
of analogue circuit design.
