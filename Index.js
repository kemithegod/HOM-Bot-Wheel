const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require('fs');

const TOKEN        = process.env.DISCORD_TOKEN;
const CLIENT_ID    = process.env.CLIENT_ID;
const WHEEL_URL    = 'https://kemithegod.github.io/houseofmelanin/';
const OPS_CHANNEL  = '1504964160939888640';
const JSONBIN_KEY  = '$2a$10$NWeTz1kyTPPz2E4brtb3gejPhvO3sa.5f.nOfnh8hZBEEOikpQiE2';

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
    'Goddess Foreign', 'Lynna', 'Mistress Natasha', 'Obsidian Hematite',
    'Omi', 'Temptress Cereza', 'Yumi', 'Izbiz', 'Amagloo', 'BrattyBre',
    'Caribbean Goddess', 'Chaotica', 'Chloe', 'Ellie', 'Empress Jade',
    'Eriiilynnn', 'Goddess Miyaki', 'Goddess Naira', 'Goddess Onyx',
    'Goddess V', 'Goddess Jennesy', 'Karti', 'Lady Godiva', 'Miss B',
    'Miss Serenity', 'Mistress Mula', 'Mommy Moon', 'Nicky', 'Nysakhalesi',
    'Poltergeizts', 'Princess Aurorah', 'Princess Morbucks', 'Princess Najai',
    'Princess Seraphim', 'Princess GreedyGiirl', 'Goddess Ria', 'Siren Zuri',
    'Spades', 'Vamptress Dasha', 'Veliana Vixen', 'Zaria', 'Princess Brownie',
    'Miss Mina', 'Enchantress', 'Princess Anya', 'Goddess Yanna',
    'Princess Myiaa', 'Demoness Maria', 'Miss Feetus', 'Goddess Kemi', 'Black Widow'
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
    'Goddess Kemi', 'Black Widow':         '1476714323144474827',
  };

function saveDommes() { fs.writeFileSync('dommes.json', JSON.stringify(dommes)); }
function saveRegistry() { fs.writeFileSync('registry.json', JSON.stringify(dommeRegistry)); }

// ── JSONBin Payments ─────────────────────────────────────────────
let cachedPayments = null;

async function getPaymentBinId() {
  if (fs.existsSync('payment_binid.txt')) return fs.readFileSync('payment_binid.txt', 'utf8').trim();
  const res = await fetch('https://api.jsonbin.io/v3/b', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY, 'X-Bin-Name': 'hom-payments' },
    body: JSON.stringify({ payments: {} })
  });
  const data = await res.json();
  const id = data.metadata.id;
  fs.writeFileSync('payment_binid.txt', id);
  return id;
}

async function loadPayments() {
  try {
    const id = await getPaymentBinId();
    const res = await fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, { headers: { 'X-Master-Key': JSONBIN_KEY } });
    const data = await res.json();
    cachedPayments = data.record.payments || {};
  } catch(e) { cachedPayments = {}; }
}

async function savePayments() {
  try {
    const id = await getPaymentBinId();
    await fetch(`https://api.jsonbin.io/v3/b/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY },
      body: JSON.stringify({ payments: cachedPayments })
    });
  } catch(e) { console.error('Payment save failed', e); }
}

function getPaymentLink(domme) {
  if (cachedPayments && cachedPayments[domme]) return cachedPayments[domme];
  return null;
}

const copies = [
  "send.", "bow down.", "the melanin decides.",
  "we decide. you obey.", "act accordingly.", "pay up.",
  "no hesitation.", "they're watching.", "now.",
  "this is your purpose.", "honor it.", "don't make them wait.",
];

const DEFAULT_MIN = 33;
const DEFAULT_MAX = 777;

function randomAmount(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  const commands = [
    new SlashCommandBuilder()
      .setName('spin')
      .setDescription('Spin for The House 👑')
      .addStringOption(o => o
        .setName('domme')
        .setDescription('Choose a specific domme (optional — leave blank for random)')
        .setRequired(false)
        .setAutocomplete(true))
      .addIntegerOption(o => o
        .setName('min')
        .setDescription(`Minimum tribute amount (default $${DEFAULT_MIN})`)
        .setMinValue(DEFAULT_MIN).setMaxValue(DEFAULT_MAX).setRequired(false))
      .addIntegerOption(o => o
        .setName('max')
        .setDescription(`Maximum tribute amount (default $${DEFAULT_MAX})`)
        .setMinValue(DEFAULT_MIN).setMaxValue(DEFAULT_MAX).setRequired(false)),

    new SlashCommandBuilder()
      .setName('registerdomme')
      .setDescription('Register yourself as a domme to receive DMs when spun for')
      .addStringOption(o => o
        .setName('name')
        .setDescription('Your exact name on the wheel')
        .setRequired(true)
        .setAutocomplete(true)),

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
      .setDescription('See everyone currently on the wheel'),

    new SlashCommandBuilder()
      .setName('addpayment')
      .setDescription('Add or update your payment link')
      .addStringOption(o => o
        .setName('name')
        .setDescription('Your name on the wheel')
        .setRequired(true)
        .setAutocomplete(true))
      .addStringOption(o => o
        .setName('link')
        .setDescription('Your payment link (full URL)')
        .setRequired(true)),

  ].map(c => c.toJSON());

  const rest = new REST().setToken(TOKEN);
  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  console.log('Commands registered.');
  await loadPayments();
});

client.on('interactionCreate', async interaction => {
  // ── AUTOCOMPLETE ──────────────────────────────────────────────
  if (interaction.isAutocomplete()) {
    const focused = interaction.options.getFocused().toLowerCase();
    const filtered = dommes
      .filter(d => d.toLowerCase().includes(focused))
      .slice(0, 25)
      .map(d => ({ name: d, value: d }));
    return interaction.respond(filtered);
  }

  if (!interaction.isChatInputCommand()) return;

  // ── SPIN ──────────────────────────────────────────────────────
  if (interaction.commandName === 'spin') {
    const selectedDomme = interaction.options.getString('domme');
    const minVal = interaction.options.getInteger('min') ?? DEFAULT_MIN;
    const maxVal = interaction.options.getInteger('max') ?? DEFAULT_MAX;

    if ((minVal === maxVal && minVal < 100) || (minVal > maxVal) || (minVal !== maxVal && (maxVal - minVal) < 15)) {
      return interaction.reply({ content: `Invalid range. Same min/max only allowed for amounts $100+. Otherwise must be at least $15 apart.`, ephemeral: true });
    }

    const gif = SPIN_GIFS[Math.floor(Math.random() * SPIN_GIFS.length)];

    await interaction.reply({
      embeds: [new EmbedBuilder()
        .setTitle('👑 The wheel is spinning...')
        .setDescription('wait.')
        .setImage(gif)
        .setColor(0x0d0010)]
    });

    await new Promise(r => setTimeout(r, 4000));

    const domme  = (selectedDomme && dommes.includes(selectedDomme))
      ? selectedDomme
      : dommes[Math.floor(Math.random() * dommes.length)];
    const amount = randomAmount(minVal, maxVal);
    const copy   = copies[Math.floor(Math.random() * copies.length)];
    const isBig  = amount >= 500;
    const spinner = interaction.user;
    const paymentLink = getPaymentLink(domme);

    const buttonRow = new ActionRowBuilder().addComponents(
      ...(paymentLink ? [
        new ButtonBuilder()
          .setLabel('Send tribute')
          .setURL(paymentLink)
          .setStyle(ButtonStyle.Link)
          .setEmoji('💸')
      ] : []),
      new ButtonBuilder()
        .setLabel('Spin the full wheel')
        .setURL(WHEEL_URL)
        .setStyle(ButtonStyle.Link)
        .setEmoji('👑')
    );

    await interaction.followUp({
      embeds: [new EmbedBuilder()
        .setTitle('The wheel has spoken.')
        .setDescription(`you serve:\n# ${domme}\n\nSend:\n## $${amount}\n\n*${copy}*`)
        .setColor(isBig ? 0xe8a0b0 : 0x6a0dad)
        .setFooter({ text: 'House of Melanin · bow down.' })],
      components: [buttonRow]
    });

    // Log to ops channel
    try {
      const opsChannel = await client.channels.fetch(OPS_CHANNEL);
      await opsChannel.send({
        embeds: [new EmbedBuilder()
          .setTitle('💸 New Spin')
          .setDescription(`**@${spinner.username}** spun for **${domme}**\n\n**$${amount}**\nRange: $${minVal}–$${maxVal}`)
          .setColor(0x6a0dad)
          .setTimestamp()]
      });
    } catch(e) { console.error('Could not post to ops channel:', e); }

    // DM the domme
    const dommeUserId = dommeRegistry[domme];
    if (dommeUserId) {
      try {
        const dommeUser = await client.users.fetch(dommeUserId);
        await dommeUser.send({
          embeds: [new EmbedBuilder()
            .setTitle('👑 New tribute spin!')
            .setDescription(`**@${spinner.username}** spun for you\n\n**$${amount}**\nRange: $${minVal}–$${maxVal}`)
            .setColor(0x6a0dad)
            .setFooter({ text: 'House of Melanin' })],
          ...(paymentLink ? {
            components: [new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setLabel('Your tribute link')
                .setURL(paymentLink)
                .setStyle(ButtonStyle.Link)
                .setEmoji('💸')
            )]
          } : {})
        });
      } catch(e) { console.error('Could not DM domme:', e); }
    }
  }

  // ── REGISTER DOMME ────────────────────────────────────────────
  if (interaction.commandName === 'registerdomme') {
    if (interaction.channelId !== OPS_CHANNEL) {
      return interaction.reply({ content: `Please use this command in the dommes-only channel.`, ephemeral: true });
    }
    const name = interaction.options.getString('name');
    if (!dommes.includes(name)) {
      return interaction.reply({ content: `${name} isn't on the wheel. Ask a mod to add you first.`, ephemeral: true });
    }
    dommeRegistry[name] = interaction.user.id;
    saveRegistry();
    await interaction.reply({ content: `✅ You're registered as **${name}**. You'll receive a DM every time someone spins for you.`, ephemeral: true });
  }

  // ── ADD/REMOVE/LIST ───────────────────────────────────────────
  if (interaction.commandName === 'adddomme') {
    const name = interaction.options.getString('name');
    if (dommes.includes(name)) return interaction.reply({ content: `${name} is already on the wheel.`, ephemeral: true });
    dommes.push(name);
    saveDommes();
    await interaction.reply({ content: `👑 **${name}** added to the wheel.`, ephemeral: true });
  }

  if (interaction.commandName === 'removedomme') {
    const name = interaction.options.getString('name');
    const index = dommes.indexOf(name);
    if (index === -1) return interaction.reply({ content: `${name} wasn't on the wheel.`, ephemeral: true });
    dommes.splice(index, 1);
    saveDommes();
    await interaction.reply({ content: `🗑️ **${name}** removed from the wheel.`, ephemeral: true });
  }

  if (interaction.commandName === 'listdommes') {
    await interaction.reply({
      embeds: [new EmbedBuilder()
        .setTitle('👑 Currently on the wheel')
        .setDescription(dommes.map((d, i) => `${i + 1}. ${d}${dommeRegistry[d] ? ' ✅' : ''}`).join('\n'))
        .setColor(0x6a0dad)
        .setFooter({ text: '✅ = registered for DMs' })],
      ephemeral: true
    });
  }

  // ── ADD PAYMENT ───────────────────────────────────────────────
  if (interaction.commandName === 'addpayment') {
    const name = interaction.options.getString('name');
    const link = interaction.options.getString('link');
    if (!dommes.includes(name)) return interaction.reply({ content: `${name} isn't on the wheel.`, ephemeral: true });
    if (!cachedPayments) cachedPayments = {};
    cachedPayments[name] = link;
    await savePayments();
    await interaction.reply({ content: `💸 Payment link for **${name}** saved: ${link}`, ephemeral: true });
  }
});

client.login(TOKEN);
