---
title: Things You Should Know (Security Guide)
description: Practical security guidance for Quark owners — written in plain English, not jargon
navigation:
  title: Security Guide
  order: 8
---

# Things You Should Know

Quark is built so your files stay private by default. "Private by design" is not the same as "impossible to lose." This
page is the short list every owner should actually do.

None of this is scary. You've probably done most of it for other important things already.

---

## Your master password

The vault — where Quark keeps sensitive things like credentials — is encrypted with your master password. That uses
Argon2id, which is slow on purpose. A stolen drive is still a bad day, but a reasonable password makes cracking the
vault a miserable project for an attacker.

What "reasonable" means here:

- At least 12 characters
- Not a single dictionary word
- Not a password you reuse elsewhere

A passphrase like `correct-horse-battery-staple` beats `P@ssw0rd1`. Longer beats clever.

There is no "forgot password" button. Your master password is not sent to us, not stored in a recoverable form, and not
something we can reset. If you forget it, the vault is gone. Write it down on paper and put the paper somewhere safe.

---

## The 3-2-1 backup rule

Quark stores your files. Quark is also a physical box. Boxes fail, flood, and burn.

- **3** copies of anything you care about
- **2** different kinds of storage (for example Quark's drive + an external USB)
- **1** copy that is not in the same building

Quark can help with copies on attached drives. The offsite copy is on you — a drive at a relative's house that you swap
now and then is enough.

No backup plan can save you from having no backup.

---

## Physical security

- Keep Quark indoors, off the floor, somewhere that does not freeze or bake
- Out of casual sight is fine; you do not need to advertise a storage box on the network
- Do not store your only backup drive next to Quark. Fire and theft take pairs.

---

## Network security

By default, Quark is for your local network. It does not need the public internet to do its main job, and it is not
meant to be reachable from a coffee shop WiFi.

In practice:

- Password-protect your WiFi with WPA2 or WPA3
- Do not hand your WiFi password to people you do not trust
- Quark's routine outside contact is software updates; the code is public if you want to look

Remote access from outside your home is coming later. It is not a live feature to configure today. When it ships, we
will document it carefully — including how to treat those credentials like keys to your house.

---

## Estate planning

If something happens to you, can your family get to the photos?

1. Keep login and master password with your important papers.
2. Tell a trusted person where Quark is and how to find that info.
3. A trusted-contact feature is on the roadmap; it is not live yet.

Same idea as a spare house key with a neighbor.

---

## If you think someone got in

1. Change your password — Settings → Security → Change Password.
2. Review active sessions and revoke anything you do not recognize.
3. Rotate any API tokens you use.
4. Change your WiFi password if the network may have been the path in.
5. Skim files for odd deletions, new folders, or weird timestamps.

---

## What Quark does not do

To be direct about the limits:

- It does not scan uploads for viruses. It stores what you give it.
- It does not stop physical theft of the box. Vault encryption protects vault data; ordinary files on the drive are a
  different story unless you have turned on stronger file encryption (not a current default to lean on).
- It does not save you if your WiFi password is shared with the wrong person. Someone on your network can reach Quark.
  Your password still protects sensitive areas, but browsing files is part of the product.

Knowing the limits is part of using the thing honestly.

---

## The short version

1. Strong master password, written down, stored safely.
2. Master password written down somewhere physical and boring.
3. External backup drive; swap it now and then.
4. WPA2/WPA3 on WiFi.
5. Tell someone you trust how to get in if you cannot.

Quark handles the rest of the day-to-day.
