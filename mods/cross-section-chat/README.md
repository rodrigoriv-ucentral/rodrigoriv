# cross-section-chat

Mod para Claude Code que permite que dos o más sesiones de Claude se envíen mensajes entre sí, para trabajar en la misma integración desde partes distintas.

## Instalación

En cada sesión o equipo donde quieras usarlo:

```
/plugin install cross-section-chat --marketplace rodrigoriv-ucentral/rodrigoriv
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
