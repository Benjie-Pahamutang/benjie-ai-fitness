// ==========================================
// 1. APPLICATION STATE MANAGEMENT & CONFIGURATION
// ==========================================
const appState = {
  user: {
    name: 'Guest User',
    email: '',
    gender: 'men',
    healthCondition: 'none',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    level: 1,
    xp: 0,
    maxXp: 1000,
    streakDays: 0,
    completedWorkouts: 0,
    unlockedAchievements: 0,
    currentDayOffset: 0
  },
  currentView: 'dashboard',
  timer: {
    duration: 60,
    remaining: 60,
    isRunning: false,
    intervalId: null
  },
  exercises: [],
  exerciseDatabase: {
    men: {
      none: [
        { id: 1, name: 'Warm Up', detail: '5 - 10 minutes', completed: false, image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600', tip: "Light cardio and mobility warm-up to prepare your joints and muscles." },
        { id: 2, name: 'Push Ups', detail: '3 sets x 15 reps', completed: false, image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&q=80&w=600', tip: "Keep your core tight and elbows at a 45-degree angle during Push Ups!" },
        { id: 3, name: 'Bench Press', detail: '4 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', tip: "Control the weight on the lower phase and explode upward for maximum chest activation." },
        { id: 4, name: 'Dumbbell Fly', detail: '3 sets x 15 reps', completed: false, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600', tip: "Maintain a slight bend in your elbows and focus on stretching the chest." },
        { id: 5, name: 'Cool Down', detail: '5 - 10 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Deep breathing stretches to lower heart rate and assist muscle recovery." }
      ],
      heart: [
        { id: 1, name: 'Gentle Warm-up', detail: '5 - 10 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Gradually raise your heart rate with controlled breathing." },
        { id: 2, name: 'Brisk Walking', detail: '15 minutes', completed: false, image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600', tip: "Maintain a steady, comfortable pace where you can easily speak." },
        { id: 3, name: 'Seated Dumbbell Press', detail: '3 sets x 10 reps (Light)', completed: false, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600', tip: "Seated movements reduce cardiovascular strain while training shoulders safely." },
        { id: 4, name: 'Resistance Band Row', detail: '3 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', tip: "Smooth tension without straining or holding your breath." },
        { id: 5, name: 'Breathing Cool Down', detail: '5 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Slow, deep abdominal breaths to stabilize blood pressure." }
      ],
      joints: [
        { id: 1, name: 'Mobility Warm-up', detail: '5 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Gentle joint rotations to lubricate hips and knees." },
        { id: 2, name: 'Cable Chest Fly', detail: '3 sets x 15 reps', completed: false, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600', tip: "Constant cable tension avoids hard impact on wrist and elbow joints." },
        { id: 3, name: 'Incline Machine Press', detail: '3 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', tip: "Guided movement tracks keep strain off stabilizer joints." },
        { id: 4, name: 'Seated Leg Extensions', detail: '3 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600', tip: "Target quads without heavy spinal compression." },
        { id: 5, name: 'Joint Stretch', detail: '5 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Hold gentle static stretches without forcing movement range." }
      ]
    },
    women: {
      none: [
        { id: 1, name: 'Dynamic Stretch', detail: '5 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Prepare joints for lower body work." },
        { id: 2, name: 'Glute Hip Thrusts', detail: '4 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600', tip: "Drive through heels and squeeze glutes at peak height." },
        { id: 3, name: 'Goblet Squats', detail: '3 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', tip: "Keep chest proud and lower hips smoothly." },
        { id: 4, name: 'Dumbbell Shoulder Press', detail: '3 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600', tip: "Press overhead under full control." },
        { id: 5, name: 'Cool Down', detail: '5 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Hamstring and glute stretching routine." }
      ],
      heart: [
        { id: 1, name: 'Gentle Walk', detail: '10 minutes', completed: false, image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600', tip: "Safe aerobic heart rate build-up." },
        { id: 2, name: 'Stationary Cycling', detail: '15 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Controlled aerobic output without spiking blood pressure." },
        { id: 3, name: 'Light Dumbbell Deadlifts', detail: '3 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', tip: "Hinge hips naturally using light resistance." },
        { id: 4, name: 'Breathing Cool Down', detail: '5 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Steady breathing relaxation." }
      ],
      joints: [
        { id: 1, name: 'Pool/Band Warmup', detail: '5 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Zero-impact movement prep." },
        { id: 2, name: 'Bodyweight Glute Bridges', detail: '3 sets x 15 reps', completed: false, image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600', tip: "Low joint impact glute activation." },
        { id: 3, name: 'Seated Leg Extensions', detail: '3 sets x 12 reps', completed: false, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', tip: "Controlled knee motion with supported back." },
        { id: 4, name: 'Cool Down', detail: '5 minutes', completed: false, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', tip: "Gentle range of motion recovery." }
      ]
    }
  },
  plans: {
    men: {
      none: [
        { key: 'push', title: 'Monday - Push Split', desc: 'Focuses on chest hypertrophy, shoulder stability, and triceps power.', exercises: [{ name: 'Warm Up', detail: '5 mins' }, { name: 'Barbell Bench Press', detail: '4 x 10' }, { name: 'Incline Dumbbell Press', detail: '3 x 12' }] },
        { key: 'pull', title: 'Wednesday - Pull Split', desc: 'Builds upper back width, thick lats, and bicep strength.', exercises: [{ name: 'Warm Up', detail: '5 mins' }, { name: 'Lat Pulldowns', detail: '4 x 12' }, { name: 'Barbell Rows', detail: '4 x 10' }] },
        { key: 'legs', title: 'Friday - Leg & Core', desc: 'Develops lower body power and core endurance.', exercises: [{ name: 'Squats', detail: '4 x 8' }, { name: 'Romanian Deadlifts', detail: '3 x 10' }, { name: 'Leg Press', detail: '3 x 12' }] }
      ],
      heart: [
        { key: 'low_cardio', title: 'Low-Impact Cardio & Core', desc: 'Controlled heart-rate training for safe endurance.', exercises: [{ name: 'Brisk Walking', detail: '15 mins' }, { name: 'Seated Dumbbell Press', detail: '3 x 10' }] },
        { key: 'light_strength', title: 'Light Resistance', desc: 'Preserves muscle tone without excessive strain.', exercises: [{ name: 'Bodyweight Squats', detail: '3 x 10' }, { name: 'Band Row', detail: '3 x 12' }] }
      ],
      joints: [
        { key: 'joint_safe', title: 'Joint-Friendly Hypertrophy', desc: 'Zero impact exercises using resistance cables and bodyweight.', exercises: [{ name: 'Cable Chest Flys', detail: '3 x 15' }, { name: 'Incline Machine Press', detail: '3 x 12' }] }
      ]
    },
    women: {
      none: [
        { key: 'glutes', title: 'Monday - Lower Body & Glutes', desc: 'Focuses on lower body shaping and core stability.', exercises: [{ name: 'Hip Thrusts', detail: '4 x 12' }, { name: 'Goblet Squats', detail: '3 x 12' }, { name: 'Walking Lunges', detail: '3 x 15' }] },
        { key: 'upper', title: 'Wednesday - Upper & Tone', desc: 'Sculpts shoulders, arms, and upper back.', exercises: [{ name: 'Dumbbell Shoulder Press', detail: '3 x 12' }, { name: 'Lat Pulldowns', detail: '3 x 12' }] },
        { key: 'fullbody', title: 'Friday - Full Body HIIT', desc: 'Calorie burn and full-body endurance conditioning.', exercises: [{ name: 'Kettlebell Swings', detail: '4 x 15' }, { name: 'Plank Holds', detail: '3 x 45s' }] }
      ],
      heart: [
        { key: 'safe_sculpt', title: 'Low-Impact Tone', desc: 'Aerobic exercise designed for heart safety.', exercises: [{ name: 'Stationary Cycling', detail: '15 mins' }, { name: 'Light Dumbbell Deadlifts', detail: '3 x 12' }] }
      ],
      joints: [
        { key: 'low_joint', title: 'Pool/Band Lower Body', desc: 'Low joint strain focusing on flexibility and strength.', exercises: [{ name: 'Glute Bridges', detail: '3 x 15' }, { name: 'Seated Leg Extensions', detail: '3 x 12' }] }
      ]
    }
  }
};

// Local offline fallback knowledge base for fitness topics
const offlineResponses = {
  cardio: "Cardio (cardiovascular exercise) increases your heart rate and improves endurance! Examples include running, cycling, rowing, and jumping rope.",
  run: "Running 20km after a lifting session requires high energy. Ensure you stay hydrated, restore electrolytes, and consume protein and carbohydrates for muscle recovery.",
  workout: "Consistency is key! Maintain proper form, track progressive overload, and rest 48 hours per trained muscle group.",
  diet: "Focus on a balanced diet containing lean protein, complex carbs, and healthy fats to properly fuel your workouts.",
  default: "⚡ **[Offline Mode Active]** I can assist with local fitness guidance and exercise tips. Reconnect to the internet for live AI responses!"
};

function loadExercisesForUserProfile() {
  const gender = appState.user.gender || 'men';
  const health = appState.user.healthCondition || 'none';

  const category = appState.exerciseDatabase[gender] || appState.exerciseDatabase['men'];
  const list = category[health] || category['none'];

  appState.exercises = JSON.parse(JSON.stringify(list));
}

// ==========================================
// 2. DOM ELEMENTS & INITIALIZATION
// ==========================================
const DOM = {
  navItems: document.querySelectorAll('.nav-item'),
  views: document.querySelectorAll('.view-panel'),
  viewTitle: document.getElementById('viewTitle'),
  viewSubtitle: document.getElementById('viewSubtitle'),
  
  // Profile / Header
  sidebarUserName: document.getElementById('sidebarUserName'),
  userAvatarImg: document.getElementById('userAvatarImg'),
  streakDisplay: document.getElementById('streakDisplay'),
  workoutsDisplay: document.getElementById('workoutsDisplay'),
  achievementsDisplay: document.getElementById('achievementsDisplay'),
  userLevelDisplay: document.getElementById('userLevelDisplay'),
  xpProgressBar: document.getElementById('xpProgressBar'),
  xpTextDisplay: document.getElementById('xpTextDisplay'),
  
  // Coach & Dashboard
  coachBubble: document.getElementById('coachBubble'),
  mainAvatarImage: document.getElementById('mainAvatarImage'),
  todayWorkoutTitle: document.getElementById('todayWorkoutTitle'),
  dashboardExerciseList: document.getElementById('dashboardExerciseList'),
  quickActionBtns: document.querySelectorAll('.action-btn'),
  
  // Timer Elements
  timerDisplay: document.getElementById('timerDisplay'),
  timerControlBtn: document.getElementById('timerControlBtn'),
  timerProgress: document.getElementById('timerProgress'),
  
  // Chat Elements
  chatMessages: document.getElementById('chatMessages'),
  chatInput: document.getElementById('chatInput'),
  sendBtn: document.getElementById('sendBtn'),
  micBtn: document.getElementById('micBtn'),
  statusOnline: document.querySelector('.status-online'),
  
  // Workout Buttons
  startWorkoutBtn: document.getElementById('startWorkoutBtn'),
  nextDayBtn: document.getElementById('nextDayBtn'),

  // Plan Details Modal
  planModal: document.getElementById('planModal'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  modalTitle: document.getElementById('modalTitle'),
  modalDescription: document.getElementById('modalDescription'),
  modalExerciseList: document.getElementById('modalExerciseList'),
  weeklyPlansGrid: document.getElementById('weeklyPlansGrid'),
  planFilterNotice: document.getElementById('planFilterNotice'),

  // Account Modal & Avatar Controls
  accountModal: document.getElementById('accountModal'),
  openAccountModalBtn: document.getElementById('openAccountModalBtn'),
  closeAccountModalBtn: document.getElementById('closeAccountModalBtn'),
  accountForm: document.getElementById('accountForm'),
  userNameInput: document.getElementById('userNameInput'),
  userEmailInput: document.getElementById('userEmailInput'),
  userGenderSelect: document.getElementById('userGenderSelect'),
  userHealthSelect: document.getElementById('userHealthSelect'),
  userAvatarInput: document.getElementById('userAvatarInput'),
  deleteAccountBtn: document.getElementById('deleteAccountBtn')
};

document.addEventListener('DOMContentLoaded', () => {
  loadExercisesForUserProfile();
  setupConnectionMonitoring();
  setupNavigation();
  setupQuickActions();
  setupTimer();
  setupChat();
  setupWorkoutPlanModal();
  setupExerciseInteractivity();
  setupAccountManagement();
  setupNextDayFeature();
  updateDynamicDate();
  renderExercises();
  renderWeeklyPlans();
  updateUIStats();
});

// ==========================================
// 3. NETWORK MONITORING (ONLINE / OFFLINE)
// ==========================================
function setupConnectionMonitoring() {
  updateConnectionUI();
  window.addEventListener('online', updateConnectionUI);
  window.addEventListener('offline', updateConnectionUI);
}

function updateConnectionUI() {
  const statusElement = DOM.statusOnline || document.querySelector('.status-online');
  if (!statusElement) return;

  if (navigator.onLine) {
    statusElement.innerHTML = '● Online';
    statusElement.style.color = 'var(--brand-green)';
  } else {
    statusElement.innerHTML = '● Offline';
    statusElement.style.color = 'var(--danger-red)';
  }
}

// ==========================================
// 4. DATE & HISTORY UTILITIES
// ==========================================
function getCurrentWorkoutDate() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + appState.user.currentDayOffset);
  return targetDate;
}

function updateDynamicDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const targetDate = getCurrentWorkoutDate();
  const dateFormatted = targetDate.toLocaleDateString('en-US', options);
  
  if (DOM.todayWorkoutTitle) {
    DOM.todayWorkoutTitle.innerText = `WORKOUT ROUTINE (${dateFormatted.toUpperCase()})`;
  }
}

function logToHistory(message, detail = "Completed exercise set") {
  const historyContainer = document.getElementById('historyListContainer');
  if (!historyContainer) return;

  const placeholder = historyContainer.querySelector('p');
  if (placeholder && placeholder.innerText.includes('No workout history')) {
    historyContainer.innerHTML = '';
  }

  const targetDate = getCurrentWorkoutDate();
  const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = targetDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const li = document.createElement('li');
  li.style.cssText = "background-color: var(--bg-dark); border: 1px solid var(--border-color); padding: 12px; border-radius: 10px; font-size: 12px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;";
  li.innerHTML = `
    <div>
      <strong style="color: var(--brand-green);">${message}</strong>
      <p style="margin: 2px 0 0 0; color: var(--text-sub); font-size: 11px;">${detail}</p>
    </div>
    <span style="color: var(--text-sub); font-size: 11px;">${dateString}, ${timeString}</span>
  `;
  historyContainer.prepend(li);
}

// ==========================================
// 5. UI STATS & ACHIEVEMENTS RENDERER
// ==========================================
function updateUIStats() {
  if (DOM.sidebarUserName) DOM.sidebarUserName.innerText = appState.user.name;
  
  if (DOM.userAvatarImg && appState.user.avatar) {
    DOM.userAvatarImg.src = appState.user.avatar;
  }

  if (DOM.streakDisplay) DOM.streakDisplay.innerText = `${appState.user.streakDays} days`;
  if (DOM.workoutsDisplay) DOM.workoutsDisplay.innerText = `${appState.user.completedWorkouts} completed`;
  if (DOM.achievementsDisplay) DOM.achievementsDisplay.innerText = `${appState.user.unlockedAchievements} unlocked`;
  if (DOM.userLevelDisplay) DOM.userLevelDisplay.innerText = `Level ${appState.user.level}`;

  if (DOM.xpProgressBar && DOM.xpTextDisplay) {
    const progressPercent = Math.min((appState.user.xp / appState.user.maxXp) * 100, 100);
    DOM.xpProgressBar.style.width = `${progressPercent}%`;
    DOM.xpTextDisplay.innerText = `${appState.user.xp} / ${appState.user.maxXp} XP`;
  }

  const progressStreakText = document.getElementById('progressStreakText');
  const progressWorkoutsText = document.getElementById('progressWorkoutsText');
  if (progressStreakText) progressStreakText.innerText = `${appState.user.streakDays} Days`;
  if (progressWorkoutsText) progressWorkoutsText.innerText = `${appState.user.completedWorkouts} Sessions`;

  updateAchievementsView();
}

function updateAchievementsView() {
  const achievementsGrid = document.getElementById('achievementsGrid');
  if (!achievementsGrid) return;

  if (appState.user.unlockedAchievements === 0) {
    achievementsGrid.innerHTML = `<p style="color: var(--text-sub); font-style: italic;">No achievements unlocked yet. Complete workouts to earn trophies!</p>`;
    return;
  }

  let html = '';
  if (appState.user.unlockedAchievements >= 1) {
    html += `
      <div class="inner-box">
        <i class="fa-solid fa-fire brand-color icon-lg"></i>
        <h4>First Step</h4>
        <p>Started your first workout session!</p>
      </div>`;
  }
  if (appState.user.unlockedAchievements >= 2) {
    html += `
      <div class="inner-box">
        <i class="fa-solid fa-trophy brand-color icon-lg"></i>
        <h4>Workout Champ</h4>
        <p>Completed 100% of planned routine!</p>
      </div>`;
  }
  if (appState.user.unlockedAchievements >= 3) {
    html += `
      <div class="inner-box">
        <i class="fa-solid fa-bolt brand-color icon-lg"></i>
        <h4>Streak Master</h4>
        <p>Maintained active daily workout streak!</p>
      </div>`;
  }

  achievementsGrid.innerHTML = html;
}

// ==========================================
// 6. NAVIGATION & VIEW SWITCHING
// ==========================================
function setupNavigation() {
  DOM.navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view') || item.getAttribute('href')?.replace('#', '');
      if (targetView) switchView(targetView);
    });
  });
}

function switchView(viewName) {
  appState.currentView = viewName;
  
  DOM.navItems.forEach(nav => {
    const navView = nav.getAttribute('data-view') || nav.getAttribute('href')?.replace('#', '');
    if (navView === viewName) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });

  DOM.views.forEach(panel => panel.classList.remove('active-view'));

  const activePanel = document.getElementById(`${viewName}-view`) || document.getElementById(viewName);
  if (activePanel) {
    activePanel.classList.add('active-view');
  }

  const titles = {
    'dashboard': { title: `Good Day, ${appState.user.name}! 💪`, sub: "Let's work towards your fitness goals today!" },
    'workout-plan': { title: 'Workout Plan', sub: 'Your customized weekly fitness structure.' },
    'exercises': { title: 'Exercise Library', sub: 'Form guides, video tutorials, and muscle targets.' },
    'progress': { title: 'Progress Tracker', sub: 'Monitor strength trends and body measurements.' },
    'nutrition': { title: 'Nutrition & Macros', sub: 'Fuel your workouts with optimal nutrition.' },
    'history': { title: 'Workout History', sub: 'Review all logged workouts and past achievements.' },
    'reminders': { title: 'Coach Reminders', sub: 'Custom alarms for hydration and scheduled workouts.' },
    'achievements': { title: 'Achievements', sub: 'Unlock badges by hitting new personal records.' },
    'settings': { title: 'Settings', sub: 'Customize coach voice, alerts, and preferences.' }
  };

  if (titles[viewName] && DOM.viewTitle && DOM.viewSubtitle) {
    DOM.viewTitle.innerText = titles[viewName].title;
    DOM.viewSubtitle.innerText = titles[viewName].sub;
  }
}

// ==========================================
// 7. WEEKLY PLANS & MODAL SYSTEM
// ==========================================
function renderWeeklyPlans() {
  if (!DOM.weeklyPlansGrid) return;

  const gender = appState.user.gender || 'men';
  const health = appState.user.healthCondition || 'none';
  const availablePlans = (appState.plans[gender] && appState.plans[gender][health]) 
    ? appState.plans[gender][health] 
    : appState.plans['men']['none'];

  if (DOM.planFilterNotice) {
    DOM.planFilterNotice.innerText = `Tailored for: ${gender.toUpperCase()} | Medical Filter: ${health.toUpperCase()}`;
  }
  DOM.weeklyPlansGrid.innerHTML = '';

  availablePlans.forEach(plan => {
    const card = document.createElement('div');
    card.className = 'inner-box';
    card.innerHTML = `
      <h4>${plan.title}</h4>
      <p>${plan.desc}</p>
      <button class="btn-primary btn-sm view-plan-details-btn" data-key="${plan.key}">View Details</button>
    `;
    DOM.weeklyPlansGrid.appendChild(card);
  });

  document.querySelectorAll('.view-plan-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const planKey = btn.getAttribute('data-key');
      const selectedPlan = availablePlans.find(p => p.key === planKey);
      if (selectedPlan) openPlanModal(selectedPlan);
    });
  });
}

function setupWorkoutPlanModal() {
  if (DOM.closeModalBtn) DOM.closeModalBtn.addEventListener('click', closePlanModal);
  if (DOM.planModal) {
    DOM.planModal.addEventListener('click', (e) => {
      if (e.target === DOM.planModal) closePlanModal();
    });
  }
}

function openPlanModal(plan) {
  if (DOM.modalTitle) DOM.modalTitle.innerText = plan.title;
  if (DOM.modalDescription) DOM.modalDescription.innerText = plan.desc;

  if (DOM.modalExerciseList) {
    DOM.modalExerciseList.innerHTML = '';
    plan.exercises.forEach(ex => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${ex.name}</strong> <span>${ex.detail}</span>`;
      DOM.modalExerciseList.appendChild(li);
    });
  }

  if (DOM.planModal) DOM.planModal.classList.add('active');
}

function closePlanModal() {
  if (DOM.planModal) DOM.planModal.classList.remove('active');
}

// ==========================================
// 8. QUICK ACTIONS & WORKOUT TRACKER
// ==========================================
function setupQuickActions() {
  DOM.quickActionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      if (action === 'ask-coach') {
        if (DOM.chatInput) DOM.chatInput.focus();
      } else {
        switchView(action);
      }
    });
  });
}

function setupExerciseInteractivity() {
  if (DOM.startWorkoutBtn) {
    DOM.startWorkoutBtn.addEventListener('click', () => {
      if (appState.user.completedWorkouts === 0 && appState.user.streakDays === 0) {
        appState.user.streakDays = 1;
        appState.user.unlockedAchievements = 1;
        addChatMessage("Bot", "🏆 First Achievement Unlocked: Started your first workout!");
      }
      
      const warmUpEx = appState.exercises.find(e => e.id === 1) || appState.exercises[0];
      if (warmUpEx) updateDisplayForExercise(warmUpEx);

      startTimer(60);
      addXP(200);
      updateUIStats();
      addChatMessage("Bot", "Workout routine started! Focus on your form!");
    });
  }
}

function setupNextDayFeature() {
  let btnContainer = document.querySelector('.exercise-tracker-card') || document.getElementById('dashboard-view');
  if (btnContainer && !document.getElementById('nextDayBtn')) {
    const nextBtn = document.createElement('button');
    nextBtn.id = 'nextDayBtn';
    nextBtn.className = 'btn-secondary';
    nextBtn.style.cssText = 'width: 100%; margin-top: 10px; background: #1f2937; border: 1px solid var(--brand-green); color: var(--brand-green); padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;';
    nextBtn.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> Complete Day & Proceed to Next Workout`;
    btnContainer.appendChild(nextBtn);
    DOM.nextDayBtn = nextBtn;
  }

  if (DOM.nextDayBtn) {
    DOM.nextDayBtn.addEventListener('click', proceedToNextDay);
  }
}

function proceedToNextDay() {
  const completedCount = appState.exercises.filter(ex => ex.completed).length;

  if (completedCount === 0) {
    alert("Please complete at least one exercise before advancing to the next day!");
    return;
  }

  appState.user.streakDays += 1;
  appState.user.currentDayOffset += 1;
  appState.user.completedWorkouts += 1;

  const targetDateStr = getCurrentWorkoutDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  logToHistory(`📅 DAY ARCHIVED (${completedCount}/${appState.exercises.length} Done)`, `Advanced to next day routine (${targetDateStr})`);

  appState.exercises = appState.exercises.map(ex => ({
    ...ex,
    completed: false
  }));

  addXP(300);
  
  updateDynamicDate();
  renderExercises();
  updateUIStats();

  addChatMessage("Bot", `📅 Outstanding work! Day session completed. Ready for your next workout on ${targetDateStr}!`);
}

function renderExercises() {
  if (!DOM.dashboardExerciseList) return;

  DOM.dashboardExerciseList.innerHTML = '';
  appState.exercises.forEach((ex) => {
    const li = document.createElement('li');
    li.className = `exercise-item ${ex.completed ? 'done' : ''}`;
    li.style.cursor = 'pointer';
    li.innerHTML = `
      <span class="step-num">${ex.id}</span>
      <div class="ex-info">
        <strong>${ex.name}</strong>
        <p>${ex.detail}</p>
      </div>
      <i class="fa-solid ${ex.completed ? 'fa-circle-check' : 'fa-circle-notch'}" style="margin-left:auto; color:${ex.completed ? 'var(--brand-green)' : '#4b5563'}"></i>
    `;

    li.addEventListener('click', () => toggleExercise(ex.id));
    DOM.dashboardExerciseList.appendChild(li);
  });
}

function updateDisplayForExercise(ex) {
  if (DOM.mainAvatarImage) {
    DOM.mainAvatarImage.src = ex.image;
  }
  if (DOM.coachBubble) {
    DOM.coachBubble.innerHTML = `
      <strong>Coach Benjie (${ex.name.toUpperCase()}):</strong><br>
      ${ex.tip}
    `;
  }
}

function toggleExercise(id) {
  const selectedEx = appState.exercises.find(ex => ex.id === id);

  if (selectedEx) {
    updateDisplayForExercise(selectedEx);
  }

  appState.exercises = appState.exercises.map(ex => {
    if (ex.id === id) {
      const updated = !ex.completed;
      if (updated) {
        addXP(150);
        startTimer(60);
        logToHistory(`Completed: ${ex.name} (${ex.detail})`);
      }
      return { ...ex, completed: updated };
    }
    return ex;
  });

  renderExercises();
  checkWorkoutCompletion();
}

function checkWorkoutCompletion() {
  const allDone = appState.exercises.every(ex => ex.completed);
  if (allDone) {
    appState.user.unlockedAchievements = Math.max(appState.user.unlockedAchievements, 2);
    addXP(500);
    
    logToHistory("🎉 FULL ROUTINE COMPLETED!", "100% Reps finished for today's session!");
    addChatMessage("Bot", "🎉 Amazing job! You finished today's workout! Click 'Complete Day & Proceed to Next Workout' whenever you're ready for the next day.");
    updateUIStats();
  }
}

function addXP(amount) {
  appState.user.xp += amount;
  if (appState.user.xp >= appState.user.maxXp) {
    appState.user.level += 1;
    appState.user.xp -= appState.user.maxXp;
    addChatMessage('Bot', `🎉 LEVEL UP! You reached Level ${appState.user.level}!`);
  }
  updateUIStats();
}

// ==========================================
// 9. REST TIMER CONTROLLER
// ==========================================
function setupTimer() {
  if (!DOM.timerControlBtn) return;

  DOM.timerControlBtn.addEventListener('click', () => {
    if (appState.timer.isRunning) {
      pauseTimer();
    } else {
      startTimer(appState.timer.remaining);
    }
  });
}

function startTimer(seconds = 60) {
  clearInterval(appState.timer.intervalId);
  appState.timer.remaining = seconds;
  appState.timer.duration = seconds;
  appState.timer.isRunning = true;
  if (DOM.timerControlBtn) DOM.timerControlBtn.innerHTML = `<i class="fa-solid fa-pause"></i> PAUSE`;

  updateTimerDisplay();

  appState.timer.intervalId = setInterval(() => {
    appState.timer.remaining--;
    updateTimerDisplay();

    if (appState.timer.remaining <= 0) {
      clearInterval(appState.timer.intervalId);
      appState.timer.isRunning = false;
      if (DOM.timerControlBtn) DOM.timerControlBtn.innerHTML = `<i class="fa-solid fa-play"></i> START`;
      addChatMessage("Bot", "Rest time over! Focus on your next set!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(appState.timer.intervalId);
  appState.timer.isRunning = false;
  if (DOM.timerControlBtn) DOM.timerControlBtn.innerHTML = `<i class="fa-solid fa-play"></i> RESUME`;
}

function updateTimerDisplay() {
  const mins = Math.floor(appState.timer.remaining / 60);
  const secs = appState.timer.remaining % 60;
  const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  
  if (DOM.timerDisplay) DOM.timerDisplay.innerText = formatted;

  if (DOM.timerProgress) {
    const fraction = appState.timer.remaining / appState.timer.duration;
    const strokeDashoffset = 283 - (fraction * 283);
    DOM.timerProgress.style.strokeDashoffset = strokeDashoffset;
  }
}

// ==========================================
// 10. CHATBOT ENGINE (LOCAL SERVER PROXY + FAILOVER FALLBACK)
// ==========================================
function setupChat() {
  if (DOM.sendBtn) {
    DOM.sendBtn.addEventListener('click', handleUserSendMessage);
  }

  if (DOM.chatInput) {
    DOM.chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleUserSendMessage();
    });
  }

  if (DOM.micBtn) {
    DOM.micBtn.addEventListener('click', () => {
      addChatMessage("Bot", "Voice recognition active! Listening...");
    });
  }
}

async function handleUserSendMessage() {
  if (!DOM.chatInput) return;
  const userText = DOM.chatInput.value.trim();
  if (!userText) return;

  // Render User Message
  addChatMessage("User", userText);
  DOM.chatInput.value = '';

  const typingBubble = addChatMessage("Bot", "Coach Benjie is thinking...");
  if (typingBubble) typingBubble.classList.add('typing');

  try {
    const aiResponse = await fetchGroqAIResponse(userText);
    if (typingBubble) typingBubble.remove();
    addChatMessage("Bot", aiResponse);
  } catch (error) {
    if (typingBubble) typingBubble.remove();
    console.warn(`Express server or Groq API offline/failing. Switching to local response: ${error.message}`);
    const fallbackReply = getOfflineFallbackResponse(userText);
    addChatMessage("Bot", fallbackReply);
  }
}

async function fetchGroqAIResponse(prompt) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: prompt }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.details || data.error || 'API Request Failed');
  }

  return data.reply;
}

function getOfflineFallbackResponse(input) {
  const query = input.toLowerCase();

  if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
    return `Hey ${appState.user.name}! Ready to get today's session underway?`;
  }
  if (query.includes('cardio')) return offlineResponses.cardio;
  if (query.includes('run') || query.includes('kilometer') || query.includes('20km')) return offlineResponses.run;
  if (query.includes('diet') || query.includes('eat') || query.includes('food') || query.includes('protein')) return offlineResponses.diet;
  if (query.includes('workout') || query.includes('exercise')) return offlineResponses.workout;
  if (query.includes('done') || query.includes('finished')) return "Great work! Keep finishing your sets or click 'Complete Day & Proceed to Next Workout' to advance!";

  return offlineResponses.default;
}

function addChatMessage(sender, text) {
  if (!DOM.chatMessages) return null;

  const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender.toLowerCase()}`;

  const formattedText = text.replace(/\n/g, '<br>');
  bubble.innerHTML = `<p>${formattedText}</p><span class="timestamp">${timeString}</span>`;

  DOM.chatMessages.appendChild(bubble);
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;

  return bubble;
}

// ==========================================
// 11. ACCOUNT MODAL & AVATAR SELECTION SYSTEM
// ==========================================
function setupAccountManagement() {
  let selectedAvatarUrl = appState.user.avatar;

  if (DOM.openAccountModalBtn) {
    DOM.openAccountModalBtn.addEventListener('click', () => {
      if (DOM.userNameInput) DOM.userNameInput.value = appState.user.name === 'Guest User' ? '' : appState.user.name;
      if (DOM.userEmailInput) DOM.userEmailInput.value = appState.user.email || '';
      if (DOM.userGenderSelect) DOM.userGenderSelect.value = appState.user.gender || 'men';
      if (DOM.userHealthSelect) DOM.userHealthSelect.value = appState.user.healthCondition || 'none';
      
      // Sync active state in preset tiles to current user avatar
      selectedAvatarUrl = appState.user.avatar;
      const avatarOptions = document.querySelectorAll('.avatar-option');
      avatarOptions.forEach(opt => {
        if (opt.getAttribute('data-avatar') === selectedAvatarUrl) {
          opt.classList.add('active');
        } else {
          opt.classList.remove('active');
        }
      });

      if (DOM.accountModal) DOM.accountModal.classList.add('active');
    });
  }

  if (DOM.closeAccountModalBtn) {
    DOM.closeAccountModalBtn.addEventListener('click', () => {
      if (DOM.accountModal) DOM.accountModal.classList.remove('active');
    });
  }

  // Preset Avatar Selection Listeners
  const avatarOptions = document.querySelectorAll('.avatar-option');
  avatarOptions.forEach(option => {
    option.addEventListener('click', () => {
      avatarOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      selectedAvatarUrl = option.getAttribute('data-avatar');
    });
  });

  // Custom Image Upload Listener
  if (DOM.userAvatarInput) {
    DOM.userAvatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          selectedAvatarUrl = event.target.result;
          // Unselect preset tile highlights when custom file is uploaded
          avatarOptions.forEach(opt => opt.classList.remove('active'));
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Account Form Submission
  if (DOM.accountForm) {
    DOM.accountForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = DOM.userNameInput ? (DOM.userNameInput.value.trim() || 'Guest User') : 'Guest User';
      const email = DOM.userEmailInput ? DOM.userEmailInput.value.trim() : '';
      const gender = DOM.userGenderSelect ? DOM.userGenderSelect.value : 'men';
      const health = DOM.userHealthSelect ? DOM.userHealthSelect.value : 'none';

      appState.user.name = name;
      appState.user.email = email;
      appState.user.gender = gender;
      appState.user.healthCondition = health;
      appState.user.avatar = selectedAvatarUrl;

      if (DOM.accountModal) DOM.accountModal.classList.remove('active');

      loadExercisesForUserProfile();
      
      const warmUpEx = appState.exercises[0];
      if (warmUpEx) updateDisplayForExercise(warmUpEx);

      updateUIStats();
      renderExercises();
      renderWeeklyPlans();
      switchView('dashboard');

      addChatMessage("Bot", `Account updated! Welcome ${name}, your profile and custom workout filter (${gender.toUpperCase()} / ${health.toUpperCase()}) have been applied.`);
    });
  }

  if (DOM.deleteAccountBtn) {
    DOM.deleteAccountBtn.addEventListener('click', deleteAccount);
  }
}

function deleteAccount() {
  const confirmed = confirm(
    "Are you sure you want to delete your account? All progress, XP, and streaks will be permanently reset!"
  );

  if (!confirmed) return;

  if (appState.timer.intervalId) {
    clearInterval(appState.timer.intervalId);
    appState.timer.isRunning = false;
    if (DOM.timerControlBtn) DOM.timerControlBtn.innerHTML = `<i class="fa-solid fa-play"></i> START`;
  }

  appState.user = {
    name: 'Guest User',
    email: '',
    gender: 'men',
    healthCondition: 'none',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    level: 1,
    xp: 0,
    maxXp: 1000,
    streakDays: 0,
    completedWorkouts: 0,
    unlockedAchievements: 0,
    currentDayOffset: 0
  };

  loadExercisesForUserProfile();

  const warmUpEx = appState.exercises[0];
  if (warmUpEx) updateDisplayForExercise(warmUpEx);

  if (DOM.chatMessages) {
    DOM.chatMessages.innerHTML = '';
  }
  addChatMessage("Bot", "Account reset successfully! Welcome back — please configure your profile to start fresh.");

  const historyContainer = document.getElementById('historyListContainer');
  if (historyContainer) {
    historyContainer.innerHTML = '<p style="color: var(--text-sub); font-style: italic;">No workout history recorded yet.</p>';
  }

  updateDynamicDate();
  renderExercises();
  renderWeeklyPlans();
  updateUIStats();
  switchView('dashboard');
}