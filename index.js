const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require('fs');

const TOKEN       = process.env.DISCORD_TOKEN;
const CLIENT_ID   = process.env.CLIENT_ID;
const WHEEL_URL   = 'https://kemithegod.github.io/House-Of-Melanin/';
const OPS_CHANNEL = '1504964160939888640';
const JSONBIN_KEY = '$2a$10$NWeTz1kyTPPz2E4brtb3gejPhvO3sa.5f.nOfnh8hZBEEOikpQiE2';

const SPIN_GIFS = [
  'https://media.giphy.com/media/PIn7AxoH9hFYuieHR5/giphy.gif',
  'https://media4.giphy.com/media/1DEJwfwdknKZq/giphy.gif',
  'https://media.giphy.com/media/xT5LMHHyC60Mbyhrm8/giphy.gif',
  'https://media.giphy.com/media/FrnpqArQZtti8/giphy.gif',
  'https://media.giphy.com/media/xT5LMGcINLsZgqnmes/giphy.gif',
  'https://media.giphy.com/media/U3x6mMNj6bApcuq0V1/giphy.gif',
  'https://media.giphy.com/media/8wVRtdu0M1u0AvcDVM/giphy.gif',
  'https://media.giphy.com/media/MFsqcBSoOKPbjtmvWz/giphy.gif',
  'https://media.giphy.com/media/ADgfsbHcS62Jy/giphy.gif',
  'https://media.giphy.com/media/3Ow3WaYKnMX7O/giphy.gif',
  'https://media.giphy.com/media/q3JpMBcy3fYgU/giphy.gif',
  'https://media.giphy.com/media/1raRRrmNpd8v3nUbbI/giphy.gif',
  'https://media.giphy.com/media/RkK5L9kmdWqTe4bJ7Y/giphy.gif',
  'https://media.giphy.com/media/13euWRtSpdGNEI/giphy.gif',
  'https://media.giphy.com/media/3o6fISqUj1AOxgYwsU/giphy.gif',
  'https://media.giphy.com/media/BEVG1aW4Bk0hO/giphy.gif',
  'https://media.giphy.com/media/6XJGsfuXzG0IdgrYRE/giphy.gif',
];

let dommes = fs.existsSync('dommes.json')
  ? JSON.parse(fs.readFileSync('dommes.json'))
  : [
    'Goddess Foreign','Lynna','Mistress Natasha','Obsidian Hematite',
    'Omi','Temptress Cereza','Yumi','Izbiz','Amagloo','BrattyBre',
    'Caribbean Goddess','Chaotica','Chloe','Ellie','Empress Jade',
    'Eriiilynnn','Goddess Miyaki','Goddess Naira','Goddess Onyx',
    'Goddess V','Goddess Jennesy','Karti','Lady Godiva','Miss B',
    'Miss Serenity','Mistress Mula','Mommy Moon','Nicky','Nysakhalesi',
    'Poltergeizts','Princess Aurorah','Princess Morbucks','Princess Najai',
    'Princess Seraphim','Princess GreedyGiirl','Goddess Ria','Siren Zuri',
    'Spades','Vamptress Dasha','Veliana Vixen','Zaria','Princess Brownie',
    'Miss Mina','Enchantress','Princess Anya','Goddess Yanna',
    'Princess Myiaa','Demoness Maria','Miss Feetus','Goddess Kemi',
    'Black Widow','TT','Kitty Darling','Princess Veyra'
  ];

let dommeRegistry = fs.existsSync('registry.json')
  ? JSON.parse(fs.readFileSync('registry.json'))
  : {
    'Goddess Foreign':      '1239581597892743280',
    'Lynna':                '1364380979002871819',
    'Mistress Natasha':     '776085900840796171',
    'Obsidian Hematite':    '545990488344494091',
    'Omi':                  '775226263496425473',
    'Temptress Cereza':     '1303084897770016821',
    'Yumi':                 '1137362631498420315',
    'Izbiz':                '401498204828336139',
    'Amagloo':              '1498362941546954934',
    'BrattyBre':            '1499567078208962600',
    'Caribbean Goddess':    '1485381520003825665',
    'Chaotica':             '1374171589561811076',
    'Chloe':                '1491134244305764412',
    'Ellie':                '445822005753806860',
    'Empress Jade':         '1492611748153266276',
    'Eriiilynnn':           '810608387062104121',
    'Goddess Miyaki':       '1108499655949553865',
    'Goddess Naira':        '1487197625076945088',
    'Goddess Onyx':         '1501328914830856334',
    'Goddess V':            '1476119014936809523',
    'Goddess Jennesy':      '1468498343570182248',
    'Karti':                '1475149880623370466',
    'Lady Godiva':          '1339056110405160983',
    'Miss B':               '1485788287699255306',
    'Miss Serenity':        '462017972345765888',
    'Mistress Mula':        '1391771963197882408',
    'Mommy Moon':           '1309774794329428022',
    'Nicky':                '1321226670744797185',
    'Nysakhalesi':          '1129514173911547924',
    'Poltergeizts':         '1335503652370251869',
    'Princess Aurorah':     '1498370037684240555',
    'Princess Morbucks':    '1149467776424095794',
    'Princess Najai':       '530509339207794730',
    'Princess Seraphim':    '1327903825084022936',
    'Princess GreedyGiirl': '758145625815777321',
    'Goddess Ria':          '1313634613368979477',
    'Siren Zuri':           '1239326142503194709',
    'Spades':               '733099554941173822',
    'Vamptress Dasha':      '1181081502776307883',
    'Veliana Vixen':        '1500308694481506334',
    'Zaria':                '1419830023787122799',
    'Princess Brownie':     '1489268120601362584',
    'Miss Mina':            '750923424729137153',
    'Enchantress':          '746568839667384321',
    'Princess Anya':        '1340181308826980354',
    'Goddess Yanna':        '767607847642726440',
    'Princess Myiaa':       '940678583981056010',
    'Demoness Maria':       '785475025435623425',
    'Miss Feetus':          '811683489287766047',
    'Goddess Kemi':         '1476714323144474827',
    'Black Widow':          '1493408278976266260',
    'TT':                   '1429513780005437661',
    'Kitty Darling':        '1489804510095478876',
    'Princess Veyra':       '1495786956330631190',
  };

function saveDommes() { fs.writeFileSync('dommes.json', JSON.stringify(dommes)); }
function saveRegistry() { fs.writeFileSync('registry.json', JSON.stringify(dommeRegistry)); }

// JSONBin Payments
let cachedPayments = null;

async function getPaymentBinId() {
  return '6a0caca4ee5a733b12e6f470';
}

async function loadPayments() {
  try {
    const id = await getPaymentBinId();
    const res = await fetch('https://api.jsonbin.io/v3/b/' + id + '/latest', { headers: { 'X-Master-Key': JSONBIN_KEY } });
    const data = await res.json();
    cachedPayments = data.record.payments || {};
  } catch(e) { cachedPayments = {}; }
}

async function savePayments() {
  try {
    const id = await getPaymentBinId();
    await fetch('https://api.jsonbin.io/v3/b/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY },
      body: JSON.stringify({ payments: cachedPayments })
    });
  } catch(e) { console.error('Payment save failed', e); }
}

function getPaymentLinks(domme) {
  const stored = cachedPayments && cachedPayments[domme];
  if (stored) {
    if (Array.isArray(stored)) return stored;
    return [{ url: stored, label: 'Send tribute' }];
  }
  return [];
}

const copies = [
  'send.','bow down.','the melanin decides.',
  'we decide. you obey.','act accordingly.','pay up.',
  'no hesitation.','they\'re watching.','now.',
  'this is your purpose.','honor it.','don\'t make them wait.',
];

const DEFAULT_MIN = 10;
const DEFAULT_MAX = 40;

function randomAmount(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once('ready', async () => {
  console.log('Logged in as ' + client.user.tag);

  const commands = [
    new SlashCommandBuilder()
      .setName('spin')
      .setDescription('Spin for The House 👑')
      .addStringOption(o => o.setName('domme').setDescription('Choose a specific domme (optional)').setRequired(false).setAutocomplete(true))
      .addIntegerOption(o => o.setName('min').setDescription('Minimum amount (default $10)').setMinValue(DEFAULT_MIN).setMaxValue(DEFAULT_MAX).setRequired(false))
      .addIntegerOption(o => o.setName('max').setDescription('Maximum amount (default $40)').setMinValue(DEFAULT_MIN).setMaxValue(DEFAULT_MAX).setRequired(false)),

    new SlashCommandBuilder()
      .setName('registerdomme')
      .setDescription('Register yourself to receive DMs when spun for')
      .addStringOption(o => o.setName('name').setDescription('Your name on the wheel').setRequired(true).setAutocomplete(true)),

    new SlashCommandBuilder()
      .setName('adddomme')
      .setDescription('Add a domme to the wheel')
      .addStringOption(o => o.setName('name').setDescription('Name to add').setRequired(true)),

    new SlashCommandBuilder()
      .setName('removedomme')
      .setDescription('Remove a domme from the wheel')
      .addStringOption(o => o.setName('name').setDescription('Name to remove').setRequired(true)),

    new SlashCommandBuilder()
      .setName('listdommes')
      .setDescription('See everyone on the wheel'),

    new SlashCommandBuilder()
      .setName('addpayment')
      .setDescription('Add a payment link (supports multiple)')
      .addStringOption(o => o.setName('name').setDescription('Your name on the wheel').setRequired(true).setAutocomplete(true))
      .addStringOption(o => o.setName('link').setDescription('Payment link URL').setRequired(true))
      .addStringOption(o => o.setName('label').setDescription('Button label e.g. CashApp, Throne (optional)').setRequired(false)),

    new SlashCommandBuilder()
      .setName('removepayment')
      .setDescription('Remove a payment link')
      .addStringOption(o => o.setName('name').setDescription('Domme name').setRequired(true).setAutocomplete(true))
      .addIntegerOption(o => o.setName('number').setDescription('Link number (use /listpayments to see)').setRequired(true)),

    new SlashCommandBuilder()
      .setName('listpayments')
      .setDescription('See all payment links for a domme')
      .addStringOption(o => o.setName('name').setDescription('Domme name').setRequired(true).setAutocomplete(true)),

  ].map(c => c.toJSON());

  const rest = new REST().setToken(TOKEN);
  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  console.log('Commands registered.');
  await loadPayments();
});

client.on('interactionCreate', async interaction => {

  // AUTOCOMPLETE
  if (interaction.isAutocomplete()) {
    const focused = interaction.options.getFocused().toLowerCase();
    const filtered = dommes.filter(d => d.toLowerCase().includes(focused)).slice(0, 25).map(d => ({ name: d, value: d }));
    return interaction.respond(filtered);
  }

  if (!interaction.isChatInputCommand()) return;

  // SPIN
  if (interaction.commandName === 'spin') {
    const selectedDomme = interaction.options.getString('domme');
    const minVal = interaction.options.getInteger('min') || DEFAULT_MIN;
    const maxVal = interaction.options.getInteger('max') || DEFAULT_MAX;

    if (minVal === maxVal || minVal > maxVal || (maxVal - minVal) < 5) {
      return interaction.reply({ content: 'Invalid range. Min and max must be different and at least $5 apart.', ephemeral: true });
    }

    const gif = SPIN_GIFS[Math.floor(Math.random() * SPIN_GIFS.length)];

    await interaction.reply({
      embeds: [new EmbedBuilder().setTitle('👑 The wheel is spinning...').setDescription('wait.').setImage(gif).setColor(0x0d0010)]
    });

    await new Promise(r => setTimeout(r, 4000));

    const domme  = (selectedDomme && dommes.includes(selectedDomme)) ? selectedDomme : dommes[Math.floor(Math.random() * dommes.length)];
    const amount = randomAmount(minVal, maxVal);
    const copy   = copies[Math.floor(Math.random() * copies.length)];
    const isBig  = amount >= 500;
    const spinner = interaction.user;
    const paymentLinks = getPaymentLinks(domme);

    const buttonRow = new ActionRowBuilder().addComponents(
      ...paymentLinks.map(p => new ButtonBuilder().setLabel(p.label || 'Send tribute').setURL(p.url).setStyle(ButtonStyle.Link).setEmoji('💸')),
      new ButtonBuilder().setLabel('Spin the full wheel').setURL(WHEEL_URL).setStyle(ButtonStyle.Link).setEmoji('👑')
    );

    const resultEmbed = {
      embeds: [new EmbedBuilder()
        .setTitle('The wheel has spoken.')
        .setDescription('you serve:\n# ' + domme + '\n\nSend:\n## $' + amount + '\n\n*' + copy + '*')
        .setColor(isBig ? 0xe8a0b0 : 0x6a0dad)
        .setFooter({ text: 'House of Melanin · bow down.' })],
      components: [buttonRow]
    };
    try {
      await interaction.followUp(resultEmbed);
    } catch(e) {
      console.error('followUp failed, trying editReply:', e.message);
      try { await interaction.editReply(resultEmbed); } catch(e2) { console.error('editReply also failed:', e2.message); }
    }

    // Log to ops channel
    try {
      const opsChannel = await client.channels.fetch(OPS_CHANNEL);
      await opsChannel.send({
        embeds: [new EmbedBuilder()
          .setTitle('💸 New Spin')
          .setDescription('**@' + spinner.username + '** spun for **' + domme + '**\n\n**$' + amount + '**\nRange: $' + minVal + '–$' + maxVal)
          .setColor(0x6a0dad)
          .setTimestamp()]
      });
    } catch(e) { console.error('Could not post to ops channel:', e.message); }

    // DM the domme
    const dommeUserId = dommeRegistry[domme];
    if (dommeUserId) {
      try {
        const dommeUser = await client.users.fetch(dommeUserId);
        const dmComponents = paymentLinks.length > 0
          ? [new ActionRowBuilder().addComponents(paymentLinks.map(p => new ButtonBuilder().setLabel(p.label || 'Your tribute link').setURL(p.url).setStyle(ButtonStyle.Link).setEmoji('💸')))]
          : [];
        await dommeUser.send({
          embeds: [new EmbedBuilder()
            .setTitle('👑 New tribute spin!')
            .setDescription('**@' + spinner.username + '** spun for you\n\n**$' + amount + '**\nRange: $' + minVal + '–$' + maxVal)
            .setColor(0x6a0dad)
            .setFooter({ text: 'House of Melanin' })],
          components: dmComponents
        });
      } catch(e) { console.error('Could not DM domme:', e.message); }
    }
  }

  // REGISTER DOMME
  if (interaction.commandName === 'registerdomme') {
    if (interaction.channelId !== OPS_CHANNEL) {
      return interaction.reply({ content: 'Please use this command in the dommes-only channel.', ephemeral: true });
    }
    const name = interaction.options.getString('name');
    if (!dommes.includes(name)) return interaction.reply({ content: name + ' is not on the wheel. Ask a mod to add you first.', ephemeral: true });
    dommeRegistry[name] = interaction.user.id;
    saveRegistry();
    await interaction.reply({ content: 'You are registered as **' + name + '**. You will receive a DM every time someone spins for you.', ephemeral: true });
  }

  // ADD DOMME
  if (interaction.commandName === 'adddomme') {
    const name = interaction.options.getString('name');
    if (dommes.includes(name)) return interaction.reply({ content: name + ' is already on the wheel.', ephemeral: true });
    dommes.push(name);
    saveDommes();
    await interaction.reply({ content: '👑 **' + name + '** added to the wheel.', ephemeral: true });
  }

  // REMOVE DOMME
  if (interaction.commandName === 'removedomme') {
    const name = interaction.options.getString('name');
    const index = dommes.indexOf(name);
    if (index === -1) return interaction.reply({ content: name + ' was not on the wheel.', ephemeral: true });
    dommes.splice(index, 1);
    saveDommes();
    await interaction.reply({ content: '🗑️ **' + name + '** removed.', ephemeral: true });
  }

  // LIST DOMMES
  if (interaction.commandName === 'listdommes') {
    const list = dommes.map(function(d, i) {
      var hasDMs = dommeRegistry[d] ? ' ✅' : '';
      var hasPay = (cachedPayments && cachedPayments[d] && (Array.isArray(cachedPayments[d]) ? cachedPayments[d].length > 0 : true)) ? ' 💸' : '';
      return (i + 1) + '. ' + d + hasDMs + hasPay;
    }).join('\n');
    await interaction.reply({
      embeds: [new EmbedBuilder().setTitle('👑 Currently on the wheel').setDescription(list).setColor(0x6a0dad).setFooter({ text: '✅ = registered for DMs  💸 = has payment link' })],
      ephemeral: true
    });
  }

  // ADD PAYMENT
  if (interaction.commandName === 'addpayment') {
    const name = interaction.options.getString('name');
    const link = interaction.options.getString('link');
    const label = interaction.options.getString('label') || 'Send tribute';
    if (!dommes.includes(name)) return interaction.reply({ content: name + ' is not on the wheel.', ephemeral: true });
    if (!cachedPayments) cachedPayments = {};
    if (typeof cachedPayments[name] === 'string') cachedPayments[name] = [{ url: cachedPayments[name], label: 'Send tribute' }];
    if (!Array.isArray(cachedPayments[name])) cachedPayments[name] = [];
    cachedPayments[name].push({ url: link, label: label });
    await savePayments();
    await interaction.reply({ content: '💸 Payment link added for **' + name + '**: ' + label + ' → ' + link, ephemeral: true });
  }

  // REMOVE PAYMENT
  if (interaction.commandName === 'removepayment') {
    const name = interaction.options.getString('name');
    const num = interaction.options.getInteger('number');
    if (!cachedPayments || !cachedPayments[name]) return interaction.reply({ content: 'No payment links found for ' + name + '.', ephemeral: true });
    const links = Array.isArray(cachedPayments[name]) ? cachedPayments[name] : [{ url: cachedPayments[name], label: 'Send tribute' }];
    if (num < 1 || num > links.length) return interaction.reply({ content: 'Invalid number. Use /listpayments to see links.', ephemeral: true });
    links.splice(num - 1, 1);
    cachedPayments[name] = links;
    await savePayments();
    await interaction.reply({ content: 'Payment link #' + num + ' removed for **' + name + '**.', ephemeral: true });
  }

  // LIST PAYMENTS
  if (interaction.commandName === 'listpayments') {
    const name = interaction.options.getString('name');
    if (!cachedPayments || !cachedPayments[name]) return interaction.reply({ content: 'No payment links saved for ' + name + '.', ephemeral: true });
    const links = Array.isArray(cachedPayments[name]) ? cachedPayments[name] : [{ url: cachedPayments[name], label: 'Send tribute' }];
    var listText = links.map(function(p, i) { return (i + 1) + '. ' + p.label + ' → <' + p.url + '>'; }).join('\n');
    await interaction.reply({ content: '💸 Payment links for **' + name + '**:\n' + listText, ephemeral: true });
  }

});

client.login(TOKEN);
