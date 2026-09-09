---
title: Things You Should Know (Security Guide)
description: Practical security guidance for Quark owners — written in plain English, not jargon
navigation:
  title: Security Guide
  order: 8
---

# Things You Should Know

Quark keeps your files on hardware you own. That is not the same as "impossible to lose." This page is the short list
every owner should actually do.

None of this is scary. You have already done most of it for other important things in your life.

---

## Your master password

The vault — where Quark keeps passwords and other sensitive notes — is locked with a master password you choose. Quark
never stores that password anywhere. The password itself is what scrambles the vault, which is why nobody, us included,
can open it without you.

Unscrambling is deliberately slow. That sounds like a flaw and it is actually the whole trick: anyone guessing at your
password has to redo that slow work on every single guess, so a program that could otherwise try millions of passwords a
second gets dragged down to a handful. It turns "crack it over lunch" into "crack it over several lifetimes." (The
method is called Argon2id, if you ever want to read up on it.)

Be sensible here rather than paranoid. Quark sits in your house, on your own network, so the realistic risk is not a
stranger with a cracking rig. It is you forgetting the password. A phrase you will actually remember, written on a card
in your desk drawer, is a better plan than a thirty-character monster you lose in a week. If someone is already going
through your desk drawer, the password is not the worst thing that happened to you that day.

A reasonable master password is:

- Long enough to be a phrase rather than a word
- Not the password you also use for your bank or your email
- Something you can write down and recognize later

`correct-horse-battery-staple` beats `P@ssw0rd1`. Longer beats clever.

There is no "forgot password" button for the vault. Your master password is never sent to us, never stored in a form
anyone can reverse, and not something we can reset. Forget it and the vault contents are gone. Write it down on paper
and put the paper somewhere you will look.

---


---

## The 3-2-1 backup rule

Quark stores your files. Quark is also a physical box, and boxes fail, flood, and get stolen.

- **3** copies of anything you would miss
- **2** different kinds of storage, like Quark's drive plus an external USB
- **1** copy that is not in the same building

Automatic mirroring between drives is not a shipped feature yet, so a second copy today means attaching a second drive
and copying the irreplaceable folders across yourself. The offsite copy is on you either way: a drive at a relative's
house that you swap out every so often is enough.

There is no backup strategy that can save you from _no backup at all._

---

## Physical security

Quark is a small computer holding your files. Treat it like one.

- Keep it indoors, off the floor, somewhere that does not freeze or bake
- Out of casual sight is fine — you do not need to advertise a storage box on your network
- Do not keep your only backup drive next to Quark. Fire and burglary take pairs.

---

## Network security

By default, Quark is a home-network product. It does not need the public internet to do its job, and it is not reachable
from a coffee shop.

In practice:

- Password-protect your WiFi with WPA2 or WPA3
- Do not hand your WiFi password to people you do not trust
- Quark's routine contact with the outside world is checking for software updates, and the code is public if you want to
  read it

Reaching your files from outside the house is coming later. It is not something to configure today. When it does ship it
will be off until you turn it on, and you can turn it back off again — or never touch it at all. Lock Quark down as far
as you like; everything it does on your home network still works.

---

## Estate planning

The hard part is not the photos. It is the vault. Whoever ends up with your master password ends up with every password
you kept behind it — bank, email, all of it — so treat that password the way you would treat a key to the house.

Handle it like any other important document:

1. Write down the Quark login and the vault master password.
2. Store them where your will is stored — a fireproof box, a safe deposit box, or with the attorney who holds the will.
3. Tell one person you trust that Quark exists, what is on it, and where those papers are.

A trusted-contact feature is on the roadmap and is not live yet, so paper and a trusted person are the plan for now.

This is not morbid. It is the same reason you leave a spare key with a neighbor.

---

## If you think someone got in

Quark has no API keys or app passwords to hunt down and rotate. Access is a username, a password, and the sessions that
password created — so the reset is short:

1. Change your Quark password from Settings if you can still sign in, and review active sessions — revoke anything
   you do not recognize.
2. Change your WiFi password if the network was the likely way in.
3. Look through your files for odd deletions, unfamiliar folders, or timestamps that do not match anything you did.

If you cannot sign in safely, unplug Quark from the router. Nothing reaches it while it is off the network.

---

## What Quark does not do

To be direct about the limits:

- It does not scan uploads for viruses. It stores what you give it.
- It does not stop someone carrying the box out of your house. The vault stays encrypted, but ordinary files on the
  drive would be readable to whoever is holding the drive.
- It does not make your WiFi password safe to share. Someone on your network can reach Quark's login screen — but that
  is where they stop, because browsing your files still means guessing your password first.

Knowing the limits helps you make good decisions about what you store and how.

---

## The short version

1. Pick a master password you will remember. Write it down. Store it safely.
2. Keep your Quark login password written down with your important documents.
3. Copy the irreplaceable things to a second drive, and keep one copy out of the house.
4. Use WPA2 or WPA3 on your WiFi.
5. Tell someone you trust how to get in if you cannot.

That's it. Quark handles the rest.
