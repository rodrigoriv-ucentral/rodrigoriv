# cross-section-chat

Mod para Claude Code que permite que dos o más sesiones de Claude se envíen mensajes entre sí, para trabajar en la misma integración desde partes distintas.

## Instalación

En cada sesión o equipo donde quieras usarlo:

```
/plugin install cross-section-chat --marketplace rodrigoriv-ucentral/rodrigoriv
```

## Prompt para que Claude lo instale

Pega esto en cada sesión de Claude que quieras conectar. Hazlo en cada una: cada sesión debe tener el mod instalado.

```
Instala el mod cross-section-chat del repo https://github.com/rodrigoriv-ucentral/rodrigoriv
(carpeta mods/cross-section-chat, marketplace "rodrigoriv").
Si /plugin install está disponible, usa:
/plugin install cross-section-chat --marketplace rodrigoriv-ucentral/rodrigoriv
Cuando termine, dime el comando exacto que usaste, ejecuta /sesion y dame el id
de esta sesión (session_...) para pasárselo a las otras sesiones.
No modifiques otros archivos ni configuraciones.
```

Para enviar un mensaje a otra sesión de tu cuenta:

```
Usa /to <id-o-nombre-de-la-otra-sesion> <mensaje>
```

## Uso

1. En la sesión que va a recibir, ejecuta `/sesion` para ver su id (`session_...`).
2. Pásale ese id a quien va a enviar.
3. Desde la otra sesión, envía:

```
/to session_xxxxxxxx Revisé el endpoint de pagos; el campo `amount` llega como texto.
```

Al recibir un mensaje aparece un aviso y el texto llega al modelo de la sesión receptora, que puede responder.

También puedes usar el nombre de la sesión (el que lista ListAgents) en lugar del id, por ejemplo `/to rodrigoriv-23 ...`. El id es el destino más fiable.

## Requisitos

- Las sesiones deben estar activas y, para sesiones en distintos equipos, con Remote Control conectado.
- Un mensaje se considera entregado cuando llega a la cola de la otra sesión; la otra sesión decide cuándo lo lee.
