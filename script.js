'use strict';

const CHAR_SETS = {
  upper:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower:   'abcdefghijklmnopqrstuvwxyz',
  number:  '0123456789',
  symbol:  '!@#$%^&*()_+-=[]{}|;:,.<>?/~'
};

const COMMON_PASSWORDS = [
  'password','123456','123456789','qwerty','abc123','password1','111111',
  'iloveyou','admin','welcome','monkey','letmein','dragon','football',
  'baseball','trustno1','qwerty123','123123','master','sunshine','princess'
];

const LEET_MAP = { a:'@', e:'3', i:'1', o:'0', s:'$', t:'7' };

const translations = {
  en: {
    brandTitle: 'Smart Password Generator',
    brandSub: 'Generate. Analyze. Understand your security.',
    langToggleLabel: 'العربية',
    genEyebrow: '01 — Generate',
    genTitle: 'Build a strong password',
    pwPlaceholder: 'Press “Generate” to create a password',
    pwPlaceholderNoOptions: 'Select at least one character type',
    generateBtn: 'Generate Password',
    copyBtn: 'Copy',
    copied: 'Copied!',
    copiedToast: 'Copied successfully!',
    lengthLabel: 'Length',
    pillUpper: 'Uppercase',
    pillLower: 'Lowercase',
    pillNumber: 'Numbers',
    pillSymbol: 'Symbols',
    legendUpper: 'Uppercase',
    legendLower: 'Lowercase',
    legendNumber: 'Number',
    legendSymbol: 'Symbol',
    memoryLabel: 'Memory hint (optional)',
    memoryPlaceholder: "e.g. a name or word you'll remember",
    memoryHelper: 'Not stored or sent anywhere — used only to shape this password.',
    anEyebrow: '02 — Analyze',
    anTitle: "Test a password's strength",
    analyzePlaceholder: 'Paste a password to analyze…',
    analyzeBtn: 'Analyze Password',
    strengthLabel: 'Strength',
    entropyUnit: 'bits entropy',
    crackTimeLabel: 'Estimated crack time',
    lengthMetaLabel: 'Length',
    poolLabel: 'Character pool',
    suggestionsHeader: 'Suggestions',
    histEyebrow: '03 — History',
    histTitle: 'Last 5 generated',
    histEmpty: 'Nothing generated yet this session.',
    footer: 'Smart Password Generator · CS50 Final Project · Built by Saud Qattan',
    charsUnit: 'chars',
    symbolsUnit: 'symbols',
    strengthVeryWeak: 'Very Weak',
    strengthWeak: 'Weak',
    strengthMedium: 'Medium',
    strengthStrong: 'Strong',
    strengthVeryStrong: 'Very Strong',
    unitInstant: 'Instantly',
    unitSeconds: 'seconds',
    unitMinutes: 'minutes',
    unitHours: 'hours',
    unitDays: 'days',
    unitWeeks: 'weeks',
    unitMonths: 'months',
    unitYears: 'years',
    unitDecades: 'decades',
    unitCenturies: 'centuries',
    unitMillennia: 'millennia',
    unitMillions: 'Millions of years',
    sugLength: 'Increase length to at least 12 characters',
    sugUpper: 'Add uppercase letters',
    sugLower: 'Add lowercase letters',
    sugNumber: 'Add numbers',
    sugSymbol: 'Add special symbols',
    sugRepeated: 'Avoid repeating the same character multiple times',
    sugSequential: 'Avoid sequential patterns like "abc" or "123"',
    sugCommon: 'Avoid common words or known passwords',
    sugGood: 'This password follows strong security practices'
  },
  ar: {
    brandTitle: 'مولد كلمات المرور الذكي',
    brandSub: 'ولّد. حلّل. افهم أمانك.',
    langToggleLabel: 'English',
    genEyebrow: '٠١ — توليد',
    genTitle: 'أنشئ كلمة مرور قوية',
    pwPlaceholder: 'اضغط "توليد" لإنشاء كلمة مرور',
    pwPlaceholderNoOptions: 'اختر نوع محارف واحد على الأقل',
    generateBtn: 'توليد كلمة المرور',
    copyBtn: 'نسخ',
    copied: 'تم النسخ!',
    copiedToast: 'تم النسخ بنجاح!',
    lengthLabel: 'الطول',
    pillUpper: 'أحرف كبيرة',
    pillLower: 'أحرف صغيرة',
    pillNumber: 'أرقام',
    pillSymbol: 'رموز',
    legendUpper: 'حرف كبير',
    legendLower: 'حرف صغير',
    legendNumber: 'رقم',
    legendSymbol: 'رمز',
    memoryLabel: 'كلمة تذكير (اختياري)',
    memoryPlaceholder: 'مثال: اسم أو كلمة تتذكرها',
    memoryHelper: 'لا تُحفظ ولا تُرسل لأي جهة — تُستخدم فقط لتشكيل هذه الكلمة.',
    anEyebrow: '٠٢ — تحليل',
    anTitle: 'اختبر قوة كلمة المرور',
    analyzePlaceholder: 'الصق كلمة مرور لتحليلها…',
    analyzeBtn: 'تحليل كلمة المرور',
    strengthLabel: 'القوة',
    entropyUnit: 'بت إنتروبيا',
    crackTimeLabel: 'الوقت التقديري للاختراق',
    lengthMetaLabel: 'الطول',
    poolLabel: 'مجموعة المحارف',
    suggestionsHeader: 'اقتراحات',
    histEyebrow: '٠٣ — السجل',
    histTitle: 'آخر 5 كلمات مولدة',
    histEmpty: 'لم يتم توليد شيء بعد في هذه الجلسة.',
    footer: 'مولد كلمات المرور الذكي · مشروع تخرج CS50 · تطوير سعود قطان',
    charsUnit: 'حرف',
    symbolsUnit: 'رمز',
    strengthVeryWeak: 'ضعيفة جدًا',
    strengthWeak: 'ضعيفة',
    strengthMedium: 'متوسطة',
    strengthStrong: 'قوية',
    strengthVeryStrong: 'قوية جدًا',
    unitInstant: 'فورًا',
    unitSeconds: 'ثوانٍ',
    unitMinutes: 'دقائق',
    unitHours: 'ساعات',
    unitDays: 'أيام',
    unitWeeks: 'أسابيع',
    unitMonths: 'أشهر',
    unitYears: 'سنوات',
    unitDecades: 'عقود',
    unitCenturies: 'قرون',
    unitMillennia: 'آلاف السنين',
    unitMillions: 'ملايين السنين',
    sugLength: 'زد الطول إلى 12 حرفًا على الأقل',
    sugUpper: 'أضف أحرفًا كبيرة',
    sugLower: 'أضف أحرفًا صغيرة',
    sugNumber: 'أضف أرقامًا',
    sugSymbol: 'أضف رموزًا خاصة',
    sugRepeated: 'تجنب تكرار نفس الحرف عدة مرات متتالية',
    sugSequential: 'تجنب الأنماط المتسلسلة مثل "abc" أو "123"',
    sugCommon: 'تجنب الكلمات الشائعة أو كلمات المرور المعروفة',
    sugGood: 'هذه الكلمة تتبع ممارسات أمان قوية'
  }
};

let currentLang = 'en';
let currentPassword = '';
let history = [];

const lengthSlider   = document.getElementById('lengthSlider');
const lengthValue    = document.getElementById('lengthValue');
const optUpper       = document.getElementById('optUpper');
const optLower       = document.getElementById('optLower');
const optNumbers     = document.getElementById('optNumbers');
const optSymbols     = document.getElementById('optSymbols');
const memoryInput    = document.getElementById('memoryInput');
const generateBtn    = document.getElementById('generateBtn');
const copyBtn        = document.getElementById('copyBtn');
const copyToast      = document.getElementById('copyToast');
const pwChars        = document.getElementById('pwChars');
const historyList    = document.getElementById('historyList');
const historyEmpty   = document.getElementById('historyEmpty');

const analyzeInput   = document.getElementById('analyzeInput');
const analyzeBtn     = document.getElementById('analyzeBtn');
const toggleVisBtn   = document.getElementById('toggleVisibility');
const results        = document.getElementById('results');
const strengthLabelEl = document.getElementById('strengthLabel');
const strengthFill   = document.getElementById('strengthBarFill');
const entropyGaugeFill = document.getElementById('entropyGaugeFill');
const entropyValue   = document.getElementById('entropyValue');
const crackTimeEl    = document.getElementById('crackTime');
const metaLength     = document.getElementById('metaLength');
const metaPool       = document.getElementById('metaPool');
const suggestionsList = document.getElementById('suggestionsList');

const themeToggle    = document.getElementById('themeToggle');
const themeIcon      = document.getElementById('themeIcon');
const langToggle     = document.getElementById('langToggle');

function t(key) {
  return translations[currentLang][key] || key;
}

function secureRandomInt(max) {
  const range = Math.floor(0xFFFFFFFF / max) * max;
  const arr = new Uint32Array(1);
  let value;
  do {
    crypto.getRandomValues(arr);
    value = arr[0];
  } while (value >= range);
  return value % max;
}

function secureShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function charType(ch) {
  if (/[A-Z]/.test(ch)) return 'upper';
  if (/[a-z]/.test(ch)) return 'lower';
  if (/[0-9]/.test(ch)) return 'number';
  return 'symbol';
}

function buildPool(options) {
  let pool = '';
  if (options.upper)  pool += CHAR_SETS.upper;
  if (options.lower)  pool += CHAR_SETS.lower;
  if (options.number) pool += CHAR_SETS.number;
  if (options.symbol) pool += CHAR_SETS.symbol;
  return pool;
}

function generatePassword(length, options) {
  const pool = buildPool(options);
  if (!pool) return null;

  const chars = [];
  const activeSets = [];
  if (options.upper)  activeSets.push(CHAR_SETS.upper);
  if (options.lower)  activeSets.push(CHAR_SETS.lower);
  if (options.number) activeSets.push(CHAR_SETS.number);
  if (options.symbol) activeSets.push(CHAR_SETS.symbol);

  activeSets.forEach(set => {
    chars.push(set[secureRandomInt(set.length)]);
  });

  while (chars.length < length) {
    chars.push(pool[secureRandomInt(pool.length)]);
  }

  return secureShuffle(chars).join('');
}

function transformMemoryWord(word, options) {
  const chars = [...word];
  return chars.map(ch => {
    const lower = ch.toLowerCase();
    const leet = LEET_MAP[lower];
    if (leet) {
      const isSymbolLeet = /[^a-z0-9]/i.test(leet) || /[!@#$%^&*]/.test(leet);
      const isNumberLeet = /[0-9]/.test(leet);
      if (options.symbol && isSymbolLeet && secureRandomInt(2) === 0) return leet;
      if (options.number && isNumberLeet && secureRandomInt(2) === 0) return leet;
    }
    if (options.upper && /[a-z]/.test(ch) && secureRandomInt(3) === 0) return ch.toUpperCase();
    if (options.lower && /[A-Z]/.test(ch) && secureRandomInt(3) === 0) return ch.toLowerCase();
    return ch;
  }).join('');
}

function generateMemorablePassword(word, length, options) {
  const cleanWord = word.replace(/\s+/g, '');
  if (!cleanWord) return generatePassword(length, options);

  let transformed = transformMemoryWord(cleanWord, options);
  if (options.upper && transformed.length > 0) {
    transformed = transformed[0].toUpperCase() + transformed.slice(1);
  }

  if (transformed.length >= length) {
    return transformed.slice(0, length);
  }

  const pool = buildPool(options);
  const remaining = length - transformed.length;
  const prefixLen = Math.floor(remaining / 2);
  const suffixLen = remaining - prefixLen;
  const randChar = () => pool ? pool[secureRandomInt(pool.length)] : '';

  const prefix = Array.from({ length: prefixLen }, randChar).join('');
  const suffix = Array.from({ length: suffixLen }, randChar).join('');
  let result = prefix + transformed + suffix;

  const categoriesNeeded = [];
  if (options.upper && !/[A-Z]/.test(result)) categoriesNeeded.push('upper');
  if (options.lower && !/[a-z]/.test(result)) categoriesNeeded.push('lower');
  if (options.number && !/[0-9]/.test(result)) categoriesNeeded.push('number');
  if (options.symbol && !/[^A-Za-z0-9]/.test(result)) categoriesNeeded.push('symbol');

  if (categoriesNeeded.length && (prefix.length + suffix.length) > 0) {
    const resultChars = result.split('');
    const padPositions = [];
    for (let i = 0; i < prefix.length; i++) padPositions.push(i);
    for (let i = 0; i < suffix.length; i++) padPositions.push(prefix.length + transformed.length + i);

    categoriesNeeded.forEach(cat => {
      if (padPositions.length === 0) return;
      const posIdx = secureRandomInt(padPositions.length);
      const pos = padPositions.splice(posIdx, 1)[0];
      resultChars[pos] = CHAR_SETS[cat][secureRandomInt(CHAR_SETS[cat].length)];
    });

    result = resultChars.join('');
  }

  return result;
}

function renderPassword(pw) {
  pwChars.innerHTML = '';
  [...pw].forEach(ch => {
    const span = document.createElement('span');
    span.textContent = ch;
    span.className = 'char-' + charType(ch);
    pwChars.appendChild(span);
  });
}

function getSelectedOptions() {
  return {
    upper:  optUpper.checked,
    lower:  optLower.checked,
    number: optNumbers.checked,
    symbol: optSymbols.checked
  };
}

function handleGenerate() {
  const length = parseInt(lengthSlider.value, 10);
  const options = getSelectedOptions();
  const memoryWord = memoryInput.value.trim();

  const pw = memoryWord
    ? generateMemorablePassword(memoryWord, length, options)
    : generatePassword(length, options);

  if (!pw) {
    pwChars.innerHTML = `<span class="pw-placeholder">${t('pwPlaceholderNoOptions')}</span>`;
    copyBtn.disabled = true;
    currentPassword = '';
    return;
  }

  currentPassword = pw;
  renderPassword(pw);
  copyBtn.disabled = false;
  addToHistory(pw);
}

function addToHistory(pw) {
  history.unshift(pw);
  if (history.length > 5) history.pop();
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';
  if (history.length === 0) {
    const li = document.createElement('li');
    li.className = 'history-empty';
    li.id = 'historyEmpty';
    li.textContent = t('histEmpty');
    historyList.appendChild(li);
    return;
  }
  history.forEach(pw => {
    const li = document.createElement('li');
    li.className = 'history-item';

    const span = document.createElement('span');
    span.className = 'history-pw';
    span.textContent = pw;

    const btn = document.createElement('button');
    btn.className = 'history-copy';
    btn.type = 'button';
    btn.textContent = t('copyBtn');
    btn.addEventListener('click', () => copyText(pw, btn));

    li.appendChild(span);
    li.appendChild(btn);
    historyList.appendChild(li);
  });
}

async function copyText(text, sourceBtn) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  if (sourceBtn) {
    const original = sourceBtn.textContent;
    sourceBtn.textContent = t('copied');
    setTimeout(() => { sourceBtn.textContent = original; }, 1200);
  } else {
    copyToast.classList.add('show');
    setTimeout(() => copyToast.classList.remove('show'), 1500);
  }
}

function estimatePoolSize(pw) {
  let pool = 0;
  if (/[A-Z]/.test(pw)) pool += 26;
  if (/[a-z]/.test(pw)) pool += 26;
  if (/[0-9]/.test(pw)) pool += 10;
  if (/[^A-Za-z0-9]/.test(pw)) pool += 32;
  return pool || 1;
}

function calculateEntropy(pw) {
  const pool = estimatePoolSize(pw);
  return pw.length * Math.log2(pool);
}

function formatNumber(value) {
  if (value >= 100) return String(Math.round(value));
  if (value >= 10) return (Math.round(value * 10) / 10).toString();
  return (Math.round(value * 100) / 100).toString();
}

function formatCrackTime(entropyBits) {
  const guessesPerSecond = 1e10;
  const combinations = Math.pow(2, entropyBits);
  const averageGuesses = combinations / 2;
  const seconds = averageGuesses / guessesPerSecond;

  if (seconds < 1) return t('unitInstant');

  const SECOND = 1;
  const MINUTE = 60;
  const HOUR = 3600;
  const DAY = 86400;
  const WEEK = 604800;
  const MONTH = 2629800;
  const YEAR = 31557600;
  const DECADE = YEAR * 10;
  const CENTURY = YEAR * 100;
  const MILLENNIUM = YEAR * 1000;
  const MILLION_YEARS = YEAR * 1e6;

  const units = [
    { key: 'unitSeconds', secs: SECOND },
    { key: 'unitMinutes', secs: MINUTE },
    { key: 'unitHours', secs: HOUR },
    { key: 'unitDays', secs: DAY },
    { key: 'unitWeeks', secs: WEEK },
    { key: 'unitMonths', secs: MONTH },
    { key: 'unitYears', secs: YEAR },
    { key: 'unitDecades', secs: DECADE },
    { key: 'unitCenturies', secs: CENTURY },
    { key: 'unitMillennia', secs: MILLENNIUM }
  ];

  if (seconds >= MILLION_YEARS) return t('unitMillions');

  let chosen = units[0];
  for (const u of units) {
    if (seconds >= u.secs) chosen = u;
  }

  const value = seconds / chosen.secs;
  return `${formatNumber(value)} ${t(chosen.key)}`;
}

function hasRepeatedChars(pw) {
  return /(.)\1{2,}/.test(pw);
}

function hasSequentialChars(pw) {
  const seqs = ['abcdefghijklmnopqrstuvwxyz', '0123456789', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  const lower = pw.toLowerCase();
  for (const seq of seqs) {
    for (let i = 0; i <= seq.length - 3; i++) {
      const chunk = seq.slice(i, i + 3);
      const rev = [...chunk].reverse().join('');
      if (lower.includes(chunk) || lower.includes(rev)) return true;
    }
  }
  return false;
}

function containsCommonPassword(pw) {
  const lower = pw.toLowerCase();
  return COMMON_PASSWORDS.some(common => lower.includes(common));
}

function classifyStrength(entropyBits, penalties) {
  let score = entropyBits;
  score -= penalties * 12;

  if (score < 28) return { key: 'strengthVeryWeak',  pct: 15,  color: 'var(--danger)'  };
  if (score < 45) return { key: 'strengthWeak',      pct: 38,  color: 'var(--warning)' };
  if (score < 60) return { key: 'strengthMedium',    pct: 60,  color: 'var(--caution)' };
  if (score < 80) return { key: 'strengthStrong',    pct: 82,  color: 'var(--good)'    };
  return                 { key: 'strengthVeryStrong',pct: 100, color: 'var(--great)'   };
}

function buildSuggestions(pw, flags) {
  const list = [];

  if (pw.length < 12) list.push({ key: 'sugLength', good: false });
  if (!/[A-Z]/.test(pw)) list.push({ key: 'sugUpper', good: false });
  if (!/[a-z]/.test(pw)) list.push({ key: 'sugLower', good: false });
  if (!/[0-9]/.test(pw)) list.push({ key: 'sugNumber', good: false });
  if (!/[^A-Za-z0-9]/.test(pw)) list.push({ key: 'sugSymbol', good: false });
  if (flags.repeated) list.push({ key: 'sugRepeated', good: false });
  if (flags.sequential) list.push({ key: 'sugSequential', good: false });
  if (flags.common) list.push({ key: 'sugCommon', good: false });

  if (list.length === 0) list.push({ key: 'sugGood', good: true });

  return list;
}

function handleAnalyze() {
  const pw = analyzeInput.value;
  if (!pw) {
    results.hidden = true;
    return;
  }

  const entropy = calculateEntropy(pw);
  const repeated = hasRepeatedChars(pw);
  const sequential = hasSequentialChars(pw);
  const common = containsCommonPassword(pw);
  const penalties = (repeated ? 1 : 0) + (sequential ? 1 : 0) + (common ? 2 : 0);

  const strength = classifyStrength(entropy, penalties);
  const crackTime = formatCrackTime(Math.max(entropy - penalties * 12, 0));
  const pool = estimatePoolSize(pw);

  results.hidden = false;

  strengthLabelEl.textContent = t(strength.key);
  strengthLabelEl.style.color = strength.color;
  strengthFill.style.width = strength.pct + '%';
  strengthFill.style.background = strength.color;

  entropyValue.textContent = Math.round(entropy);
  const gaugeMax = 128;
  const ratio = Math.min(entropy / gaugeMax, 1);
  const circumference = 157;
  entropyGaugeFill.style.strokeDashoffset = String(circumference * (1 - ratio));
  entropyGaugeFill.style.stroke = strength.color;

  crackTimeEl.textContent = crackTime;
  metaLength.textContent = pw.length + ' ' + t('charsUnit');
  metaPool.textContent = pool + ' ' + t('symbolsUnit');

  const suggestions = buildSuggestions(pw, { repeated, sequential, common });
  suggestionsList.innerHTML = '';
  suggestions.forEach(s => {
    const li = document.createElement('li');
    li.textContent = t(s.key);
    if (s.good) li.classList.add('suggestion-good');
    suggestionsList.appendChild(li);
  });
}

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  langToggle.textContent = t('langToggleLabel');
}

function refreshDynamicText() {
  if (!currentPassword) {
    pwChars.innerHTML = `<span class="pw-placeholder">${t('pwPlaceholder')}</span>`;
  }
  renderHistory();
  if (!results.hidden && analyzeInput.value) {
    handleAnalyze();
  }
}

function setLanguage(lang) {
  currentLang = lang;
  applyStaticTranslations();
  refreshDynamicText();
}

themeToggle.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

langToggle.addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener('click', handleGenerate);

copyBtn.addEventListener('click', () => {
  if (!currentPassword) return;
  copyText(currentPassword, null);
});

analyzeBtn.addEventListener('click', handleAnalyze);
analyzeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleAnalyze();
});

toggleVisBtn.addEventListener('click', () => {
  const isPassword = analyzeInput.type === 'password';
  analyzeInput.type = isPassword ? 'text' : 'password';
  toggleVisBtn.textContent = isPassword ? '🙈' : '👁';
});

[optUpper, optLower, optNumbers, optSymbols].forEach(cb => {
  cb.addEventListener('change', () => {
    const checkedCount = [optUpper, optLower, optNumbers, optSymbols].filter(c => c.checked).length;
    if (checkedCount === 0) cb.checked = true;
  });
});

applyTheme('dark');
applyStaticTranslations();
renderHistory();
