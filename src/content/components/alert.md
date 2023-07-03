---
title: "Alert"
description: "Alert messages are used to inform users of the status of their action and help them solve any problems that might have occurred. Good design of alert modals is very important for the overall user experience of a website or app."
icon: material-symbols:info-outline
---

## Default

Depending on the information you need to convey, you can use one of the following types of
alert messages - `success`, `info`, `warning` or `danger`. Using the right type of alert modal
will help draw users’ attention to the message and prompt them to take action.

```svelte example

<script lang="ts">
	import { Alert, El } from 'yesvelte'
</script>

<Alert title="Wow! Everything worked!" color="success">
	<El textMuted>Your account has been saved!</El>
</Alert>
<Alert title="Did you know?" color="info">
	<El textMuted>Here is something that you might like to know.</El>
</Alert>
<Alert title="Uh oh, something went wrong" color="warning">
	<El textMuted>Sorry! There was a problem with your request.</El>
</Alert>
<Alert title="I'm so sorry…" color="danger">
	<El textMuted>Your account has been deleted and can't be restored.</El>
</Alert>

```

## Link

Add a link to your alert message to redirect users to the details they need to complete or additional information they should read.

```svelte example

<script lang="ts">
	import { Alert } from 'yesvelte'
</script>

<Alert color="success">
	This is a success alert — <a href="/" class="y-alert-link">check it out</a>!
</Alert>
<Alert color="info">
	This is a info alert — <a href="/" class="y-alert-link">check it out</a>!
</Alert>
<Alert color="warning">
	This is a warning alert — <a href="/" class="y-alert-link">check it out</a>!
</Alert>
<Alert color="danger">
	This is a danger alert — <a href="/" class="y-alert-link">check it out</a>!
</Alert>


```

## Dismissible

Add the `x` close button to make an alert modal dismissible. Thanks to that, your alert modal
will disappear only once the user closes it.

```svelte example
<script lang="ts">
	import { Alert, El } from 'yesvelte'
</script>

<Alert dismissible title="Wow! Everything worked!" color="success" icon="check">
	<El textMuted>Your account has been saved!</El>
</Alert>
<Alert dismissible title="Did you know?" color="info" icon="info-circle">
	<El textMuted>Here is something that you might like to know.</El>
</Alert>
<Alert dismissible title="Uh oh, something went wrong" color="warning" icon="alert-triangle">
	<El textMuted>Sorry! There was a problem with your request.</El>
</Alert>
<Alert dismissible title="I'm so sorry…" color="danger" icon="alert-circle">
	<El textMuted>Your account has been deleted and can't be restored.</El>
</Alert>

```

## Icon

Add an icon to your alert modal to make it more user-friendly and help users easily identify the message.

```svelte example

<script lang="ts">
	import { Alert, El } from 'yesvelte'
</script>

<Alert title="Wow! Everything worked!" color="success" icon="check">
	<El textMuted>Your account has been saved!</El>
</Alert>
<Alert title="Did you know?" color="info" icon="info-circle">
	<El textMuted>Here is something that you might like to know.</El>
</Alert>
<Alert title="Uh oh, something went wrong" color="warning" icon="alert-triangle">
	<El textMuted>Sorry! There was a problem with your request.</El>
</Alert>
<Alert title="I'm so sorry…" color="danger" icon="alert-circle">
	<El textMuted>Your account has been deleted and can't be restored.</El>
</Alert>

```

## Avatar

Add an avatar to your alert modal to make it more personalized.

```svelte example

<script lang="ts">
	import { Alert, Avatar } from 'yesvelte'
</script>

<Alert color="success">
	<Avatar slot="start">
		<img src="https://preview.tabler.io/static/avatars/000m.jpg" alt="" />
	</Avatar>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing
	elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>
<Alert color="info">
	<Avatar slot="start">JL</Avatar>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing
	elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>
<Alert color="warning">
	<Avatar slot="start">
		<img src="https://preview.tabler.io/static/avatars/002m.jpg" alt="" />
	</Avatar>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing
	elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>
<Alert color="danger">
	<Avatar slot="start">
		<img src="https://preview.tabler.io/static/avatars/003m.jpg" alt="" />
	</Avatar>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing
	elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>

```

## Button

Add primary and secondary buttons to your alert modals if you want users to take a particular action based on the information included in the modal message.

```svelte example
<script lang="ts">
	import { Alert, Button } from 'yesvelte'
</script>

<Alert dismissible title="Some Title" color="success">
	<p>
		Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim voluptate.
	</p>
	<Button color="success">Okay</Button>
	<Button outline>Cancel</Button>
</Alert>
<Alert dismissible title="Some Title" color="info">
	<p>
		Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim voluptate.
	</p>
	<Button color="info">Okay</Button>
	<Button outline>Cancel</Button>
</Alert>
<Alert dismissible title="Some Title" color="warning">
	<p>
		Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim voluptate.
	</p>
	<Button color="warning">Okay</Button>
	<Button outline>Cancel</Button>
</Alert>
<Alert dismissible title="Some Title" color="danger">
	<p>
		Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim voluptate.
	</p>
	<Button color="danger">Okay</Button>
	<Button outline>Cancel</Button>
</Alert>

```

## Important

If you want your alert to be really eye-catching, you can add the `important` property.

```svelte example
<script lang="ts">
	import { Alert } from 'yesvelte'
</script>

<Alert dismissible important icon="check" color="success">Your account has been saved!</Alert>
<Alert dismissible important icon="info-circle" color="info">
	Here is something that you might like to know.
</Alert>
<Alert dismissible important icon="alert-triangle" color="warning">
	Sorry! There was a problem with your request.
</Alert>
<Alert dismissible important icon="alert-circle" color="danger">
	Your account has been deleted and can't be restored.
</Alert>

```

## Toggle

To show or hide the alert use the `open` property.

```svelte example
<script lang="ts">
	import { Alert, Button } from 'yesvelte'

	let open = false

	function toggle() {
		open = !open
	}
</script>

<Alert dismissible bind:open title="Wow! Everything worked!" color="success">
	Your account has been saved!
</Alert>
<Button on:click={toggle}>Toggle Alert</Button>

```
