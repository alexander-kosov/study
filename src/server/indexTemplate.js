export const indexTemplate = (content) => {
return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="HandheldFriendly" content="true"/>
		<title>Reddit</title>
		<script src="/static/client.js" type="application/javascript"></script>
	</head>
	<body>
		<div id="react-root">${content}</div>
	</body>
</html>
	`
}
