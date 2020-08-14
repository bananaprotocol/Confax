const Confax = require('../bot.js')

Confax.registerCommand('purge', 'moderator', (message, bot) => {
  const deletePerms = message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')
  const args = message.content.split(' ')
  const amount = parseInt(args[0])
  const mentions = message.mentions.users.array()

  if (!deletePerms) {
    return "Confax doesn't have enough permissions to delete messages."
  } else if (isNaN(amount)) {
    return 'Please provide the amount of messages you would like to delete.'
  } else if (amount < 1) {
    return 'Please provide an amount of messages you would like to delete (has to be above 0).'
  } else if (mentions.length === 0) {
    message.delete()
    message.channel.fetchMessages({ limit: amount }).then(deleteMsgs => message.channel.bulkDelete(deleteMsgs))
  } else {
    message.delete()
    const deleteMsgs = []
    message.channel.fetchMessages({ limit: amount }).then((value) => {
      value = value.array()
      for (let i = 0; i < value.length; i++) {
        if (mentions.includes(value[i].author)) {
          deleteMsgs.push(value[i])
        }
        message.channel.bulkDelete(deleteMsgs)
      }
    })
  }
}, ['deletemessages', 'deletemsgs'], 'Delete any amount of messages by all users or a list of users (max 100)', '<amount> [mentions]')
