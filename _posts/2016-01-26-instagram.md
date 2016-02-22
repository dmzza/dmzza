---
layout: post
title:  "Instagram could have launched with only 3 simple features"
date: 2016-01-26 14:30:00
categories: blog
thumbnail: "/img/instagram-thumbnail.png"
hero: "/img/instagram-office.jpg"
author: "David Mazza"
---

In 2012, before Instagram had any way of making money, Facebook purchased it for $1 billion. Facebook needed Instagram because it was the most popular place to share photos taken with the most popular camera in the world; the iPhone. Instagram is arguably the most successful social network since Facebook itself.

Achieving the scale of Instagram at their rate of growth is almost unprecedented, but building the app that led to that outcome is relatively easy if you identify the core features to focus on and ignore everything else.

***

Instagram’s filters and frames made it easy for anyone to take more expressive snapshots with the iPhone. Every photo you take is instantly published on your user profile and fed to anyone who follows you.

### User Profiles

{% include thumbnail.html src="/img/instagram-profile.png" alt="user profile" class="" %}

Your journey with Instagram starts with a super simple profile. All that’s required is a photo, username and a description to complete your account. The majority of space on your profile is consumed by your gallery of Instagram photos.

### Feed

{% include thumbnail.html src="/img/instagram-feed.png" alt="feed" class="" %}

Most users will spend far more time browsing their feed than posting new photos. They came for the filters but stayed for the feed. Instagram has stuck with a simple feed design that isn’t far from what you might build in a prototype. One photo at a time scrolling down in reverse-chronological order.

Hearts are an effortless way to appreciate people you follow. It gives people a reason to come back to their profile to see how many hearts each photo received. This virtuous cycle keeps people coming back to Instagram once they have a network of friends and interesting characters to keep up with.

### Taking a Photo

<div> <!-- this outer div makes it possible to select the first and second image in css for special padding rules -->
{% include thumbnail.html src="/img/instagram-camera.png" alt="camera" class="half-width" %}
{% include thumbnail.html src="/img/instagram-filter.png" alt="filter" class="half-width" %}
</div>

There are hundreds of apps that will filter and frame your photo, but Instagram compelled even timid users to share every photo to the feed with a subtle tweak: whether you use it as a camera or an editor, the result isn’t saved to your device until you publish it onto your profile.

## The first steps to Instagram
If the founder of Instagram had come to me with a $15,000 budget to build the first version of Instagram, I would have started by focusing on those three critical features.

### Onboarding
Signing up for an app collects your email address, but more importantly, this is where new users form opinions about the app, so it is a critical to get this right. I would use it to show how to enhance and publish a photo, but also to inspire people to travel and take amazing photos. I want users to imagine themselves using the app and fulfilling their aspirations.

### Making Photos
Taking a photo needs to be easy, so the interface shouldn't be difficult to build. The tricky bit is uploading the photo. Do you upload it in the background and just hope that it works or do you make the user wait for it to finish? This app is worthless if people can't share photos, so I would make the user wait. If something goes wrong, they can try again. That means we need to handle every case; loading, success, failure, server down, slow connection and no connection. There is nothing more frustrating than a frozen app or a cryptic error message.

### Scrolling through feeds
The feed will keep users around, but it can also be very modest at first. I would only build a vertical list of photos that can be seen one at a time. This interface can be used both for the feed and profile tabs.

## Getting to $1B
Nobody can reproduce the exact timing, luck, and thought process that created Instagram, but anyone can start small and iterate. Apps that start big are slow to change. Think about the smallest possible thing you can afford to build now that could become an important piece of something much larger.
