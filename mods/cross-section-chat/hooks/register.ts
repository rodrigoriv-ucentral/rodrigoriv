import type { Register } from 'claude-code'

// /sesion                   muestra el id de esta sesión, para dárselo a la otra
// /to <destino> <mensaje>   envía un mensaje a otra sesión
//   <destino>: un id que empiece por "session_", o el nombre que lista ListAgents

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'sesion',
      description: 'Muestra el id de esta sesión para compartirlo',
    })
    await $.command.register({
      name: 'to',
      description: 'Envía un mensaje a otra sesión',
      argumentHint: '<destino> <mensaje>',
    })
    return next(e)
  })

  on('command.run', { command: 'sesion' }, async $ => {
    return { text: `Id de esta sesión: ${await $.session.id()}` }
  })

  on('command.run', { command: 'to' }, async ($, e) => {
    const [dest, ...rest] = (e.args ?? '').trim().split(/\s+/)
    const text = rest.join(' ')
    if (!dest || !text) return { text: 'Uso: /to <destino> <mensaje>' }

    const to = dest.startsWith('session_') ? { sessionId: dest } : dest
    const sent = await $.session.send({ to, text })
    return {
      text: sent.isDelivered
        ? `Mensaje enviado a ${dest}.`
        : `No se envió a ${dest}: ${sent.reason}`,
    }
  })

  // Solo avisa; el mensaje sigue su camino hacia el modelo sin cambios.
  on('session.receive', { origin: { kind: 'peer' } }, async ($, e, next) => {
    $.ui.toast(`Mensaje de ${e.origin.plugin ?? 'otra sesión'}`)
    return next(e)
  }).catch(($, e, next) => next(e))
}
