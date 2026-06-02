import React, { useState, useMemo, useRef } from 'react';
import { Plane, Search, Loader2, Filter, X, SlidersHorizontal, Sparkles, BaggageClaim } from 'lucide-react';

const INJECTED_CSS = `
  @import url("https://fonts.googleapis.com/css2?family=Material+Icons&family=Open+Sans:wght@400;500;600;700;800;900&display=swap");

  .dv-main-wrapper { display: flex; flex-direction: column; width: 100%; max-width: 1380px; margin: 0 auto; padding: 20px 16px 28px; gap: 18px; }
  @media (min-width: 1024px) { .dv-main-wrapper { flex-direction: row; } }
  .dv-sidebar { display: none; width: 250px; flex-shrink: 0; }
  @media (min-width: 1024px) { .dv-sidebar { display: block; position: sticky; top: 16px; align-self: start; } }
  .dv-content-area { flex: 1; min-width: 0; }
  .dv-filter-card { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 20px; box-shadow: var(--shadow-sm); }
  .dv-filter-section { border-bottom: 1px solid #f3f4f6; padding-bottom: 16px; margin-bottom: 16px; }
  .dv-filter-section:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
  .dv-filter-title { font-size: 14px; font-weight: 800; color: #1f2937; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; }
  .dv-checkbox-label { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #4b5563; margin-bottom: 8px; cursor: pointer; transition: color 0.2s; }
  .dv-checkbox-label:hover { color: #111827; }
  .dv-checkbox-label input { width: 16px; height: 16px; accent-color: var(--reserve-primary); border-radius: 4px; cursor: pointer; }
  .dv-range-input { width: 100%; accent-color: var(--reserve-primary); margin-top: 8px; }

  :root {
    --dv-primary: #0f2b60;
    --dv-primary-600: #143479;
    --dv-primary-100: #e6ebf5;
    --dv-primary-50: #f0f4fb;
    --dv-success: #059669;
    --dv-danger: #dc2626;
    --dv-warning: #d97706;
    --dv-border: #e5e7eb;
    --dv-text: #1f2937;
    --dv-text-muted: #6b7280;
    --dv-text-subtle: #9ca3af;
    --reserve-primary: #428f70;
    --reserve-secondary: #3957a5;
    --reserve-warning: #f2bb1d;
    --lowest-fare: #f2bb1d;
    --lowest-baggage: #67a353;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --shadow-sm: 0 1px 3px rgba(15, 43, 96, 0.06), 0 1px 2px rgba(15, 43, 96, 0.04);
    --shadow-md: 0 4px 12px rgba(15, 43, 96, 0.08);
    --shadow-lg: 0 8px 24px rgba(15, 43, 96, 0.12);
  }

  .dv-app-container * {
    box-sizing: border-box;
  }

  .dv-app-container {
    min-height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(180deg, #f6f8fb 0%, #edf1f6 100%);
    color: #4a5568;
    font-family: "Open Sans", Arial, sans-serif;
  }

  .dv-app-container button { border: 0; font: inherit; }

  .material-icons, .q-icon {
    display: inline-flex; align-items: center; justify-content: center;
    font-family: "Material Icons"; font-weight: normal; font-style: normal;
    font-size: 16px; line-height: 1; letter-spacing: normal; text-transform: none;
    white-space: nowrap; direction: ltr; -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased; font-feature-settings: "liga";
  }

  .dv-root { width: 100%; max-width: 1400px; margin: 0 auto; padding: 16px 0 28px; overflow-x: hidden; }

  /* Search Screen */
  .dv-search-screen { min-height: 100vh; display: flex; align-items: center; padding: 32px 16px; }
  .dv-search-shell { width: 100%; max-width: 980px; margin: 0 auto; }
  .dv-search-heading { margin-bottom: 18px; }
  .dv-search-kicker { display: inline-flex; min-height: 32px; align-items: center; gap: 8px; padding: 6px 12px; border: 1px solid rgba(66, 143, 112, 0.2); border-radius: 999px; background: #ffffff; color: var(--reserve-primary); box-shadow: var(--shadow-sm); font-size: 11px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; }
  .dv-search-title { margin: 12px 0 8px; color: var(--dv-primary); font-size: 40px; font-weight: 900; line-height: 1.05; }
  .dv-search-subtitle { max-width: 640px; margin: 0; color: #64748b; font-size: 14px; font-weight: 700; line-height: 1.5; }
  .dv-search-card { padding: 24px; border: 1px solid rgba(229, 231, 235, 0.92); border-radius: 16px; background: #ffffff; box-shadow: var(--shadow-lg); }
  .dv-search-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .dv-search-field { display: flex; min-width: 0; flex-direction: column; gap: 6px; }
  .dv-search-field--wide { grid-column: span 2; }
  .dv-search-label { color: #64748b; font-size: 11px; font-weight: 900; letter-spacing: 0.04em; text-transform: uppercase; }
  .dv-search-control { width: 100%; min-height: 42px; padding: 9px 12px; border: 1px solid #dbe3ef; border-radius: 10px; background: #f8fafc; color: #1f2937; font: inherit; font-size: 13px; font-weight: 800; outline: none; transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease; }
  .dv-search-control:focus { border-color: var(--reserve-primary); background: #ffffff; box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.14); }
  .dv-passenger-autocomplete { position: relative; display: flex; flex-direction: column; gap: 8px; }
  .dv-passenger-chips { display: flex; min-height: 40px; align-items: center; gap: 8px; flex-wrap: wrap; padding: 8px; border: 1px solid #dbe3ef; border-radius: 12px; background: #f8fafc; }
  .dv-passenger-chip { display: inline-flex; max-width: 260px; min-height: 28px; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 999px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); font-size: 11px; font-weight: 900; }
  .dv-passenger-chip span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dv-passenger-chip button { display: inline-flex; width: 18px; height: 18px; align-items: center; justify-content: center; border-radius: 999px; background: rgba(66, 143, 112, 0.16); color: var(--reserve-primary); cursor: pointer; font-size: 14px; font-weight: 900; line-height: 1; }
  .dv-passenger-empty { color: #94a3b8; font-size: 12px; font-weight: 800; }
  .dv-passenger-input-wrap { position: relative; }
  .dv-passenger-input-wrap .q-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #94a3b8; }
  .dv-passenger-input { padding-left: 36px; }
  .dv-passenger-suggestions { display: grid; gap: 6px; max-height: 220px; overflow-y: auto; padding: 6px; border: 1px solid #dbe3ef; border-radius: 12px; background: #ffffff; box-shadow: var(--shadow-md); }
  .dv-passenger-option { display: flex; min-width: 0; align-items: flex-start; gap: 10px; padding: 10px 12px; border-radius: 10px; background: #ffffff; color: inherit; cursor: pointer; text-align: left; transition: background 0.18s ease; }
  .dv-passenger-option:hover { background: #f8fafc; }
  .dv-passenger-copy { display: flex; min-width: 0; flex-direction: column; gap: 2px; }
  .dv-passenger-name { overflow: hidden; color: #1f2937; font-size: 12px; font-weight: 900; text-overflow: ellipsis; white-space: nowrap; }
  .dv-passenger-meta { overflow: hidden; color: #64748b; font-size: 10px; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }
  .dv-passenger-no-results { padding: 10px 12px; color: #94a3b8; font-size: 12px; font-weight: 800; }
  .dv-passenger-warning { color: #dc2626; font-size: 11px; font-weight: 800; }
  .dv-search-actions { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 20px; padding-top: 18px; border-top: 1px solid #edf2f7; }
  .dv-search-helper { color: #64748b; font-size: 12px; font-weight: 700; line-height: 1.45; }
  .dv-search-submit { display: inline-flex; min-height: 44px; min-width: 210px; align-items: center; justify-content: center; gap: 8px; padding: 11px 18px; border-radius: 10px; background: var(--dv-primary); color: #ffffff; box-shadow: var(--shadow-md); cursor: pointer; font-size: 13px; font-weight: 900; transition: transform 0.18s ease, background 0.18s ease; }
  .dv-search-submit:hover { transform: translateY(-1px); background: var(--dv-primary-600); }
  .dv-search-submit:disabled { cursor: not-allowed; transform: none; background: #cbd5e1; color: #64748b; box-shadow: none; }

  @media (max-width: 768px) {
    .dv-search-screen { align-items: flex-start; padding-top: 24px; }
    .dv-search-title { font-size: 30px; }
    .dv-search-card { padding: 18px; }
    .dv-search-grid { grid-template-columns: 1fr; }
    .dv-search-field--wide { grid-column: span 1; }
    .dv-search-actions { flex-direction: column; align-items: stretch; }
    .dv-search-submit { width: 100%; }
  }

  /* ARIA Card */
  .dv-aria-card-panel { margin: 0 16px 18px; }
  .aria-card { border: 1px solid #7c3aed; border-radius: 24px; background: #7c3aed; color: #ffffff; box-shadow: 0 24px 48px -24px rgba(46, 16, 101, 0.62); }
  .aria-card__body { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 14px 20px; padding: 20px; }
  .aria-card__identity { display: flex; min-width: 0; align-items: center; gap: 16px; }
  .aria-card__icon { display: inline-flex; width: 52px; height: 52px; flex: 0 0 auto; align-items: center; justify-content: center; border-radius: 999px; background: #ffffff; color: #5d12d2; box-shadow: 0 16px 30px -16px rgba(17, 24, 39, 0.5); }
  .aria-card__copy { display: flex; min-width: 0; flex-direction: column; gap: 4px; }
  .aria-card__badge { display: inline-flex; align-items: center; align-self: flex-start; gap: 6px; min-height: 22px; padding: 4px 10px; border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 999px; background: rgba(255, 255, 255, 0.14); color: #ffffff; font-size: 9px; font-weight: 900; letter-spacing: 0.08em; line-height: 1.2; text-transform: uppercase; }
  .aria-card__title { color: #ffffff; font-size: 22px; font-weight: 800; line-height: 1.12; }
  .aria-card__subtitle { max-width: 650px; color: rgba(237, 233, 254, 0.86); font-size: 14px; font-weight: 700; line-height: 1.45; }
  .aria-card__toggle { display: inline-flex; min-width: 168px; min-height: 42px; align-items: center; justify-content: center; gap: 8px; padding: 10px 16px; border-radius: 14px; background: #ffffff; color: #5d12d2; box-shadow: 0 16px 32px -18px rgba(17, 24, 39, 0.7); cursor: pointer; font-size: 13px; font-weight: 800; }
  .dv-summary-aria-card { margin-bottom: 14px; border-radius: 18px; }
  .dv-summary-aria-card .aria-card__body { grid-template-columns: minmax(0, 1fr) auto; padding: 16px; }
  .dv-summary-aria-card .aria-card__icon { width: 44px; height: 44px; }
  .dv-summary-aria-card .aria-card__title { font-size: 18px; }
  .dv-summary-aria-card .aria-card__subtitle { max-width: 720px; font-size: 13px; }
  .dv-summary-aria-card .aria-card__toggle { min-width: 156px; min-height: 40px; border-radius: 12px; }
  .dv-summary-aria-card .aria-insights { grid-column: 1 / -1; }
  .aria-insights { display: flex; grid-column: 1; gap: 8px; flex-wrap: wrap; margin: 0; padding: 0; list-style: none; }
  .aria-insights__chip { display: inline-flex; min-height: 34px; align-items: center; gap: 8px; padding: 7px 12px; border-radius: 12px; background: #ffffff; color: #5d12d2; box-shadow: 0 10px 22px -16px rgba(17, 24, 39, 0.72); font-size: 12px; font-weight: 800; line-height: 1.25; }

  /* Header & Tabs */
  .dv-header { width: 100%; max-width: 1400px; margin: 0 auto 16px; padding: 0 20px; }
  .dv-tabs-wrap { position: relative; width: 100%; margin: 4px 0 16px; }
  .dv-tabs { display: flex; width: 100%; gap: 4px; overflow-x: auto; padding: 6px; border: 1px solid rgba(229, 231, 235, 0.72); border-radius: 12px; background: rgba(243, 244, 246, 0.7); box-shadow: inset 0 2px 4px rgba(15, 23, 42, 0.04); scrollbar-width: none; }
  .dv-tab { display: flex; flex: 1; min-width: fit-content; align-items: center; justify-content: center; gap: 8px; padding: 10px 12px; border-radius: 10px; background: transparent; color: #6b7280; cursor: pointer; font-weight: 700; white-space: nowrap; transition: all 0.18s ease; }
  .dv-tab:hover { transform: translateY(-1px); background: rgba(255, 255, 255, 0.6); color: #374151; }
  .dv-tab[aria-selected="true"] { transform: translateY(-1px); background: #ffffff; color: var(--dv-primary); box-shadow: var(--shadow-md); font-weight: 900; }
  .dv-tab__copy { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.12; text-align: left; }
  .dv-tab__title { font-size: 13px; }
  .dv-tab__subtitle { margin-top: 2px; font-size: 10px; font-weight: 700; opacity: 0.7; }
  .dv-tab__count { display: inline-flex; align-items: center; justify-content: center; min-width: 22px; padding: 2px 8px; border-radius: 999px; background: #e5e7eb; color: #6b7280; font-size: 11px; font-weight: 800; line-height: 1.2; }
  .dv-tab[aria-selected="true"] .dv-tab__count { background: var(--dv-primary-100); color: var(--dv-primary); }

  /* SisRes Status */
  .dv-sisres { width: 100%; margin-bottom: 16px; overflow: hidden; border: 1px solid rgba(229, 231, 235, 0.8); border-bottom: 4px solid var(--reserve-primary); border-radius: 12px; background: #ffffff; box-shadow: var(--shadow-sm); }
  .dv-sisres-summary { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px; background: #ffffff; color: inherit; text-align: left; }
  .dv-sisres-title { min-width: 0; overflow: hidden; color: #1f2937; font-size: 13px; font-weight: 800; line-height: 1.2; text-overflow: ellipsis; white-space: nowrap; }
  .dv-sisres-main, .dv-sisres-actions, .dv-sisres-kpis, .dv-kpi-item { display: flex; align-items: center; }
  .dv-sisres-main { min-width: 0; gap: 8px; }
  .dv-sisres-actions { gap: 8px; }
  .dv-sisres-kpis { gap: 10px; }
  .dv-sisres-toggle-icon { display: inline-flex; width: 30px; height: 30px; flex: 0 0 auto; align-items: center; justify-content: center; border-radius: 999px; background: #f8fafc; color: #64748b; transition: background 0.18s ease, color 0.18s ease; }
  .dv-sisres-summary:hover .dv-sisres-toggle-icon { background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); }
  .dv-kpi-item { gap: 3px; }
  .dv-kpi-dot { width: 8px; height: 8px; flex-shrink: 0; border-radius: 999px; }
  .dv-kpi-dot--success { background: #10b981; } .dv-kpi-dot--error { background: #f87171; } .dv-kpi-dot--warning { background: #f59e0b; }
  .dv-kpi-value, .dv-kpi-percent { color: #6b7280; font-size: 11px; font-weight: 800; }
  .dv-kpi-percent { color: #9ca3af; font-variant-numeric: tabular-nums; }
  .dv-sisres-content { position: relative; padding: 12px 0; background: #ffffff; border-top: 1px solid #f3f4f6; }
  .dv-sisres-list { display: flex; width: 100%; gap: 10px; overflow-x: auto; padding: 4px 20px 8px; scroll-snap-type: x proximity; scrollbar-width: none; }
  .dv-sisres-card { display: flex; width: 120px; min-height: 62px; flex: 0 0 auto; flex-direction: column; justify-content: center; padding: 10px 14px; border: 1px solid rgba(229, 231, 235, 0.8); border-radius: 8px; background: #ffffff; box-shadow: var(--shadow-sm); text-align: left; }
  .dv-sisres-logo-wrap { display: flex; width: 100%; height: 20px; min-width: 0; align-items: center; justify-content: flex-start; margin-bottom: 4px; font-weight: 800; color: var(--reserve-secondary); font-size: 14px; }
  .dv-sisres-logo { display: block; max-width: 92px; max-height: 20px; object-fit: contain; }
  .dv-sisres-logo-fallback { color: var(--reserve-secondary); font-size: 14px; font-weight: 900; }
  .dv-sisres-status { display: flex; min-width: 0; align-items: center; justify-content: flex-start; gap: 4px; font-size: 10px; font-weight: 800; }
  .dv-status--success { color: #059669; } .dv-status--error { color: #dc2626; } .dv-status--warning { color: #d97706; } .dv-status--loading { color: #3b82f6; }

  /* Toolbar */
  .dv-toolbar { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid rgba(229, 231, 235, 0.6); }
  .dv-toolbar__left, .dv-toolbar__right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .dv-toolbar__right { justify-content: flex-end; }
  .dv-sort-select { display: inline-flex; width: 220px; max-width: 100%; height: 38px; align-items: center; justify-content: space-between; gap: 8px; padding: 0 12px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff; color: #374151; box-shadow: var(--shadow-sm); font-size: 12px; font-weight: 800; }
  .dv-icon-btn, .dv-filter-btn, .dv-clear-btn, .dv-action-toggle { display: inline-flex; height: 38px; align-items: center; justify-content: center; gap: 6px; border-radius: 12px; background: #ffffff; color: #6b7280; cursor: pointer; font-size: 12px; font-weight: 800; white-space: nowrap; transition: transform 0.18s ease; }
  .dv-icon-btn { width: 38px; border: 1px solid #e5e7eb; }
  .dv-icon-btn--active { border-color: var(--reserve-primary); background: rgba(66, 143, 112, 0.08); color: var(--reserve-primary); box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.15); }
  .dv-toolbar-menu { position: relative; display: inline-flex; }
  .dv-toolbar-menu__dropdown { position: absolute; top: calc(100% + 8px); right: 0; z-index: 90; display: grid; min-width: 220px; gap: 4px; padding: 6px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff; box-shadow: 0 18px 42px -24px rgba(15, 23, 42, 0.42); }
  .dv-toolbar-menu__item { display: flex; width: 100%; min-height: 38px; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 9px; background: #ffffff; color: #374151; cursor: pointer; font-size: 12px; font-weight: 850; text-align: left; white-space: nowrap; }
  .dv-toolbar-menu__item:hover { background: rgba(66, 143, 112, 0.08); color: var(--reserve-primary); }
  .dv-toolbar-menu__item .q-icon { color: var(--reserve-primary); font-size: 18px; }
  .dv-filter-btn { padding: 0 12px; background: var(--reserve-primary); color: #ffffff; box-shadow: var(--shadow-sm); }
  .dv-clear-btn, .dv-action-toggle { padding: 0 12px; border: 1px solid #e5e7eb; }
  .dv-icon-btn:hover, .dv-filter-btn:hover { transform: translateY(-1px); }

  /* Selected fares */
  .dv-selection-panel { width: 100%; flex: none; }
  .dv-selection-panel--placeholder { display: none; }
  @media (min-width: 1024px) {
    .dv-selection-panel:not(.dv-selection-panel--placeholder) {
      position: fixed;
      top: 20px;
      right: 16px;
      z-index: 30;
      width: 300px;
      max-height: calc(100vh - 40px);
      overflow-y: auto;
    }
  }
  @media (min-width: 1280px) {
    .dv-selection-panel {
      width: 286px;
      flex: 0 0 286px;
    }
    .dv-selection-panel--placeholder {
      display: block;
      visibility: hidden;
      pointer-events: none;
    }
    .dv-selection-panel:not(.dv-selection-panel--placeholder) {
      position: sticky;
      top: 20px;
      right: auto;
      align-self: flex-start;
    }
  }
  .dv-selection-box { display: flex; flex-direction: column; gap: 12px; padding: 16px; border: 1px solid rgba(229, 231, 235, 0.9); border-radius: 16px; background: #ffffff; box-shadow: var(--shadow-md); }
  .dv-selection-header { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding-bottom: 10px; border-bottom: 1px solid #edf2f7; }
  .dv-selection-title { display: flex; min-width: 0; align-items: center; gap: 8px; color: var(--dv-primary); font-size: 14px; font-weight: 900; }
  .dv-selection-clear { display: inline-flex; height: 30px; align-items: center; justify-content: center; padding: 0 9px; border: 1px solid #e5e7eb; border-radius: 9px; background: #ffffff; color: #64748b; cursor: pointer; font-size: 11px; font-weight: 900; }
  .dv-selection-clear:disabled { cursor: default; opacity: 0.45; }
  .dv-selection-stack { display: flex; flex-direction: column; gap: 10px; }
  .dv-selection-card { display: flex; flex-direction: column; gap: 9px; padding: 12px; border: 1px solid rgba(66, 143, 112, 0.28); border-radius: 12px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); }
  .dv-selection-card--empty { min-height: 116px; align-items: center; justify-content: center; border: 2px dashed #cbd5e1; background: #f8fafc; color: #94a3b8; text-align: center; }
  .dv-selection-badge { display: inline-flex; align-self: flex-start; min-height: 22px; align-items: center; gap: 5px; padding: 3px 8px; border-radius: 999px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); font-size: 10px; font-weight: 900; text-transform: uppercase; }
  .dv-selection-route { display: flex; align-items: center; justify-content: space-between; gap: 8px; color: #1f2937; font-size: 12px; font-weight: 900; }
  .dv-selection-route span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dv-selection-fare { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: #475569; font-size: 12px; font-weight: 800; }
  .dv-selection-price { color: var(--reserve-primary); font-size: 17px; font-weight: 900; white-space: nowrap; }
  .dv-selection-meta { display: flex; flex-wrap: wrap; gap: 6px; }
  .dv-selection-meta-chip { display: inline-flex; min-height: 22px; align-items: center; gap: 4px; padding: 3px 7px; border-radius: 999px; background: #eef2f7; color: #64748b; font-size: 10px; font-weight: 800; }
  .dv-selection-empty-icon { display: inline-flex; width: 34px; height: 34px; align-items: center; justify-content: center; border-radius: 999px; background: #eef2f7; color: #94a3b8; }
  .dv-selection-empty-title { color: #64748b; font-size: 12px; font-weight: 900; }
  .dv-selection-empty-subtitle { max-width: 210px; color: #94a3b8; font-size: 11px; font-weight: 700; line-height: 1.35; }
  .dv-selection-footer { display: flex; flex-direction: column; gap: 8px; padding-top: 2px; }
  .dv-selection-total { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: #475569; font-size: 12px; font-weight: 900; }
  .dv-selection-total strong { color: var(--dv-primary); font-size: 18px; }
  .dv-tarifar-btn { display: inline-flex; min-height: 42px; width: 100%; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; background: var(--dv-primary); color: #ffffff; cursor: pointer; font-size: 13px; font-weight: 900; }
  .dv-tarifar-btn:disabled { cursor: not-allowed; background: #cbd5e1; color: #64748b; }
  .dv-selection-hint { min-height: 16px; color: #64748b; font-size: 11px; font-weight: 800; text-align: center; }

  /* Tariff summary */
  .dv-summary-screen { min-height: 100vh; padding: 24px 16px 36px; }
  .dv-summary-shell { width: 100%; max-width: 1280px; margin: 0 auto; }
  .dv-summary-topbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 18px; }
  .dv-summary-heading { min-width: 0; }
  .dv-summary-kicker { display: inline-flex; min-height: 26px; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); font-size: 10px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; }
  .dv-summary-title { margin: 8px 0 4px; color: var(--dv-primary); font-size: 28px; font-weight: 900; line-height: 1.12; }
  .dv-summary-subtitle { margin: 0; color: #64748b; font-size: 13px; font-weight: 700; line-height: 1.45; }
  .dv-summary-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .dv-summary-layout { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: 18px; align-items: start; }
  .dv-summary-main, .dv-summary-side { display: flex; flex-direction: column; gap: 14px; }
  .dv-summary-card { border: 1px solid rgba(229, 231, 235, 0.9); border-radius: 16px; background: #ffffff; box-shadow: var(--shadow-md); }
  .dv-summary-card__header { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px; border-bottom: 1px solid #edf2f7; }
  .dv-summary-card__title { display: flex; align-items: center; gap: 8px; color: var(--dv-primary); font-size: 14px; font-weight: 900; }
  .dv-summary-card__body { padding: 16px; }
  .dv-summary-flight { display: grid; grid-template-columns: minmax(0, 1fr) 160px; gap: 14px; padding: 14px 0; border-bottom: 1px solid #edf2f7; }
  .dv-summary-flight:last-child { border-bottom: 0; padding-bottom: 0; }
  .dv-summary-flight__route { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .dv-summary-flight__badge { display: inline-flex; align-self: flex-start; min-height: 22px; align-items: center; gap: 5px; padding: 3px 8px; border-radius: 999px; background: #eef2f7; color: #475569; font-size: 10px; font-weight: 900; text-transform: uppercase; }
  .dv-summary-airports { display: flex; align-items: center; gap: 8px; color: #1f2937; font-size: 17px; font-weight: 900; }
  .dv-summary-airports span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dv-summary-flight__meta { display: flex; flex-wrap: wrap; gap: 6px; }
  .dv-summary-meta-pill { display: inline-flex; min-height: 24px; align-items: center; gap: 5px; padding: 3px 8px; border-radius: 999px; background: #f8fafc; color: #64748b; font-size: 11px; font-weight: 800; }
  .dv-summary-flight__price { display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; text-align: right; }
  .dv-summary-price-label { color: #94a3b8; font-size: 10px; font-weight: 900; text-transform: uppercase; }
  .dv-summary-price-value { color: var(--reserve-primary); font-size: 20px; font-weight: 900; }
  .dv-policy-list { display: grid; gap: 10px; }
  .dv-policy-card { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f8fafc; }
  .dv-policy-card--success { border-color: rgba(5, 150, 105, 0.26); background: #ecfdf5; }
  .dv-policy-card--warning { border-color: rgba(217, 119, 6, 0.28); background: #fffbeb; }
  .dv-policy-card--danger { border-color: rgba(220, 38, 38, 0.26); background: #fef2f2; }
  .dv-policy-icon { display: inline-flex; width: 34px; height: 34px; align-items: center; justify-content: center; border-radius: 999px; background: #ffffff; color: #64748b; }
  .dv-policy-card--success .dv-policy-icon { color: #059669; }
  .dv-policy-card--warning .dv-policy-icon { color: #d97706; }
  .dv-policy-card--danger .dv-policy-icon { color: #dc2626; }
  .dv-policy-copy { display: flex; min-width: 0; flex-direction: column; gap: 4px; }
  .dv-policy-title-line { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .dv-policy-title { color: #1f2937; font-size: 12px; font-weight: 900; }
  .dv-policy-status { display: inline-flex; min-height: 22px; align-items: center; padding: 3px 8px; border-radius: 999px; background: #ffffff; color: #64748b; font-size: 10px; font-weight: 900; text-transform: uppercase; }
  .dv-policy-card--success .dv-policy-status { color: #059669; }
  .dv-policy-card--warning .dv-policy-status { color: #d97706; }
  .dv-policy-card--danger .dv-policy-status { color: #dc2626; }
  .dv-policy-description { color: #64748b; font-size: 11px; font-weight: 700; line-height: 1.4; }
  .dv-context-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  .dv-context-item { display: flex; min-width: 0; flex-direction: column; gap: 4px; padding: 10px 12px; border: 1px solid #edf2f7; border-radius: 12px; background: #f8fafc; }
  .dv-context-item--wide { grid-column: span 3; }
  .dv-context-label { color: #94a3b8; font-size: 10px; font-weight: 900; letter-spacing: 0.04em; text-transform: uppercase; }
  .dv-context-value { overflow: hidden; color: #1f2937; font-size: 12px; font-weight: 900; text-overflow: ellipsis; white-space: nowrap; }
  .dv-context-value--wrap { white-space: normal; line-height: 1.35; }
  .dv-inclusion-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .dv-inclusion-item { display: flex; align-items: flex-start; gap: 8px; padding: 10px; border: 1px solid #edf2f7; border-radius: 12px; background: #f8fafc; color: #475569; font-size: 11px; font-weight: 800; }
  .dv-inclusion-item.is-included .q-icon { color: #059669; }
  .dv-inclusion-item.is-not-included .q-icon { color: #dc2626; }
  .dv-addons-list { display: flex; flex-direction: column; gap: 10px; }
  .dv-addon-option { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff; cursor: pointer; }
  .dv-addon-option input { width: 16px; height: 16px; accent-color: var(--reserve-primary); }
  .dv-addon-copy { display: flex; min-width: 0; flex-direction: column; gap: 3px; }
  .dv-addon-title { color: #1f2937; font-size: 12px; font-weight: 900; }
  .dv-addon-subtitle { color: #64748b; font-size: 11px; font-weight: 700; }
  .dv-addon-price { color: var(--reserve-primary); font-size: 13px; font-weight: 900; white-space: nowrap; }
  .dv-seat-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
  .dv-seat-button { min-height: 38px; border: 1px solid #dbe3ef; border-radius: 10px; background: #ffffff; color: #475569; cursor: pointer; font-size: 12px; font-weight: 900; }
  .dv-seat-button.is-selected { border-color: var(--reserve-primary); background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12); }
  .dv-totals-list { display: flex; flex-direction: column; gap: 8px; }
  .dv-total-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: #475569; font-size: 12px; font-weight: 800; }
  .dv-total-row--grand { margin-top: 6px; padding-top: 12px; border-top: 1px solid #edf2f7; color: var(--dv-primary); font-size: 14px; font-weight: 900; }
  .dv-total-row--grand strong { font-size: 22px; }
  .dv-summary-final-btn { display: inline-flex; min-height: 44px; width: 100%; align-items: center; justify-content: center; gap: 8px; margin-top: 12px; border-radius: 12px; background: var(--dv-primary); color: #ffffff; cursor: pointer; font-size: 13px; font-weight: 900; }
  @media (max-width: 980px) {
    .dv-summary-layout { grid-template-columns: 1fr; }
    .dv-summary-flight { grid-template-columns: 1fr; }
    .dv-summary-flight__price { align-items: flex-start; text-align: left; }
  }
  @media (max-width: 640px) {
    .dv-summary-topbar { flex-direction: column; align-items: stretch; }
    .dv-summary-actions { width: 100%; }
    .dv-summary-actions .dv-action-toggle { flex: 1; }
    .dv-context-grid { grid-template-columns: 1fr; }
    .dv-context-item--wide { grid-column: span 1; }
    .dv-inclusion-grid { grid-template-columns: 1fr; }
  }

  /* Calendar Shop */
  .dv-calendar-shop { width: 100%; margin: 0 0 16px; padding: 0 2px 2px; color: #0f172a; }
  .dv-calendar-shop__header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
  .dv-calendar-shop__heading { display: flex; min-width: 0; align-items: center; gap: 8px; }
  .dv-calendar-shop__header-bar { width: 4px; height: 20px; flex: 0 0 4px; border-radius: 999px; background: var(--reserve-primary); }
  .dv-calendar-shop__title { margin: 0; color: #1f2937; font-size: 16px; font-weight: 900; line-height: 1.25; }
  .dv-calendar-shop__title-month { color: var(--reserve-primary); }
  .dv-calendar-shop__list { display: flex; width: 100%; gap: 10px; overflow-x: auto; padding: 14px 6px 12px; scroll-snap-type: x proximity; scrollbar-width: none; }
  .dv-calendar-shop__item { position: relative; display: flex; width: 184px; min-height: 88px; flex: 0 0 184px; flex-direction: column; justify-content: space-between; padding: 0; border: 1px solid #eef2f7; border-radius: 8px; background: #ffffff; color: inherit; cursor: pointer; scroll-snap-align: start; text-align: left; box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.08); }
  .dv-calendar-shop__item--active { border-color: var(--reserve-primary); box-shadow: 0 0 0 1px rgba(66, 143, 112, 0.3), 0 8px 18px -10px rgba(66, 143, 112, 0.34); }
  .dv-calendar-shop__fare-delta { position: absolute; top: -8px; right: -6px; z-index: 2; display: inline-flex; align-items: center; gap: 4px; padding: 3px 7px; border-radius: 5px; background: #34d399; color: #ffffff; outline: 3px solid #ffffff; box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12); font-size: 11px; font-weight: 900; line-height: 1; text-transform: uppercase; }
  .dv-calendar-shop__date-line { display: flex; min-height: 38px; align-items: center; justify-content: center; padding: 8px 14px; border-bottom: 1px solid #f3f4f6; }
  .dv-calendar-shop__date { color: #6b7280; font-size: 15px; font-weight: 500; }
  .dv-calendar-shop__fare { display: flex; min-height: 48px; align-items: center; justify-content: center; gap: 10px; padding: 10px 14px 12px; }
  .dv-calendar-shop__company { display: inline-flex; min-width: 54px; align-items: center; font-weight: 800; color: var(--reserve-secondary); font-size: 14px; }
  .dv-calendar-shop__logo { display: block; max-width: 54px; max-height: 18px; object-fit: contain; }
  .dv-calendar-shop__price-group { display: inline-flex; align-items: baseline; color: #334155; }
  .dv-calendar-shop__price-group--best { color: #047857; }
  .dv-calendar-shop__price-symbol { font-size: 12px; font-weight: 750; }
  .dv-calendar-shop__price-integer { font-size: 17px; font-weight: 750; }

  /* FLIGHT CARDS - LIST */
  .lista-voos-container { width: 100%; margin: 0 auto; padding: 0 0 16px; }
  .flights-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
  .flight-card-container { position: relative; display: flex; width: 100%; flex-direction: column; border: 1px solid rgba(66, 143, 112, 0.2); border-radius: 14px; background: #ffffff; box-shadow: 0 5px 18px rgba(15, 23, 42, 0.045); transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .flight-card-container:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08); }
  .flight-card-section-divider { height: 1px; margin: 0 14px; background: linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.08), transparent); }
  
  .flight-header-modern { display: flex; min-height: 48px; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 7px 14px; background: #ffffff; border-radius: 14px 14px 0 0; }
  .flight-header-modern.selected { background: rgba(66, 143, 112, 0.03); }
  .flight-details, .airline-info, .flight-actions, .info-badges, .booking-info { display: flex; align-items: center; }
  .flight-details { flex: 1; min-width: 0; gap: 12px; flex-wrap: wrap; }
  .airline-info { min-width: 0; gap: 5px; flex-wrap: wrap; }
  .preferred-star { color: #ffc107; }
  .airline-logo-wrapper { width: 76px; height: 24px; display: flex; align-items: center; justify-content: flex-start; font-weight: 900; color: var(--reserve-secondary); font-size: 15px; }
  .airline-logo-image { display: block; max-width: 76px; max-height: 24px; object-fit: contain; }
  .airline-logo-fallback { overflow: hidden; color: var(--reserve-secondary); font-size: 15px; font-weight: 900; text-overflow: ellipsis; white-space: nowrap; }
  .vertical-divider { width: 1px; height: 20px; margin: 0 4px; background: #dee2e6; }
  .q-chip { display: inline-flex; min-height: 22px; align-items: center; gap: 4px; padding: 3px 8px; border-radius: 12px; background: #ffffff; font-size: 10px; font-weight: 700; line-height: 1; white-space: nowrap; }
  .q-chip .q-icon { margin-right: 3px; font-size: 13px; }
  .connection-badge { border: 1px solid rgba(66, 143, 112, 0.2); color: var(--reserve-primary); }
  .roundtrip-badge { border: 1px solid rgba(66, 143, 112, 0.2); color: var(--reserve-primary); }
  .buy-now-badge, .limit-badge { border: 1px solid rgba(198, 40, 40, 0.2); color: #c62828; }
  .agency-badge { border: 1px solid rgba(230, 81, 0, 0.2); color: #e65100; }
  .info-badges { gap: 6px; row-gap: 5px; flex-wrap: wrap; }
  .flight-actions { gap: 10px; flex-shrink: 0; }
  .statistics-btn { display: inline-flex; width: 32px; height: 32px; align-items: center; justify-content: center; border-radius: 999px; background: transparent; color: var(--reserve-primary); cursor: pointer; }
  .booking-info { gap: 6px; color: var(--reserve-primary); font-size: 13px; font-weight: 600; }
  .selection-checkbox { position: relative; width: 22px; height: 22px; flex-shrink: 0; border: 2px solid var(--reserve-primary); border-radius: 4px; background: var(--reserve-primary); box-shadow: 0 1px 3px rgba(66, 143, 112, 0.25); }
  .selection-checkbox::after { content: ""; position: absolute; left: 6px; top: 2px; width: 6px; height: 12px; border: solid #ffffff; border-width: 0 2px 2px 0; transform: rotate(45deg); }

  .flight-segments { padding: 0; }
  .segment { display: grid; max-width: 100%; min-width: 0; grid-template-columns: minmax(98px, 0.9fr) minmax(180px, 1.7fr) minmax(98px, 0.9fr) 210px; grid-template-areas: "origin route destination stats"; gap: 12px; align-items: center; padding: 12px 14px; background: transparent; }
  .combined-card .segment + .segment { border-top: 1px solid #f1f3f5; }
  
  .airport { position: relative; display: flex; min-width: 0; height: 108px; flex-direction: column; gap: 3px; padding: 10px; border-radius: 10px; background: rgba(255, 255, 255, 0.5); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.035); }
  .airport.origin { grid-area: origin; align-items: flex-start; }
  .airport.destination { grid-area: destination; align-items: flex-end; text-align: right; }
  .airport-time { display: flex; align-items: center; gap: 5px; color: var(--reserve-primary); font-size: 24px; font-weight: 800; line-height: 1.1; letter-spacing: 0; filter: drop-shadow(0 1px 2px rgba(66, 143, 112, 0.12)); }
  .period-icon { font-size: 19px; opacity: 0.75; }
  .airport-code { color: #343a40; font-size: 14px; font-weight: 800; letter-spacing: 0.4px; }
  .airport-date { color: #6c757d; font-size: 11px; font-weight: 700; }
  .airport-name { max-width: 100%; margin-top: 2px; overflow: hidden; color: #868e96; font-size: 11px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  
  .route-container { grid-area: route; display: flex; min-width: 0; flex-direction: column; align-items: center; gap: 6px; }
  .route-visual { display: grid; width: 100%; grid-template-columns: auto 1fr auto; align-items: center; gap: 8px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; background: #ced4da; } .dot.start { background: var(--reserve-primary); }
  .line { position: relative; width: 100%; height: 2px; background: #dee2e6; }
  .plane-icon { position: absolute; top: 50%; left: var(--plane-position, 50%); margin-top: -11px; margin-left: -11px; padding: 3px; border-radius: 50%; background: #ffffff; color: var(--reserve-primary); font-size: 16px; box-shadow: 0 2px 6px rgba(66, 143, 112, 0.2); transform: rotate(90deg); }
  .route-details { display: flex; width: 100%; align-items: center; justify-content: center; gap: 10px; margin-top: 4px; color: #495057; font-size: 11px; }
  .duration, .stops { display: flex; align-items: center; padding: 4px 9px; border-radius: 16px; background: rgba(66, 143, 112, 0.06); font-weight: 700; }
  .duration .q-icon, .stops .q-icon { margin-right: 6px; } .direct { color: #28a745; font-weight: 800; }

  .stats-column { grid-area: stats; display: flex; min-width: 0; align-items: stretch; gap: 10px; }
  .stats-divider { width: 1px; min-height: 78px; flex-shrink: 0; background: linear-gradient(to bottom, transparent 2%, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.12) 50%, rgba(0, 0, 0, 0.1) 90%, transparent 98%); }
  .stats-triangle-layout { display: flex; width: 190px; height: 108px; flex-direction: column; gap: 10px; }
  .stat-card-top, .stat-card-bottom { display: flex; align-items: center; border: 1px solid rgba(0, 0, 0, 0.06); background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%); box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); }
  .stat-card-top { width: 100%; gap: 8px; padding: 9px 10px; border-radius: 10px; }
  .stat-card-icon-top { display: flex; width: 32px; height: 32px; align-items: center; justify-content: center; border-radius: 8px; background: linear-gradient(135deg, #17a2b8 0%, #3dc1d3 100%); color: #ffffff; }
  .stat-card-label-top { color: #17a2b8; font-size: 9px; font-weight: 800; letter-spacing: 0.4px; text-transform: uppercase; }
  .stat-card-value-top { color: #17a2b8; font-size: 17px; font-weight: 900; line-height: 1; }
  .stat-card-unit-top { font-size: 10px; font-weight: 700; }
  .stat-cards-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .stat-card-bottom { gap: 5px; padding: 6px 7px; border-radius: 9px; }
  .stat-card-icon-bottom { display: flex; width: 22px; height: 22px; align-items: center; justify-content: center; border-radius: 6px; background: rgba(108, 117, 125, 0.1); color: #6c757d; }
  .stat-card-label-bottom { color: #6c757d; font-size: 7px; font-weight: 800; text-transform: uppercase; }
  .stat-card-value-bottom { color: #495057; font-size: 13px; font-weight: 900; line-height: 1; }

  /* Fares */
  .flight-fares { display: flex; min-width: 0; flex-direction: column; gap: 8px; padding: 10px 12px; background: #f8f9fa; border-radius: 0 0 14px 14px; }
  .fare-type-row { display: flex; min-width: 0; align-items: stretch; border-radius: 10px; background: #ffffff; }
  .fare-type-icon-wrapper { display: flex; min-width: 54px; flex-shrink: 0; align-items: center; justify-content: center; padding: 10px 0; background: linear-gradient(135deg, rgba(66, 143, 112, 0.08) 0%, rgba(66, 143, 112, 0.04) 100%); color: var(--reserve-primary); border-radius: 10px 0 0 10px; }
  .fare-type-icon-wrapper .q-icon { font-size: 24px; }
  .fares-horizontal-container { display: grid; flex: 1; min-width: 0; max-width: 100%; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 6px; padding: 7px 7px 10px; }
  .fare-card-compact { position: relative; display: flex; min-width: 0; flex-direction: column; padding: 8px 10px; overflow: visible; border: 2px solid rgba(221, 221, 221, 0.45); border-radius: 10px; background: rgba(221, 221, 221, 0.08); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); cursor: pointer; text-align: left; transition: all 0.2s; }
  .fare-card-compact:hover { border-color: rgba(221, 221, 221, 0.75); background: rgba(221, 221, 221, 0.13); }
  .fare-card-compact.lowest-fare { border-color: var(--lowest-fare); background: linear-gradient(135deg, rgba(242, 187, 29, 0.12) 0%, rgba(242, 187, 29, 0.06) 100%); }
  .fare-card-compact.lowest-baggage { border-color: var(--lowest-baggage); background: linear-gradient(135deg, rgba(103, 163, 83, 0.12) 0%, rgba(103, 163, 83, 0.06) 100%); }
  .fare-card-compact.is-selected { border-color: var(--reserve-primary); background: linear-gradient(135deg, rgba(66, 143, 112, 0.16) 0%, rgba(66, 143, 112, 0.07) 100%); box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.13); }
  .best-fare-badge { position: absolute; top: -12px; right: -12px; display: flex; width: 32px; height: 32px; align-items: center; justify-content: center; border: 2px solid #ffffff; border-radius: 50%; background: linear-gradient(135deg, var(--lowest-fare) 0%, #b98100 100%); box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25); color: #ffffff; z-index: 10; }
  .best-fare-badge.baggage-fare { width: 36px; border-radius: 16px; background: linear-gradient(135deg, var(--lowest-baggage) 0%, #3f7d33 100%); }
  
  .fare-name-with-class, .benefits-icons-inline, .fare-price-row, .fare-price-compact { display: flex; align-items: center; }
  .fare-name-with-class { gap: 6px; }
  .fare-name-text { max-width: 118px; overflow: hidden; color: #2c3e50; font-size: 10px; font-weight: 800; letter-spacing: 0.3px; text-overflow: ellipsis; text-transform: uppercase; white-space: nowrap; }
  .class-badge { padding: 3px 6px; border-radius: 6px; background: linear-gradient(135deg, #dddddd 0%, #555f68 100%); color: #ffffff; font-size: 9px; font-weight: 800; }
  .lowest-fare .class-badge { background: linear-gradient(135deg, var(--lowest-fare) 0%, #b98100 100%); }
  .lowest-baggage .class-badge { background: linear-gradient(135deg, var(--lowest-baggage) 0%, #3f7d33 100%); }
  .benefits-icons-inline { gap: 4px; margin-top: 5px; color: var(--reserve-primary); }
  .benefits-icons-inline .benefit-lucide-icon { width: 16px; height: 16px; flex: 0 0 auto; }
  .benefit-disabled { color: #c9ced4; opacity: 0.45; }
  .fare-price-row { justify-content: space-between; gap: 6px; margin-top: 5px; }
  .fare-price-compact { align-items: baseline; gap: 2px; }
  .currency-small { color: #6c757d; font-size: 10px; font-weight: 800; }
  .amount-large { color: #555f68; font-size: 19px; font-weight: 700; line-height: 1; letter-spacing: 0; }
  .cents-small { color: #6c757d; font-size: 13px; font-weight: 800; }
  .lowest-fare .currency-small, .lowest-fare .amount-large, .lowest-fare .cents-small { color: var(--lowest-fare); }
  .lowest-baggage .currency-small, .lowest-baggage .amount-large, .lowest-baggage .cents-small { color: var(--lowest-baggage); }
  .expand-btn-inline { color: #555f68; font-size: 18px; }

  .expanded-content { display: none; flex-direction: column; margin-top: 8px; }
  .fare-card-compact.is-expanded { align-self: stretch; height: 100%; }
  .fare-card-compact.is-expanded .expanded-content { display: flex; }
  .benefits-detailed { display: flex; flex-direction: column; gap: 5px; padding-top: 8px; border-top: 1px dashed #e9ecef; }
  .benefit-item { display: flex; align-items: flex-start; gap: 6px; padding: 4px; font-size: 10px; }
  .benefit-item.included .q-icon { color: #28a745; }
  .benefit-item:not(.included) .q-icon { color: #c62828; }
  .benefit-content { display: flex; flex-direction: column; gap: 1px; }
  .benefit-name { color: #2c3e50; font-weight: 600; }
  .benefit-obs { color: #6c757d; font-size: 9px; font-style: italic; }

  @media (max-width: 968px) {
    .segment { grid-template-columns: 1fr 1fr; grid-template-areas: "origin destination" "route route" "stats stats"; gap: 12px; padding: 12px; }
    .route-container { padding-top: 12px; border-top: 1px solid #f1f3f5; }
    .stats-divider { display: none; }
    .stats-triangle-layout { width: 100%; height: auto; flex-direction: row; flex-wrap: wrap; gap: 10px; }
    .stat-card-top, .stat-cards-bottom { flex: 1; min-width: 0; }
    .fares-horizontal-container { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .dv-selection-panel { width: 100%; flex-basis: auto; }
  }

  @media (max-width: 768px) {
    .dv-root { padding-top: 12px; }
    .dv-header { padding: 0 16px; }
    .aria-card__body { display: flex; flex-direction: column; align-items: stretch; padding: 18px; }
    .aria-card__identity { align-items: flex-start; }
    .aria-card__toggle { width: 100%; min-width: 0; }
    .aria-insights { grid-column: auto; }
    .dv-toolbar { flex-direction: column; align-items: stretch; }
    .dv-toolbar__left { justify-content: flex-start; flex-wrap: wrap; }
    .dv-toolbar__right { justify-content: flex-end; flex-wrap: wrap; }
    .dv-sort-select { flex: 1 1 220px; min-width: 0; }
    .flight-header-modern { flex-direction: column; align-items: stretch; gap: 8px; padding: 10px 14px; }
    .flight-actions { order: -1; justify-content: space-between; gap: 8px; }
    .airline-info { width: 100%; gap: 4px; }
    .vertical-divider { display: none; }
    .info-badges { width: 100%; gap: 4px; row-gap: 4px; }
    .q-chip { padding: 2px 6px; font-size: 9px; }
    .flight-fares { gap: 8px; overflow-x: hidden; padding: 8px 10px; }
    .fare-type-row { flex-direction: column; }
    .fare-type-icon-wrapper { min-width: auto; justify-content: flex-start; padding: 8px 12px; border-radius: 10px 10px 0 0; }
    .fares-horizontal-container { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; padding: 6px; }
  }

  @media (max-width: 480px) {
    .dv-root { padding-bottom: 20px; }
    .dv-aria-card-panel { margin: 0 12px 14px; }
    .aria-card { border-radius: 20px; }
    .aria-card__body { padding: 14px; }
    .aria-card__identity { flex-direction: column; gap: 12px; }
    .aria-card__title { font-size: 20px; }
    .aria-card__subtitle { font-size: 13px; }
    .dv-tabs { gap: 6px; }
    .dv-tab { flex: 0 0 auto; padding: 9px 10px; }
    .dv-sisres-kpis { display: none; }
    .dv-toolbar__right { justify-content: flex-end; width: 100%; }
    .dv-toolbar__right .dv-action-toggle { flex: 1 1 210px; }
    .dv-toolbar__right .dv-filter-btn { flex: 1 1 128px; }
    .lista-voos-container { padding: 0 8px 12px; }
    .flight-card-container { width: min(380px, calc(100vw - 16px)); max-width: 100%; margin-right: auto; margin-left: auto; }
    .dv-selection-panel { width: 100%; flex-basis: auto; }
    .segment { gap: 4px; padding: 10px 12px; overflow: hidden; }
    .airport { height: auto; min-height: auto; gap: 2px; padding: 6px 8px; border-radius: 10px; background: rgba(248, 249, 252, 0.6); box-shadow: none; }
    .airport-time { gap: 4px; font-size: 24px; filter: none; }
    .period-icon { font-size: 16px; opacity: 0.55; }
    .route-container { gap: 4px; padding-top: 6px; border-top: 1px solid #f5f5f5; }
    .dot { width: 7px; height: 7px; }
    .stats-column { padding-top: 8px; border-top: 1px solid #f5f5f5; }
    .stats-triangle-layout { flex-direction: column; gap: 8px; }
    .fares-horizontal-container { display: flex; gap: 8px; overflow-x: auto; padding: 8px; scroll-snap-type: x proximity; scrollbar-width: none; }
    .fare-card-compact { min-width: 148px; max-width: 165px; flex: 0 0 auto; scroll-snap-align: start; }
  }

  /* UX polish */
  :root {
    --radius-xs: 4px;
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 8px;
    --radius-xl: 8px;
    --dv-surface: #ffffff;
    --dv-surface-soft: #f8fafc;
    --dv-surface-muted: #f1f5f9;
    --dv-line: #dfe6ef;
    --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
    --shadow-md: 0 8px 22px -18px rgba(15, 23, 42, 0.35);
    --shadow-lg: 0 18px 44px -30px rgba(15, 23, 42, 0.42);
  }

  .dv-app-container {
    background:
      linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.94) 42%, rgba(241,245,249,1) 100%);
    color: var(--dv-text);
  }

  .dv-app-container button,
  .dv-app-container select,
  .dv-app-container input {
    -webkit-tap-highlight-color: transparent;
  }

  .dv-app-container button:focus-visible,
  .dv-app-container select:focus-visible,
  .dv-app-container input:focus-visible {
    outline: 3px solid rgba(66, 143, 112, 0.22);
    outline-offset: 2px;
  }

  .dv-filter-card,
  .dv-search-card,
  .dv-selection-box,
  .dv-summary-card,
  .dv-sisres,
  .dv-calendar-shop__item,
  .dv-policy-card,
  .dv-context-item,
  .dv-inclusion-item,
  .dv-addon-option,
  .dv-passenger-chips,
  .dv-passenger-suggestions {
    border-radius: var(--radius-md);
  }

  .dv-search-card,
  .dv-filter-card,
  .dv-selection-box,
  .dv-summary-card,
  .dv-calendar-shop__item,
  .dv-sisres {
    border-color: var(--dv-line);
    background: var(--dv-surface);
    box-shadow: var(--shadow-md);
  }

  .dv-search-screen {
    align-items: flex-start;
    padding: 24px 16px 44px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.74) 0%, rgba(248,250,252,0.9) 42%, rgba(241,245,249,1) 100%),
      linear-gradient(90deg, rgba(57, 87, 165, 0.05) 1px, transparent 1px),
      linear-gradient(180deg, rgba(66, 143, 112, 0.045) 1px, transparent 1px);
    background-size: auto, 34px 34px, 34px 34px;
  }

  .dv-search-shell {
    max-width: 1040px;
  }

  .dv-search-heading {
    margin-bottom: 14px;
    padding: 0 4px;
  }

  .dv-search-kicker {
    border-color: rgba(66, 143, 112, 0.22);
    background: rgba(255, 255, 255, 0.9);
    color: var(--reserve-primary);
    box-shadow: 0 10px 24px -20px rgba(15, 23, 42, 0.5);
  }

  .dv-search-title {
    max-width: 760px;
    margin-top: 10px;
    font-size: 36px;
    letter-spacing: 0;
  }

  .dv-search-subtitle {
    max-width: 680px;
    color: #526173;
    font-size: 13px;
    font-weight: 650;
  }

  .dv-search-card {
    padding: 22px;
  }

  .dv-search-grid {
    gap: 14px;
  }

  .dv-search-control,
  .dv-sort-select,
  .dv-icon-btn,
  .dv-filter-btn,
  .dv-clear-btn,
  .dv-action-toggle,
  .dv-search-submit,
  .dv-tarifar-btn,
  .dv-summary-final-btn,
  .dv-seat-button,
  .dv-selection-clear {
    border-radius: var(--radius-md);
  }

  .dv-search-control,
  .dv-sort-select {
    border-color: var(--dv-line);
    background: var(--dv-surface-soft);
  }

  .dv-search-control:hover,
  .dv-sort-select:hover {
    border-color: #cbd5e1;
    background: #ffffff;
  }

  .dv-search-card.dv-search-card--structured {
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    overflow: visible;
  }

  .dv-search-card.dv-search-card--travel {
    padding: 12px;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.97);
    box-shadow: 0 24px 48px -32px rgba(15, 43, 96, 0.46);
  }

  .dv-trip-modebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
    padding: 4px;
    border: 1px solid #e0e7ef;
    border-radius: var(--radius-md);
    background: #f8fafc;
  }

  .dv-trip-modebar__item,
  .dv-trip-modebar__summary {
    display: inline-flex;
    min-height: 32px;
    align-items: center;
    gap: 7px;
    padding: 6px 10px;
    border-radius: var(--radius-sm);
    font-size: 12px;
    font-weight: 900;
    line-height: 1.25;
    white-space: nowrap;
  }

  .dv-trip-modebar__item.is-active {
    background: #ffffff;
    color: var(--reserve-primary);
    box-shadow: var(--shadow-sm);
  }

  .dv-trip-modebar__summary {
    color: #64748b;
  }

  .dv-itinerary-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr);
    gap: 8px;
    align-items: stretch;
  }

  .dv-itinerary-field {
    display: flex;
    min-width: 0;
    min-height: 118px;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 16px;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background:
      linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.92);
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-itinerary-field:focus-within {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-itinerary-label {
    color: #64748b;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .dv-itinerary-field__body {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 12px;
    align-items: end;
  }

  .dv-itinerary-code {
    color: var(--dv-primary);
    font-size: 38px;
    font-weight: 950;
    line-height: 0.95;
  }

  .dv-itinerary-input {
    width: 100%;
    min-width: 0;
    border: 0;
    background: transparent;
    color: #1f2937;
    font: inherit;
    font-size: 15px;
    font-weight: 850;
    line-height: 1.25;
    outline: none;
  }

  .dv-itinerary-swap {
    display: inline-flex;
    width: 44px;
    height: 44px;
    align-self: center;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7e1ec;
    border-radius: 999px;
    background: #ffffff;
    color: var(--reserve-primary);
    box-shadow: 0 14px 26px -20px rgba(15, 43, 96, 0.56);
    cursor: pointer;
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
  }

  .dv-itinerary-swap:hover {
    border-color: var(--reserve-primary);
    background: #eef7f2;
    transform: translateY(-1px);
  }

  .dv-trip-control-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(180px, 0.8fr) auto;
    gap: 8px;
    align-items: stretch;
    margin-top: 8px;
  }

  .dv-trip-control {
    display: flex;
    min-width: 0;
    min-height: 64px;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 10px 12px;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background: #ffffff;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-trip-control:focus-within {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-trip-control .dv-search-control {
    min-height: 24px;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    font-size: 14px;
  }

  .dv-search-submit.dv-search-submit--travel {
    min-width: 218px;
    min-height: 64px;
    border-radius: var(--radius-md);
    background: linear-gradient(90deg, var(--reserve-secondary), var(--dv-primary));
    box-shadow: 0 18px 30px -22px rgba(15, 43, 96, 0.72);
  }

  .dv-search-screen.dv-search-screen--reserve {
    position: relative;
    min-height: 100vh;
    display: block;
    padding: 0 0 64px;
    overflow: visible;
    background: #f8fafc;
  }

  .dv-search-screen.dv-search-screen--reserve::before {
    display: none;
  }

  .dv-search-hero {
    position: relative;
    z-index: 1;
    padding: 40px 16px 128px;
    background: #38634f;
  }

  .dv-search-screen--reserve .dv-search-shell {
    position: relative;
    z-index: 2;
    max-width: 1024px;
    margin-top: -96px;
    padding: 0 16px;
  }

  .dv-service-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
  }

  .dv-service-tab-list {
    display: flex;
    max-width: 100%;
    gap: 4px;
    overflow-x: auto;
    padding: 6px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 999px;
    background: rgba(255,255,255,0.11);
    box-shadow: 0 20px 36px -28px rgba(0,0,0,0.7);
    scrollbar-width: none;
  }

  .dv-service-tab-list::-webkit-scrollbar {
    display: none;
  }

  .dv-service-tab {
    display: inline-flex;
    min-height: 38px;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    border-radius: 999px;
    background: transparent;
    color: rgba(255,255,255,0.86);
    cursor: pointer;
    font-size: 13px;
    font-weight: 900;
    white-space: nowrap;
    transition: background 0.18s ease, color 0.18s ease;
  }

  .dv-service-tab:hover {
    background: rgba(255,255,255,0.18);
  }

  .dv-service-tab.is-active {
    background: #ffffff;
    color: #38634f;
    box-shadow: var(--shadow-sm);
  }

  .dv-search-hero-copy {
    max-width: 860px;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
  }

  .dv-search-hero-copy h1 {
    margin: 0 0 12px;
    color: #ffffff;
    font-size: clamp(30px, 4vw, 40px);
    font-weight: 900;
    line-height: 1.1;
  }

  .dv-search-hero-copy p {
    margin: 0;
    color: rgba(255,255,255,0.82);
    font-size: 18px;
    font-weight: 600;
    line-height: 1.45;
  }

  .dv-booking-card {
    position: relative;
    padding: 24px;
    border: 1px solid rgba(243, 244, 246, 0.98);
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 24px 54px -30px rgba(15, 23, 42, 0.58);
  }

  .dv-booking-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 24px;
  }

  .dv-trip-segmented {
    display: inline-flex;
    gap: 3px;
    padding: 4px;
    border-radius: var(--radius-md);
    background: #f1f5f9;
  }

  .dv-trip-segmented__item {
    min-height: 34px;
    padding: 7px 12px;
    border-radius: var(--radius-sm);
    background: transparent;
    color: #64748b;
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    white-space: nowrap;
  }

  .dv-trip-segmented__item.is-active {
    background: #ffffff;
    color: var(--reserve-primary);
    box-shadow: var(--shadow-sm);
  }

  .dv-booking-tools {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .dv-passenger-control {
    position: relative;
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: #334155;
    transition: background 0.18s ease, border-color 0.18s ease;
  }

  .dv-passenger-control:hover,
  .dv-passenger-control:focus-within {
    border-color: #e5e7eb;
    background: #f3f4f6;
  }

  .dv-passenger-control::after {
    display: none;
  }

  .dv-passenger-toolbar {
    display: inline-flex;
    min-height: 40px;
    align-items: center;
    gap: 8px;
    padding: 8px 9px 8px 14px;
    border-radius: var(--radius-md);
    color: #334155;
    background: transparent;
    border: 0;
    font-size: 13px;
    font-weight: 800;
    white-space: nowrap;
    cursor: pointer;
  }

  .dv-passenger-toolbar > .q-icon {
    color: #64748b;
  }

  .dv-passenger-quick-add {
    display: inline-flex;
    width: 38px;
    height: 40px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 0;
    border-left: 1px solid #d1d5db;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--reserve-primary);
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  }

  .dv-passenger-quick-add--decrease {
    border-left: 1px solid #d1d5db;
    border-radius: 0;
    color: #64748b;
  }

  .dv-passenger-quick-add--increase {
    border-left: 1px solid #d1d5db;
  }

  .dv-passenger-quick-add:hover {
    background: rgba(66, 143, 112, 0.1);
    color: #38634f;
  }

  .dv-passenger-quick-add:disabled {
    cursor: not-allowed;
    opacity: 0.48;
  }

  .dv-passenger-toolbar__stepper {
    display: inline-flex;
    gap: 4px;
  }

  .dv-passenger-toolbar .dv-stepper-btn {
    width: 28px;
    height: 28px;
  }

  .dv-passenger-selector {
    position: relative;
  }

  .dv-passenger-popover {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: auto;
    z-index: 120;
    display: grid;
    width: min(320px, calc(100vw - 32px));
    gap: 10px;
    padding: 16px;
    border: 1px solid #f3f4f6;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 24px 48px -26px rgba(15, 23, 42, 0.58);
  }

  .dv-passenger-popover__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #1f2937;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-passenger-popover__header span {
    color: #64748b;
    font-size: 11px;
    font-weight: 850;
    white-space: nowrap;
  }

  .dv-passenger-popover .dv-passenger-chips {
    min-height: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }

  .dv-passenger-popover .dv-passenger-chip {
    min-height: 26px;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 800;
  }

  .dv-passenger-popover .dv-passenger-chip button {
    width: 18px;
    height: 18px;
    transition: background 0.18s ease, color 0.18s ease;
  }

  .dv-passenger-popover .dv-passenger-chip button:hover {
    background: var(--reserve-primary);
    color: #ffffff;
  }

  .dv-passenger-chip--anonymous {
    background: #fef3c7;
    color: #92400e;
  }

  .dv-passenger-chip--anonymous button {
    background: #fde68a;
    color: #92400e;
  }

  .dv-passenger-chip button:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  .dv-passenger-popover .dv-passenger-input-wrap {
    position: relative;
  }

  .dv-passenger-popover .dv-passenger-input-wrap .q-icon {
    display: none;
  }

  .dv-passenger-popover .dv-passenger-input {
    width: 100%;
    min-height: 38px;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #ffffff;
    color: #374151;
    font: inherit;
    font-size: 13px;
    font-weight: 700;
    outline: none;
  }

  .dv-passenger-hint {
    display: block;
    margin-top: 4px;
    color: #9ca3af;
    font-size: 11px;
    font-weight: 600;
  }

  .dv-passenger-popover .dv-passenger-input:focus {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-passenger-popover .dv-passenger-suggestions {
    position: static;
    display: block;
    max-height: 220px;
    overflow: hidden auto;
    gap: 0;
    padding: 0;
    border-color: #f3f4f6;
    border-radius: 8px;
    box-shadow: none;
  }

  .dv-passenger-popover .dv-passenger-option {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2px;
    padding: 9px 12px;
    border-radius: 0;
    border-bottom: 1px solid #f3f4f6;
  }

  .dv-passenger-popover .dv-passenger-option:last-child {
    border-bottom: 0;
  }

  .dv-passenger-popover .dv-passenger-option > .q-icon {
    display: none;
  }

  .dv-passenger-popover .dv-passenger-name {
    color: #374151;
    font-size: 13px;
    font-weight: 800;
  }

  .dv-passenger-popover .dv-passenger-meta {
    color: #9ca3af;
    font-size: 11px;
    font-weight: 650;
  }

  .dv-filter-toggle {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: #64748b;
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  }

  .dv-filter-toggle:hover {
    border-color: #e5e7eb;
    background: #f3f4f6;
  }

  .dv-filter-toggle.is-active {
    border-color: rgba(66, 143, 112, 0.3);
    background: #eef7f2;
    color: var(--reserve-primary);
  }

  .dv-flight-search-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 42px minmax(0, 1fr) minmax(150px, 0.8fr) minmax(150px, 0.8fr);
    gap: 12px;
    align-items: stretch;
  }

  .dv-flight-search-grid--oneway {
    grid-template-columns: minmax(0, 1fr) 42px minmax(0, 1fr) minmax(150px, 0.8fr);
  }

  .dv-flight-search-grid--multi {
    grid-template-columns: 1fr;
  }

  .dv-booking-field {
    display: flex;
    min-width: 0;
    min-height: 56px;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: var(--radius-md);
    background: #ffffff;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-booking-field--route {
    min-height: 58px;
  }

  .dv-booking-field:focus-within {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-booking-label {
    color: #6b7280;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.04em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .dv-booking-field__body {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 9px;
  }

  .dv-booking-field__body > .q-icon {
    flex: 0 0 auto;
    color: #9ca3af;
    font-size: 20px;
  }

  .dv-booking-route-copy {
    display: block;
    min-width: 0;
  }

  .dv-booking-input {
    width: 100%;
    min-width: 0;
    border: 0;
    background: transparent;
    color: #1f2937;
    font: inherit;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.25;
    outline: none;
  }

  .dv-multi-route-builder {
    display: grid;
    grid-column: 1 / -1;
    gap: 12px;
  }

  .dv-multi-route-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(150px, 0.66fr) 42px;
    min-width: 0;
    align-items: center;
    gap: 12px;
  }

  .dv-booking-field--multi-route {
    min-height: 54px;
  }

  .dv-multi-route-remove {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: 1px solid #fee2e2;
    border-radius: var(--radius-md);
    background: #fff7f7;
    color: #b91c1c;
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  }

  .dv-multi-route-remove:hover:not(:disabled) {
    border-color: #fecaca;
    background: #fef2f2;
    color: #991b1b;
  }

  .dv-multi-route-remove:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }

  .dv-multi-route-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 2px;
  }

  .dv-multi-route-add {
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 14px;
    border: 1px solid rgba(66,143,112,0.22);
    border-radius: var(--radius-md);
    background: rgba(66,143,112,0.08);
    color: var(--reserve-primary);
    font-size: 13px;
    font-weight: 850;
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease;
  }

  .dv-multi-route-add:hover:not(:disabled) {
    border-color: rgba(66,143,112,0.35);
    background: rgba(66,143,112,0.14);
  }

  .dv-multi-route-add:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  .dv-multi-route-footer .dv-search-submit {
    min-width: 168px;
  }

  .dv-booking-swap {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-self: center;
    align-items: center;
    justify-content: center;
    border: 4px solid #ffffff;
    border-radius: 999px;
    background: #f3f4f6;
    color: #4b5563;
    box-shadow: 0 12px 22px -18px rgba(15, 43, 96, 0.55);
    cursor: pointer;
  }

  .dv-search-submit.dv-search-submit--booking {
    grid-column: 1 / -1;
    justify-self: end;
    min-width: 184px;
    min-height: 52px;
    margin-top: 12px;
    padding: 12px 28px;
    border-radius: 12px;
    background: var(--reserve-primary);
    box-shadow: 0 16px 28px -20px rgba(66, 143, 112, 0.72);
    font-size: 14px;
    text-transform: none;
  }

  .dv-search-submit.dv-search-submit--booking:hover {
    background: #38634f;
  }

  .dv-advanced-filters {
    position: absolute;
    top: 74px;
    right: 24px;
    z-index: 120;
    display: grid;
    width: min(320px, calc(100vw - 32px));
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 0;
    padding: 18px;
    border: 1px solid #f3f4f6;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 24px 52px -28px rgba(15, 23, 42, 0.6);
  }

  .dv-filter-block {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 9px;
  }

  .dv-filter-block__title {
    color: #334155;
    font-size: 12px;
    font-weight: 900;
  }

  .dv-filter-chip-group {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .dv-filter-chip {
    min-height: 32px;
    padding: 6px 11px;
    border-radius: 999px;
    background: #f1f5f9;
    color: #64748b;
    cursor: pointer;
    font-size: 11px;
    font-weight: 850;
  }

  .dv-filter-chip.is-active {
    background: var(--reserve-primary);
    color: #ffffff;
  }

  .dv-filter-select {
    width: 100%;
    min-height: 38px;
    padding: 8px 10px;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background: #ffffff;
    color: #334155;
    font: inherit;
    font-size: 12px;
    font-weight: 850;
  }

  .dv-featured-flights {
    margin-top: 42px;
  }

  .dv-featured-flights__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 22px;
  }

  .dv-featured-flights__eyebrow {
    display: inline-flex;
    margin-bottom: 4px;
    color: #64748b;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .dv-featured-flights__header h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.15;
  }

  .dv-featured-flights__view-all {
    display: inline-flex;
    min-height: 34px;
    align-items: center;
    padding: 7px 12px;
    border-radius: var(--radius-md);
    background: #eef3ff;
    color: var(--reserve-secondary);
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    white-space: nowrap;
  }

  .dv-featured-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
  }

  .dv-featured-card {
    min-width: 0;
    overflow: hidden;
    border: 1px solid #f3f4f6;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
    cursor: pointer;
    transition: transform 0.24s ease, box-shadow 0.24s ease;
  }

  .dv-featured-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 36px -22px rgba(15, 23, 42, 0.28);
  }

  .dv-featured-card__image {
    position: relative;
    height: 192px;
    overflow: hidden;
    background: #e2e8f0;
  }

  .dv-featured-card__image::after {
    display: none;
  }

  .dv-featured-card__image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.32s ease;
  }

  .dv-featured-card:hover .dv-featured-card__image img {
    transform: scale(1.08);
  }

  .dv-featured-card__date {
    position: absolute;
    left: 12px;
    bottom: 12px;
    z-index: 1;
    display: inline-flex;
    max-width: calc(100% - 24px);
    min-height: 26px;
    align-items: center;
    padding: 5px 9px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    color: #334155;
    font-size: 11px;
    font-weight: 900;
  }

  .dv-featured-card__body {
    display: grid;
    gap: 14px;
    padding: 16px;
  }

  .dv-featured-route {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    color: #6b7280;
    font-size: 13px;
    font-weight: 600;
  }

  .dv-featured-route span,
  .dv-featured-route strong {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-featured-route .q-icon {
    flex: 0 0 auto;
    color: #94a3b8;
  }

  .dv-featured-route strong {
    color: #1f2937;
    font-size: 18px;
    font-weight: 900;
  }

  .dv-featured-price-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
  }

  .dv-featured-price-row span {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 2px;
  }

  .dv-featured-price-row small {
    color: #94a3b8;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .dv-featured-price-row strong {
    color: var(--reserve-primary);
    font-size: 20px;
    font-weight: 900;
    line-height: 1;
  }

  .dv-featured-price-row button {
    min-height: 32px;
    padding: 7px 10px;
    border-radius: 8px;
    background: #f3f4f6;
    color: #374151;
    cursor: pointer;
    font-size: 12px;
    font-weight: 800;
    white-space: nowrap;
  }

  .dv-featured-price-row button:hover {
    background: var(--reserve-primary);
    color: #ffffff;
  }

  .dv-search-layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    align-items: stretch;
  }

  .dv-search-section {
    position: relative;
    min-width: 0;
    overflow: hidden;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.96);
    padding: 18px;
    box-shadow: 0 20px 38px -32px rgba(15, 43, 96, 0.46);
  }

  .dv-search-section::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 2px;
    background: linear-gradient(90deg, var(--reserve-primary), var(--reserve-secondary));
  }

  .dv-search-section--route {
    grid-column: 1 / -1;
    padding: 18px 20px 20px;
    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  }

  .dv-search-section--passengers,
  .dv-search-section--corporate {
    background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.92) 100%);
  }

  .dv-search-section__header {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 14px;
  }

  .dv-search-section__icon {
    display: inline-flex;
    width: 34px;
    height: 34px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: rgba(66, 143, 112, 0.1);
    color: var(--reserve-primary);
  }

  .dv-search-section__copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 2px;
  }

  .dv-search-section__title {
    color: var(--dv-primary);
    font-size: 14px;
    font-weight: 900;
    line-height: 1.2;
  }

  .dv-search-section__subtitle {
    color: #64748b;
    font-size: 11px;
    font-weight: 750;
    line-height: 1.35;
  }

  .dv-search-context {
    display: inline-flex;
    max-width: 100%;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
    margin-top: 12px;
    padding: 5px;
    border: 1px solid rgba(215, 225, 236, 0.9);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 16px 34px -28px rgba(15, 43, 96, 0.45);
  }

  .dv-search-context-chip {
    display: inline-flex;
    min-height: 30px;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: #475569;
    font-size: 11px;
    font-weight: 850;
  }

  .dv-search-context-chip:first-child {
    background: #eef7f2;
    color: var(--reserve-primary);
  }

  .dv-route-overview {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(120px, 0.6fr) minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    margin-bottom: 14px;
    padding: 16px 18px;
    border: 1px solid #e2e9f2;
    border-radius: var(--radius-md);
    background:
      linear-gradient(90deg, rgba(66, 143, 112, 0.08), rgba(255,255,255,0.96) 42%, rgba(57, 87, 165, 0.08)),
      #ffffff;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
  }

  .dv-route-code-block {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 4px;
    padding: 2px 0;
  }

  .dv-route-code-block--end {
    align-items: flex-end;
    text-align: right;
  }

  .dv-route-code-label {
    color: #94a3b8;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .dv-route-code {
    color: var(--dv-primary);
    font-size: 34px;
    font-weight: 950;
    line-height: 1;
  }

  .dv-route-city {
    max-width: 100%;
    overflow: hidden;
    color: #64748b;
    font-size: 11px;
    font-weight: 800;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-route-bridge {
    position: relative;
    display: flex;
    min-width: 0;
    align-items: center;
    justify-content: center;
    color: var(--reserve-primary);
  }

  .dv-route-bridge::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 999px;
    background: repeating-linear-gradient(90deg, #b6c7d9 0 12px, transparent 12px 18px);
  }

  .dv-route-bridge .q-icon {
    position: relative;
    z-index: 1;
    width: 38px;
    height: 38px;
    border: 1px solid #d7e1ec;
    border-radius: 999px;
    background: #ffffff;
    box-shadow: 0 12px 24px -18px rgba(15, 43, 96, 0.55);
    transform: rotate(90deg);
  }

  .dv-route-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 38px minmax(0, 1fr);
    gap: 8px;
    align-items: end;
  }

  .dv-route-swap {
    display: inline-flex;
    width: 38px;
    height: 38px;
    align-items: center;
    justify-content: center;
    margin-bottom: 1px;
    border: 1px solid #dbe3ef;
    border-radius: var(--radius-md);
    background: #f8fafc;
    color: #64748b;
  }

  .dv-route-dates {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-top: 12px;
  }

  .dv-passenger-quantity {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 10px 12px;
    border: 1px solid #dae3ee;
    border-radius: var(--radius-md);
    background: #ffffff;
  }

  .dv-passenger-stepper {
    display: grid;
    grid-template-columns: 34px minmax(34px, 1fr) 34px;
    align-items: center;
    gap: 8px;
  }

  .dv-passenger-stepper strong {
    color: var(--dv-primary);
    font-size: 18px;
    font-weight: 950;
    line-height: 1;
    text-align: center;
  }

  .dv-stepper-btn {
    display: inline-flex;
    width: 34px;
    height: 34px;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-sm);
    background: #f8fafc;
    color: var(--reserve-primary);
    cursor: pointer;
    transition: border-color 0.18s ease, background 0.18s ease;
  }

  .dv-stepper-btn:hover:not(:disabled) {
    border-color: var(--reserve-primary);
    background: #eef7f2;
  }

  .dv-stepper-btn:disabled {
    cursor: not-allowed;
    color: #94a3b8;
    background: #f1f5f9;
  }

  .dv-passenger-quantity__hint {
    color: #64748b;
    font-size: 11px;
    font-weight: 850;
    text-align: center;
  }

  .dv-search-card.dv-search-card--structured .dv-search-field {
    gap: 4px;
    padding: 10px 12px;
    border: 1px solid #dae3ee;
    border-radius: var(--radius-md);
    background: #ffffff;
    transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  }

  .dv-search-card.dv-search-card--structured .dv-search-field:focus-within {
    border-color: var(--reserve-primary);
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-search-card.dv-search-card--structured .dv-search-label {
    color: #64748b;
    font-size: 10px;
    line-height: 1.2;
  }

  .dv-search-card.dv-search-card--structured .dv-search-control {
    min-height: 26px;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    font-size: 13px;
  }

  .dv-search-card.dv-search-card--structured .dv-search-control:hover,
  .dv-search-card.dv-search-card--structured .dv-search-control:focus {
    border-color: transparent;
    background: transparent;
    box-shadow: none;
  }

  .dv-search-card.dv-search-card--structured select.dv-search-control {
    cursor: pointer;
  }

  .dv-corporate-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .dv-corporate-strip {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }

  .dv-corporate-pill {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;
    padding: 10px 11px;
    border: 1px solid #e4ebf3;
    border-radius: var(--radius-md);
    background: #ffffff;
    color: #334155;
    font-size: 12px;
    font-weight: 850;
    box-shadow: 0 10px 20px -18px rgba(15, 43, 96, 0.38);
  }

  .dv-corporate-pill .q-icon {
    color: var(--reserve-secondary);
  }

  .dv-corporate-pill span:last-child {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-passenger-panel {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 10px;
  }

  .dv-passenger-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .dv-passenger-count {
    display: inline-flex;
    min-height: 26px;
    align-items: center;
    gap: 6px;
    padding: 4px 9px;
    border-radius: 999px;
    background: #eef7f2;
    color: var(--reserve-primary);
    font-size: 11px;
    font-weight: 900;
    white-space: nowrap;
  }

  .dv-passenger-chips {
    min-height: 48px;
    padding: 9px;
    border-color: #dae3ee;
    border-style: dashed;
    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  }

  .dv-passenger-autocomplete {
    position: relative;
  }

  .dv-search-card.dv-search-card--structured .dv-passenger-input-wrap {
    position: relative;
    border: 1px solid #dae3ee;
    border-radius: var(--radius-md);
    background: #ffffff;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-search-card.dv-search-card--structured .dv-passenger-input-wrap:focus-within {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-search-card.dv-search-card--structured .dv-passenger-input-wrap .q-icon {
    left: 12px;
    color: var(--reserve-primary);
  }

  .dv-search-card.dv-search-card--structured .dv-passenger-input {
    min-height: 42px;
    padding: 0 12px 0 38px;
    border: 0;
    background: transparent;
    box-shadow: none;
  }

  .dv-passenger-suggestions {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    z-index: 50;
  }

  .dv-passenger-option {
    width: 100%;
  }

  .dv-search-card.dv-search-card--structured .dv-search-actions {
    width: min(100%, 720px);
    margin: 16px auto 0;
    padding: 10px;
    border: 1px solid var(--dv-line);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 18px 34px -28px rgba(15, 43, 96, 0.46);
  }

  .dv-search-card.dv-search-card--structured .dv-search-helper {
    display: inline-flex;
    min-height: 34px;
    min-width: 0;
    align-items: center;
    padding: 7px 12px;
    border-radius: var(--radius-md);
    background: #f8fafc;
    color: #475569;
    font-size: 11px;
    font-weight: 850;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-search-card.dv-search-card--structured .dv-search-submit {
    min-width: 228px;
    background: linear-gradient(90deg, var(--reserve-secondary), var(--dv-primary));
    box-shadow: 0 14px 26px -18px rgba(15, 43, 96, 0.72);
  }

  .dv-main-wrapper {
    gap: 16px;
  }

  .dv-header {
    padding: 0;
    margin-bottom: 12px;
  }

  .dv-tabs {
    gap: 6px;
    padding: 5px;
    border-color: var(--dv-line);
    border-radius: var(--radius-md);
    background: #edf2f7;
    box-shadow: none;
  }

  .dv-tab {
    min-height: 42px;
    border-radius: var(--radius-sm);
    color: #526173;
  }

  .dv-tab:hover {
    transform: none;
    background: rgba(255, 255, 255, 0.72);
  }

  .dv-tab[aria-selected="true"] {
    transform: none;
    box-shadow: var(--shadow-sm);
  }

  .dv-toolbar {
    margin-bottom: 14px;
    padding: 10px;
    border: 1px solid var(--dv-line);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.86);
    box-shadow: var(--shadow-sm);
  }

  .dv-icon-btn,
  .dv-clear-btn,
  .dv-action-toggle {
    border-color: var(--dv-line);
    box-shadow: none;
  }

  .dv-icon-btn:hover,
  .dv-filter-btn:hover,
  .dv-clear-btn:hover,
  .dv-action-toggle:hover,
  .dv-search-submit:hover,
  .dv-tarifar-btn:hover,
  .dv-summary-final-btn:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .dv-calendar-shop {
    margin-bottom: 12px;
  }

  .dv-calendar-shop__list {
    gap: 8px;
    padding: 10px 2px 12px;
  }

  .dv-calendar-shop__item {
    min-height: 78px;
    box-shadow: var(--shadow-sm);
  }

  .dv-calendar-shop__item:hover {
    border-color: #cbd5e1;
    box-shadow: var(--shadow-md);
  }

  .dv-calendar-shop__item--active {
    box-shadow: 0 0 0 2px rgba(66, 143, 112, 0.14), var(--shadow-sm);
  }

  .dv-selection-box {
    gap: 10px;
    padding: 14px;
  }

  .dv-selection-card {
    border-radius: var(--radius-md);
    background: #ffffff;
  }

  .dv-selection-card--empty {
    border-radius: var(--radius-md);
    background: #f8fafc;
  }

  .dv-tarifar-btn,
  .dv-search-submit,
  .dv-summary-final-btn {
    box-shadow: none;
  }

  .dv-summary-screen {
    padding-top: 28px;
  }

  .dv-summary-card__header,
  .dv-summary-card__body {
    padding: 14px;
  }

  .dv-policy-card,
  .dv-context-item,
  .dv-inclusion-item,
  .dv-addon-option {
    background: var(--dv-surface-soft);
  }

  .dv-addon-option:hover,
  .dv-seat-button:hover {
    border-color: #cbd5e1;
    background: #ffffff;
  }

  .dv-summary-screen {
    min-height: 100vh;
    padding: 32px 16px 72px;
    background: #f8fafc;
  }

  .dv-summary-shell {
    max-width: 1152px;
  }

  .dv-summary-hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    overflow: hidden;
    margin-bottom: 16px;
    padding: 24px 30px;
    border-radius: 18px;
    background: #38634f;
    color: #ffffff;
    box-shadow: 0 18px 40px -30px rgba(15, 23, 42, 0.72);
  }

  .dv-summary-hero::after {
    content: "";
    position: absolute;
    top: -72px;
    right: -54px;
    width: 230px;
    height: 230px;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
    filter: blur(28px);
  }

  .dv-summary-heading {
    position: relative;
    z-index: 1;
  }

  .dv-summary-title {
    margin: 0 0 6px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 900;
    line-height: 1.15;
  }

  .dv-summary-subtitle {
    margin: 0;
    color: rgba(255,255,255,0.78);
    font-size: 13px;
    font-weight: 650;
  }

  .dv-summary-back-button {
    position: relative;
    z-index: 1;
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 15px;
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 10px;
    background: rgba(255,255,255,0.12);
    color: #ffffff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 900;
    white-space: nowrap;
    box-shadow: inset 0 1px 8px rgba(255,255,255,0.04);
  }

  .dv-summary-back-button:hover {
    background: rgba(255,255,255,0.18);
  }

  .dv-summary-hero__meta {
    position: relative;
    z-index: 1;
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    gap: 9px;
    padding: 9px 14px;
    border: 1px solid rgba(255,255,255,0.13);
    border-radius: 10px;
    background: rgba(255,255,255,0.1);
    color: #ffffff;
    box-shadow: inset 0 1px 8px rgba(255,255,255,0.04);
  }

  .dv-summary-hero__meta .q-icon {
    color: #67a353;
    font-size: 20px;
  }

  .dv-summary-hero__meta strong {
    font-size: 13px;
    font-weight: 800;
  }

  .dv-summary-actions {
    justify-content: flex-end;
    margin: 0 0 16px;
  }

  .dv-summary-layout {
    grid-template-columns: minmax(0, 8fr) minmax(320px, 4fr);
    gap: 28px;
  }

  .dv-summary-main,
  .dv-summary-side {
    gap: 24px;
  }

  .dv-summary-side {
    position: sticky;
    top: 24px;
    z-index: 20;
    width: 100%;
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    align-self: start;
  }

  .dv-summary-card {
    overflow: visible;
    border: 1px solid #f3f4f6;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
  }

  .dv-summary-card--totals {
    width: 100%;
    max-height: calc(100vh - 156px);
    overflow-y: auto;
    box-shadow: 0 18px 42px -28px rgba(15, 23, 42, 0.42);
  }

  .dv-summary-card__header {
    align-items: flex-start;
    padding: 17px 24px;
    border-bottom: 1px solid #f3f4f6;
    border-radius: 18px 18px 0 0;
    background: #f8fafc;
  }

  .dv-summary-card__title {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: #1f2937;
    font-size: 17px;
    font-weight: 900;
    line-height: 1.2;
  }

  .dv-summary-card__title .q-icon {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    color: #64748b;
    font-size: 20px;
  }

  .dv-summary-card__subtitle {
    margin: 6px 0 0;
    color: #64748b;
    font-size: 12px;
    font-weight: 650;
    line-height: 1.45;
  }

  .dv-summary-card__body {
    padding: 24px;
  }

  .dv-summary-card__body--flush {
    padding: 0;
  }

  .dv-summary-policy-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .dv-summary-flat-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .dv-summary-policy-heading,
  .dv-summary-flat-heading {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 2px;
    color: var(--dv-primary);
    font-size: 14px;
    font-weight: 950;
  }

  .dv-summary-policy-heading .q-icon,
  .dv-summary-flat-heading .q-icon {
    color: #64748b;
    font-size: 18px;
  }

  .dv-summary-flat-body {
    display: grid;
    gap: 14px;
  }

  .dv-summary-policy-section .dv-policy-list {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .dv-auth-policy-card {
    position: relative;
    overflow: hidden;
    border: 1px solid #eef2f7;
    border-left: 4px solid #cbd5e1;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  .dv-auth-policy-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px -24px rgba(15, 23, 42, 0.46);
  }

  .dv-auth-policy-card--danger {
    border-color: rgba(239, 68, 68, 0.2);
    border-left-color: #ef4444;
    box-shadow: 0 1px 3px rgba(239, 68, 68, 0.06);
  }

  .dv-auth-policy-card--success {
    border-color: rgba(103, 163, 83, 0.22);
    border-left-color: #67a353;
    box-shadow: 0 1px 3px rgba(103, 163, 83, 0.06);
  }

  .dv-auth-policy-summary {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 14px 14px 16px;
    background: #ffffff;
    color: inherit;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s ease;
  }

  .dv-auth-policy-summary:hover {
    background: #f8fafc;
  }

  .dv-auth-policy-main {
    display: flex;
    min-width: 0;
    flex: 1;
    align-items: center;
    gap: 12px;
  }

  .dv-auth-policy-icon {
    display: inline-flex;
    width: 38px;
    height: 38px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #f8fafc;
    color: #94a3b8;
    transition: transform 0.22s ease;
  }

  .dv-auth-policy-card:hover .dv-auth-policy-icon {
    transform: scale(1.05) rotate(-4deg);
  }

  .dv-auth-policy-card--danger .dv-auth-policy-icon {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  .dv-auth-policy-card--success .dv-auth-policy-icon {
    background: rgba(103, 163, 83, 0.1);
    color: #67a353;
  }

  .dv-auth-policy-icon .q-icon {
    font-size: 20px;
  }

  .dv-auth-policy-copy {
    display: flex;
    min-width: 0;
    flex: 1;
    flex-direction: column;
    gap: 5px;
  }

  .dv-auth-policy-title {
    overflow: hidden;
    color: #1f2937;
    font-size: 14px;
    font-weight: 900;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-auth-policy-meta {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;
  }

  .dv-auth-policy-status {
    display: inline-flex;
    flex: 0 0 auto;
    min-height: 20px;
    align-items: center;
    padding: 3px 7px;
    border-radius: 4px;
    color: #ffffff;
    font-size: 9px;
    font-weight: 950;
    letter-spacing: 0.06em;
    line-height: 1;
    text-transform: uppercase;
  }

  .dv-auth-policy-card--danger .dv-auth-policy-status {
    background: #ef4444;
  }

  .dv-auth-policy-card--success .dv-auth-policy-status {
    background: #67a353;
  }

  .dv-auth-policy-insight {
    min-width: 0;
    overflow: hidden;
    margin: 0;
    color: #94a3b8;
    font-size: 10px;
    font-weight: 750;
    line-height: 1.35;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-auth-policy-chevron {
    display: inline-flex;
    width: 30px;
    height: 30px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: #f8fafc;
    color: #94a3b8;
    transition: transform 0.22s ease, background 0.22s ease, color 0.22s ease;
  }

  .dv-auth-policy-card--danger .dv-auth-policy-chevron.is-expanded {
    background: rgba(239, 68, 68, 0.12);
    color: #ef4444;
  }

  .dv-auth-policy-card--success .dv-auth-policy-chevron.is-expanded {
    background: rgba(103, 163, 83, 0.12);
    color: #67a353;
  }

  .dv-auth-policy-chevron.is-expanded {
    transform: rotate(180deg);
  }

  .dv-auth-policy-detail {
    padding: 0 20px 16px;
  }

  .dv-auth-policy-divider {
    height: 1px;
    margin-bottom: 14px;
    background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
  }

  .dv-auth-policy-aria-insight {
    position: relative;
    display: flex;
    min-width: 0;
    align-items: flex-start;
    gap: 6px;
    margin: 4px 0 12px;
    padding: 6px 10px;
    border: 1px solid rgba(196, 181, 253, 0.6);
    border-radius: 8px;
    background: rgba(245, 243, 255, 0.8);
    color: #7c3aed;
    box-shadow: 0 8px 24px -18px rgba(139, 92, 246, 0.4);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .dv-auth-policy-aria-insight:hover {
    transform: translateY(-1px);
    border-color: rgba(167, 139, 250, 0.72);
    box-shadow: 0 18px 36px -22px rgba(139, 92, 246, 0.35);
  }

  .dv-auth-policy-aria-insight::after {
    position: absolute;
    inset: 1px;
    border-radius: 7px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.55), transparent 58%);
    content: "";
    pointer-events: none;
  }

  .dv-auth-policy-aria-insight__icon {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    color: #8b5cf6;
    transition: transform 0.2s ease;
    z-index: 1;
  }

  .dv-auth-policy-aria-insight:hover .dv-auth-policy-aria-insight__icon {
    transform: scale(1.1) rotate(-6deg);
  }

  .dv-auth-policy-aria-insight__icon .q-icon {
    font-size: 13px;
  }

  .dv-auth-policy-aria-insight__text {
    min-width: 0;
    margin: 0;
    color: #7c3aed;
    font-size: 10px;
    font-weight: 650;
    line-height: 1.35;
    z-index: 1;
  }

  .dv-auth-policy-aria-insight__label {
    font-weight: 950;
  }

  .dv-auth-policy-fare-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }

  .dv-auth-policy-kicker {
    display: block;
    margin-bottom: 4px;
    color: #94a3b8;
    font-size: 9px;
    font-weight: 950;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .dv-auth-policy-value {
    color: #ef4444;
    font-size: 20px;
    font-weight: 950;
    letter-spacing: -0.01em;
    line-height: 1;
  }

  .dv-auth-policy-card--success .dv-auth-policy-value {
    color: #67a353;
  }

  .dv-auth-policy-diff {
    color: #ef4444;
    font-size: 13px;
    font-weight: 900;
    line-height: 1;
  }

  .dv-auth-policy-bar {
    display: flex;
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #f1f5f9;
    box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.08);
  }

  .dv-auth-policy-bar__allowed {
    display: block;
    min-width: 6px;
    background: #67a353;
  }

  .dv-auth-policy-bar__exceeded {
    position: relative;
    display: block;
    min-width: 0;
    background: #ef4444;
  }

  .dv-auth-policy-bar__exceeded::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.22;
    background: repeating-linear-gradient(45deg, transparent 0, transparent 5px, #ffffff 5px, #ffffff 10px);
  }

  .dv-auth-policy-scale {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 8px;
    color: #67a353;
    font-size: 10px;
    font-weight: 900;
  }

  .dv-auth-policy-scale strong:last-child {
    color: #ef4444;
  }

  .dv-auth-policy-metrics {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-top: 12px;
  }

  .dv-auth-policy-metrics--averages {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .dv-auth-policy-average-title {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 16px 0 10px;
    color: #94a3b8;
    font-size: 9px;
    font-weight: 950;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .dv-auth-policy-average-title .q-icon {
    color: #3b82f6;
    font-size: 15px;
  }

  .dv-auth-policy-metric {
    padding: 10px;
    border: 1px solid #f1f5f9;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 8px 20px -18px rgba(100, 116, 139, 0.42);
    text-align: center;
  }

  .dv-auth-policy-metric span {
    display: block;
    margin-bottom: 4px;
    color: #94a3b8;
    font-size: 9px;
    font-weight: 950;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .dv-auth-policy-metric strong {
    color: #1f2937;
    font-size: 13px;
    font-weight: 950;
  }

  .dv-auth-policy-metric small {
    display: block;
    margin-top: 4px;
    color: #64748b;
    font-size: 9px;
    font-weight: 850;
    line-height: 1.25;
  }

  @media (max-width: 768px) {
    .dv-auth-policy-metrics--averages {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .dv-auth-policy-timeline {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 14px;
    padding: 2px 2px 0;
  }

  .dv-auth-policy-timepoint {
    display: grid;
    justify-items: center;
    gap: 8px;
    color: #64748b;
    font-size: 10px;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
  }

  .dv-auth-policy-timepoint .q-icon {
    width: 34px;
    height: 34px;
    border: 1px solid rgba(103, 163, 83, 0.3);
    border-radius: 999px;
    background: rgba(103, 163, 83, 0.1);
    color: #67a353;
    font-size: 18px;
  }

  .dv-auth-policy-timepoint--alert .q-icon {
    border-color: rgba(239, 68, 68, 0.3);
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  .dv-auth-policy-timepoint strong {
    display: block;
    color: inherit;
    font-size: 12px;
  }

  .dv-auth-policy-track {
    display: grid;
    gap: 6px;
    color: #67a353;
    font-size: 10px;
    font-weight: 950;
    letter-spacing: 0.04em;
    text-align: center;
    text-transform: uppercase;
  }

  .dv-auth-policy-track__line {
    display: block;
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(103, 163, 83, 0.18);
  }

  .dv-auth-policy-track__fill {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: #67a353;
  }

  .dv-auth-policy-track.is-danger {
    color: #ef4444;
  }

  .dv-auth-policy-track.is-danger .dv-auth-policy-track__line {
    background: rgba(239, 68, 68, 0.18);
  }

  .dv-auth-policy-track.is-danger .dv-auth-policy-track__fill {
    background: #ef4444;
  }

  .dv-confirm-leg {
    padding: 24px;
    border-bottom: 1px solid #f3f4f6;
    background: #ffffff;
  }

  .dv-confirm-leg--return {
    background: rgba(248,250,252,0.68);
  }

  .dv-confirm-leg__heading {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    color: #428f70;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .dv-confirm-leg--return .dv-confirm-leg__heading {
    color: #3957a5;
  }

  .dv-confirm-leg__heading span:last-child {
    color: inherit;
    opacity: 0.82;
  }

  .dv-confirm-leg__content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 170px;
    gap: 24px;
    align-items: center;
  }

  .dv-confirm-route {
    display: grid;
    grid-template-columns: 92px minmax(120px, 1fr) 92px;
    gap: 16px;
    align-items: center;
  }

  .dv-confirm-airport {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    text-align: center;
  }

  .dv-confirm-airport strong {
    color: #1f2937;
    font-size: 25px;
    font-weight: 900;
    line-height: 1;
  }

  .dv-confirm-airport span {
    color: #64748b;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-airport small {
    max-width: 120px;
    overflow: hidden;
    color: #94a3b8;
    font-size: 11px;
    font-weight: 650;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-confirm-route-line {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: #94a3b8;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .dv-confirm-route-line div {
    position: relative;
    width: 100%;
    height: 2px;
    background: #e5e7eb;
  }

  .dv-confirm-route-line div .q-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 0 8px;
    background: #ffffff;
    color: rgba(66,143,112,0.58);
    transform: translate(-50%, -50%);
  }

  .dv-confirm-leg--return .dv-confirm-route-line div .q-icon {
    color: rgba(57,87,165,0.58);
    transform: translate(-50%, -50%) rotate(180deg);
  }

  .dv-confirm-flight-meta {
    display: grid;
    justify-items: center;
    gap: 6px;
    padding: 15px;
    border: 1px solid #f3f4f6;
    border-radius: 14px;
    background: #f8fafc;
    text-align: center;
  }

  .dv-confirm-flight-meta span {
    color: #64748b;
    font-size: 11px;
    font-weight: 750;
  }

  .dv-confirm-flight-meta strong {
    color: #1f2937;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-flight-meta em {
    padding: 4px 8px;
    border-radius: 7px;
    background: #e5e7eb;
    color: #374151;
    font-size: 11px;
    font-style: normal;
    font-weight: 800;
  }

  .dv-confirm-inclusions {
    padding: 24px;
    border-top: 1px solid #f3f4f6;
    background: #ffffff;
  }

  .dv-confirm-inclusions h3,
  .dv-confirm-subheading {
    margin: 0 0 14px;
    padding-bottom: 9px;
    border-bottom: 1px solid #f3f4f6;
    color: #428f70;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-inclusion-grid {
    gap: 10px 16px;
  }

  .dv-inclusion-item {
    padding: 0;
    border: 0;
    background: transparent;
    color: #374151;
    font-size: 13px;
    font-weight: 700;
  }

  .dv-inclusion-label {
    display: inline-flex;
    min-width: 0;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
  }

  .dv-inclusion-chip {
    display: inline-flex;
    min-height: 20px;
    align-items: center;
    padding: 3px 7px;
    border: 1px solid rgba(66,143,112,0.2);
    border-radius: 999px;
    background: rgba(66,143,112,0.08);
    color: #428f70;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1;
    text-transform: uppercase;
  }

  .dv-inclusion-item.is-not-included span:last-child {
    color: #81868b;
    text-decoration: line-through;
  }

  .dv-inclusion-item.is-not-included .dv-inclusion-chip {
    display: none;
  }

  .dv-confirm-baggage-box {
    display: grid;
    gap: 12px;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid rgba(66,143,112,0.3);
    border-radius: 14px;
    background: rgba(66,143,112,0.05);
  }

  .dv-confirm-seat-box {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 0;
    padding: 20px;
    border: 1px solid rgba(66,143,112,0.24);
    border-radius: 14px;
    background: linear-gradient(135deg, #ffffff 0%, #f7fbf9 100%);
    box-shadow: 0 12px 28px -24px rgba(56, 99, 79, 0.55);
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-confirm-seat-box:hover {
    border-color: #428f70;
    box-shadow: 0 16px 32px -24px rgba(56, 99, 79, 0.72);
  }

  .dv-confirm-seat-top {
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

  .dv-confirm-seat-top .dv-confirm-addon-heading {
    flex: 1 1 auto;
    min-width: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }

  .dv-confirm-seat-price {
    display: inline-flex;
    min-height: 30px;
    flex: 0 0 auto;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid rgba(66,143,112,0.18);
    background: rgba(66,143,112,0.08);
    color: #38634f;
    font-size: 12px;
    font-weight: 850;
    white-space: nowrap;
  }

  .dv-confirm-seat-actions {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  .dv-confirm-seat-action {
    display: inline-flex;
    flex: 0 0 auto;
    min-height: 38px;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 8px 14px;
    border: 1px solid #428f70;
    border-radius: 999px;
    background: #428f70;
    color: #ffffff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 900;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
    white-space: nowrap;
  }

  .dv-confirm-seat-action:hover {
    border-color: #38634f;
    color: #ffffff;
    background: #38634f;
    box-shadow: 0 12px 24px -18px rgba(56, 99, 79, 0.85);
  }

  .dv-confirm-seat-action.is-selected {
    border-color: #38634f;
    background: #ffffff;
    color: #38634f;
    box-shadow: inset 0 0 0 1px rgba(56, 99, 79, 0.14), 0 10px 22px -20px rgba(56, 99, 79, 0.72);
  }

  .dv-confirm-seat-action .q-icon {
    font-size: 18px;
    line-height: 1;
  }

  .dv-confirm-seat-action::before {
    content: "event_seat";
    font-family: "Material Icons";
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
  }

  .dv-confirm-seat-action.is-selected::before {
    content: "check_circle";
  }

  .dv-confirm-seat-action.is-selected:hover {
    background: #38634f;
    color: #ffffff;
  }

  .dv-confirm-addon-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(66,143,112,0.18);
  }

  .dv-confirm-addon-heading > .q-icon,
  .dv-confirm-addon-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    margin-top: 0;
    border: 1px solid rgba(66,143,112,0.28);
    border-radius: 999px;
    background: #ffffff;
    color: #428f70;
    font-size: 21px;
    line-height: 1;
  }

  .dv-confirm-addon-icon svg {
    width: 22px;
    height: 22px;
    stroke-width: 2.2;
  }

  .dv-confirm-addon-heading strong {
    display: block;
    color: #1f2937;
    font-size: 16px;
    font-weight: 900;
  }

  .dv-confirm-addon-heading div > span {
    display: block;
    margin-top: 3px;
    color: #64748b;
    font-size: 12px;
    font-weight: 650;
  }

  .dv-confirm-baggage-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 15px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  }

  .dv-confirm-baggage-option strong,
  .dv-confirm-baggage-option span,
  .dv-confirm-baggage-option em {
    display: block;
  }

  .dv-confirm-baggage-option strong {
    color: #1f2937;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-baggage-option span {
    margin-top: 3px;
    color: #64748b;
    font-size: 11px;
    font-weight: 650;
  }

  .dv-confirm-baggage-option em {
    width: max-content;
    margin-top: 7px;
    padding: 4px 7px;
    border-radius: 6px;
    background: rgba(66,143,112,0.1);
    color: #428f70;
    font-size: 11px;
    font-style: normal;
    font-weight: 850;
  }

  .dv-confirm-stepper {
    display: inline-flex;
    flex: 0 0 auto;
    overflow: hidden;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #ffffff;
  }

  .dv-confirm-stepper button,
  .dv-confirm-stepper span {
    display: inline-flex;
    min-width: 36px;
    min-height: 32px;
    align-items: center;
    justify-content: center;
  }

  .dv-confirm-stepper button {
    color: #475569;
    cursor: pointer;
  }

  .dv-confirm-stepper button:hover {
    background: #f3f4f6;
  }

  .dv-confirm-stepper span {
    border-inline: 1px solid #d1d5db;
    color: #1f2937;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px 22px;
    margin-bottom: 26px;
  }

  .dv-confirm-field {
    position: relative;
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 7px;
  }

  .dv-confirm-field--wide {
    grid-column: 1 / -1;
  }

  .dv-confirm-label {
    color: #374151;
    font-size: 11px;
    font-weight: 900;
  }

  .dv-confirm-autocomplete,
  .dv-confirm-passenger-picker {
    position: relative;
    display: block;
  }

  .dv-confirm-input {
    width: 100%;
    min-height: 42px;
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    background: #ffffff;
    color: #1f2937;
    font: inherit;
    font-size: 13px;
    font-weight: 750;
    outline: none;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  }

  .dv-confirm-input:focus {
    border-color: #428f70;
    box-shadow: 0 0 0 3px rgba(66,143,112,0.14);
  }

  .dv-confirm-options {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 5px);
    z-index: 70;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 18px 38px -28px rgba(15, 23, 42, 0.58);
  }

  .dv-confirm-option {
    display: flex;
    width: 100%;
    min-height: 36px;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: #ffffff;
    color: #374151;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    text-align: left;
  }

  .dv-confirm-option:hover {
    background: rgba(66,143,112,0.1);
  }

  .dv-confirm-passenger-picker {
    width: min(100%, 420px);
    margin-bottom: 14px;
  }

  .dv-confirm-passenger-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 10px;
  }

  .dv-confirm-passenger-card {
    display: flex;
    min-width: 0;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px 10px;
    flex-wrap: wrap;
    padding: 10px 10px 11px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 8px 18px -18px rgba(15, 23, 42, 0.36);
  }

  .dv-confirm-passenger-identity {
    display: inline-flex;
    min-width: 0;
    flex: 1 1 calc(100% - 36px);
    order: 0;
    align-items: center;
    gap: 8px;
    color: #374151;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-passenger-identity > .q-icon {
    color: #428f70;
  }

  .dv-confirm-passenger-identity strong {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-confirm-passenger-share {
    display: inline-flex;
    flex: 1 1 100%;
    order: 2;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
    padding-left: 28px;
    color: #64748b;
    cursor: pointer;
    font-size: 11px;
    font-weight: 800;
    line-height: 1.25;
    text-align: left;
  }

  .dv-confirm-passenger-share input {
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
    accent-color: #428f70;
  }

  .dv-confirm-passenger-remove {
    display: inline-flex;
    width: 26px;
    height: 26px;
    flex: 0 0 auto;
    order: 1;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: #81868b;
    cursor: pointer;
  }

  .dv-confirm-passenger-remove:hover {
    background: rgba(186,46,15,0.1);
    color: #ba2e0f;
  }

  .dv-confirm-passenger-chip {
    display: inline-flex;
    min-height: 34px;
    align-items: center;
    gap: 7px;
    padding: 6px 6px 6px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    background: #f3f4f6;
    color: #374151;
    font-size: 13px;
    font-weight: 800;
  }

  .dv-confirm-passenger-chip > .q-icon {
    color: #428f70;
  }

  .dv-confirm-passenger-chip--pending {
    padding-right: 12px;
    border: 1.5px dashed #d4a72c;
    background: #fffaf0;
    color: #7a5b10;
  }

  .dv-confirm-passenger-chip--pending > .q-icon {
    color: #d49b00;
  }

  .dv-confirm-passenger-chip button {
    display: inline-flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: #81868b;
    cursor: pointer;
  }

  .dv-confirm-passenger-chip button:hover {
    background: rgba(186,46,15,0.1);
    color: #ba2e0f;
  }

  .dv-summary-card--totals .dv-summary-card__header {
    background: #ffffff;
  }

  .dv-totals-list {
    gap: 10px;
  }

  .dv-total-row {
    font-size: 13px;
    font-weight: 750;
  }

  .dv-total-row--muted {
    padding-top: 10px;
    border-top: 1px solid #f3f4f6;
    color: #64748b;
  }

  .dv-total-row--grand {
    margin-top: 8px;
    padding-top: 14px;
    border-top: 2px solid #1f2937;
    color: #1f2937;
  }

  .dv-total-row--grand strong {
    color: #428f70;
    font-size: 25px;
    font-weight: 950;
  }

  .dv-summary-final-btn {
    min-height: 54px;
    margin-top: 20px;
    border-radius: 14px;
    background: #428f70;
    font-size: 16px;
    font-weight: 900;
    box-shadow: 0 14px 26px -20px rgba(66,143,112,0.8);
  }

  .dv-summary-final-btn:hover {
    background: #38634f;
  }

  .dv-confirm-privacy {
    margin: 14px 0 0;
    color: #64748b;
    font-size: 11px;
    font-weight: 650;
    line-height: 1.45;
    text-align: center;
  }

  @media (max-width: 1023px) {
    .dv-summary-layout {
      grid-template-columns: 1fr;
      padding-bottom: 380px;
    }

    .dv-summary-side {
      position: fixed;
      left: 12px;
      right: 12px;
      bottom: 12px;
      top: auto;
      z-index: 80;
      order: initial;
    }

    .dv-summary-card--totals {
      max-height: min(46vh, 430px);
      overflow: auto;
      box-shadow: 0 22px 54px -24px rgba(15, 23, 42, 0.56);
    }

    .dv-summary-hero {
      align-items: flex-start;
      flex-direction: column;
    }

    .dv-confirm-leg__content {
      grid-template-columns: 1fr;
    }

    .dv-featured-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .dv-flight-search-grid {
      grid-template-columns: 1fr;
    }

    .dv-flight-search-grid--oneway,
    .dv-flight-search-grid--multi,
    .dv-multi-route-row {
      grid-template-columns: 1fr;
    }

    .dv-multi-route-remove {
      width: 100%;
    }

    .dv-multi-route-footer {
      align-items: stretch;
      flex-direction: column;
    }

    .dv-booking-swap {
      justify-self: center;
      transform: rotate(90deg);
    }

    .dv-search-submit.dv-search-submit--booking {
      width: 100%;
      min-height: 54px;
    }

    .dv-advanced-filters {
      grid-template-columns: 1fr;
    }

    .dv-selection-panel:not(.dv-selection-panel--placeholder) {
      position: fixed;
      left: 12px;
      right: 12px;
      bottom: 12px;
      z-index: 40;
      width: auto;
      max-height: min(62vh, 520px);
      overflow-y: auto;
    }

    .dv-content-area {
      padding-bottom: 96px;
    }

    .dv-selection-box {
      box-shadow: 0 22px 44px -24px rgba(15, 23, 42, 0.55);
    }
  }

  @media (max-width: 768px) {
    .dv-summary-screen {
      padding: 20px 12px 48px;
    }

    .dv-summary-hero {
      padding: 20px;
    }

    .dv-summary-actions {
      justify-content: stretch;
    }

    .dv-summary-actions .dv-action-toggle {
      flex: 1;
    }

    .dv-summary-card__header,
    .dv-summary-card__body,
    .dv-confirm-leg,
    .dv-confirm-inclusions {
      padding: 16px;
    }

    .dv-policy-list,
    .dv-confirm-form-grid,
    .dv-inclusion-grid {
      grid-template-columns: 1fr;
    }

    .dv-confirm-field--wide {
      grid-column: auto;
    }

    .dv-confirm-route {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .dv-confirm-route-line {
      min-height: 46px;
    }

    .dv-confirm-baggage-option {
      align-items: stretch;
      flex-direction: column;
    }

    .dv-confirm-stepper {
      align-self: flex-start;
    }

    .dv-confirm-seat-box {
      align-items: stretch;
      flex-direction: column;
      gap: 0;
    }

    .dv-confirm-seat-top {
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 12px;
    }

    .dv-confirm-seat-top .dv-confirm-addon-heading {
      flex: 1 1 190px;
    }

    .dv-confirm-seat-actions {
      flex: 0 1 auto;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .dv-confirm-seat-action {
      width: auto;
    }

    .dv-search-screen.dv-search-screen--reserve {
      padding: 0 0 44px;
    }

    .dv-search-hero {
      padding: 24px 12px 112px;
    }

    .dv-search-hero-copy h1 {
      font-size: 28px;
    }

    .dv-search-hero-copy p {
      font-size: 15px;
    }

    .dv-search-screen--reserve .dv-search-shell {
      margin-top: -86px;
      padding: 0 12px;
    }

    .dv-service-tabs {
      justify-content: flex-start;
      margin-bottom: 28px;
    }

    .dv-service-tab-list {
      width: 100%;
      gap: 8px;
    }

    .dv-service-tab {
      flex: 1 0 auto;
      justify-content: center;
      padding-inline: 14px;
    }

    .dv-booking-card {
      padding: 14px;
    }

    .dv-booking-top {
      align-items: stretch;
      flex-direction: column;
    }

    .dv-trip-segmented {
      overflow-x: auto;
      scrollbar-width: none;
    }

    .dv-trip-segmented::-webkit-scrollbar {
      display: none;
    }

    .dv-booking-tools {
      justify-content: space-between;
    }

    .dv-passenger-control {
      flex: 1 1 auto;
      min-width: 0;
    }

    .dv-passenger-selector {
      flex: 1 1 auto;
      min-width: 0;
    }

    .dv-passenger-toolbar {
      flex: 1 1 auto;
      justify-content: space-between;
      width: 100%;
    }

    .dv-passenger-popover {
      left: 0;
      right: auto;
      width: min(320px, calc(100vw - 32px));
    }

    .dv-advanced-filters {
      top: 116px;
      left: 14px;
      right: 14px;
      width: auto;
    }

    .dv-featured-flights {
      margin-top: 28px;
    }

    .dv-featured-flights__header {
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
    }

    .dv-featured-grid {
      grid-template-columns: 1fr;
    }

    .dv-featured-card__image {
      height: 176px;
    }

    .dv-booking-route-copy {
      grid-template-columns: 1fr;
      gap: 4px;
    }

    .dv-search-screen {
      padding-top: 24px;
    }

    .dv-search-title {
      font-size: 30px;
    }

    .dv-search-card {
      padding: 16px;
    }

    .dv-search-card.dv-search-card--structured {
      padding: 0;
    }

    .dv-trip-modebar {
      align-items: stretch;
      flex-direction: column;
    }

    .dv-trip-modebar__item,
    .dv-trip-modebar__summary {
      width: 100%;
      justify-content: center;
    }

    .dv-itinerary-row {
      grid-template-columns: 1fr;
      gap: 6px;
    }

    .dv-itinerary-field {
      min-height: 96px;
    }

    .dv-itinerary-code {
      font-size: 31px;
    }

    .dv-itinerary-field__body {
      grid-template-columns: auto minmax(0, 1fr);
    }

    .dv-itinerary-swap {
      justify-self: center;
      transform: rotate(90deg);
    }

    .dv-itinerary-swap:hover {
      transform: rotate(90deg) translateX(-1px);
    }

    .dv-trip-control-row {
      grid-template-columns: 1fr;
    }

    .dv-search-submit.dv-search-submit--travel {
      width: 100%;
      min-height: 54px;
    }

    .dv-search-layout {
      grid-template-columns: 1fr;
      padding: 0;
      gap: 12px;
    }

    .dv-search-section {
      padding: 14px;
    }

    .dv-route-card,
    .dv-route-dates {
      grid-template-columns: 1fr;
    }

    .dv-route-overview {
      grid-template-columns: minmax(0, 1fr) 54px minmax(0, 1fr);
      gap: 8px;
      padding: 12px;
    }

    .dv-route-code {
      font-size: 28px;
    }

    .dv-route-bridge {
      justify-content: center;
      min-height: 24px;
    }

    .dv-route-bridge::before {
      left: 0;
      right: 0;
      width: auto;
      height: 2px;
    }

    .dv-route-bridge .q-icon {
      transform: rotate(90deg);
    }

    .dv-route-swap {
      display: none;
    }

    .dv-corporate-strip {
      grid-template-columns: 1fr;
    }

    .dv-corporate-grid {
      grid-template-columns: 1fr;
    }

    .dv-search-card.dv-search-card--structured .dv-search-actions {
      align-items: stretch;
    }

    .dv-search-card.dv-search-card--structured .dv-search-helper {
      justify-content: center;
    }

    .dv-toolbar {
      gap: 10px;
    }

    .dv-toolbar__left,
    .dv-toolbar__right {
      width: 100%;
    }

    .dv-sort-select,
    .dv-action-toggle {
      flex: 1 1 auto;
    }

  }

  /* Inline search flow */
  .dv-search-screen.dv-search-screen--inline {
    min-height: auto;
    padding-bottom: 22px;
    z-index: 80;
  }

  .dv-search-screen--inline .dv-search-hero {
    padding-bottom: 112px;
  }

  .dv-search-screen--inline .dv-search-shell {
    margin-bottom: 0;
    z-index: 90;
  }

  .dv-inline-results {
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 0 0 48px;
    background: #f8fafc;
  }

  .dv-inline-results--availability .dv-main-wrapper {
    margin-top: 0;
    padding-top: 4px;
  }

  .dv-inline-results--summary .dv-summary-screen {
    min-height: auto;
    padding-top: 8px;
    background: #f8fafc;
  }

  /* Availability filters */
  .dv-main-wrapper {
    max-width: 1400px;
    padding-top: 24px;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    .dv-sidebar {
      width: 280px;
      top: 20px;
    }
  }

  .dv-filter-card {
    overflow: hidden;
    padding: 0;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 14px 34px -28px rgba(15, 23, 42, 0.5);
  }

  .dv-availability-filter__header {
    display: flex;
    min-height: 62px;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid #edf2f7;
    background: #f8fafc;
  }

  .dv-availability-filter__title {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;
    color: #172033;
    font-size: 15px;
    font-weight: 900;
  }

  .dv-availability-filter__title .q-icon {
    color: var(--reserve-primary);
    font-size: 20px;
  }

  .dv-availability-filter__counter {
    display: inline-flex;
    min-width: 22px;
    min-height: 22px;
    align-items: center;
    justify-content: center;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(66, 143, 112, 0.12);
    color: var(--reserve-primary);
    font-size: 11px;
    font-weight: 900;
  }

  .dv-availability-filter__clear {
    display: inline-flex;
    width: 34px;
    height: 34px;
    min-height: 34px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 8px;
    background: #ffffff;
    color: #64748b;
    cursor: pointer;
    font-size: 0;
  }

  .dv-availability-filter__clear:hover {
    background: #eef7f3;
    color: var(--reserve-primary);
  }

  .dv-availability-filter__clear .q-icon {
    font-size: 18px;
  }

  .dv-availability-filter__content {
    display: flex;
    flex-direction: column;
  }

  .dv-availability-filter-section {
    border-bottom: 1px solid #f1f5f9;
  }

  .dv-availability-filter-section:last-child {
    border-bottom: 0;
  }

  .dv-availability-filter-section__header {
    display: flex;
    width: 100%;
    min-height: 48px;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 13px 16px;
    background: #ffffff;
    color: #172033;
    cursor: pointer;
    text-align: left;
  }

  .dv-availability-filter-section__header:hover {
    background: #f8fafc;
  }

  .dv-availability-filter-section__label {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 850;
  }

  .dv-availability-filter-section__label .q-icon {
    width: 20px;
    color: var(--reserve-primary);
    font-size: 18px;
  }

  .dv-availability-filter-section__chevron {
    color: #94a3b8;
  }

  .dv-availability-filter-section__body {
    display: grid;
    gap: 8px;
    padding: 0 16px 14px;
  }

  .dv-availability-checkbox {
    display: flex;
    min-height: 28px;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #4b5f76;
    cursor: pointer;
    font-size: 12px;
    font-weight: 750;
  }

  .dv-availability-checkbox:hover {
    color: #172033;
  }

  .dv-availability-checkbox__main {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 9px;
  }

  .dv-availability-checkbox input {
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
    accent-color: var(--reserve-primary);
    cursor: pointer;
  }

  .dv-availability-checkbox__count {
    display: inline-flex;
    min-width: 24px;
    justify-content: center;
    padding: 3px 7px;
    border-radius: 999px;
    background: #f1f5f9;
    color: #718096;
    font-size: 10px;
    font-weight: 900;
  }

  .dv-availability-filter-empty {
    display: inline-flex;
    min-height: 30px;
    align-items: center;
    color: #94a3b8;
    font-size: 12px;
    font-weight: 750;
  }

  .dv-availability-range {
    display: grid;
    gap: 10px;
    padding-top: 2px;
  }

  .dv-availability-range__values {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #64748b;
    font-size: 11px;
    font-weight: 850;
  }

  .dv-availability-range__values strong {
    color: #172033;
    font-weight: 900;
  }

  .dv-availability-time-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .dv-availability-time-field {
    display: grid;
    gap: 5px;
  }

  .dv-availability-time-field span {
    color: #718096;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .dv-availability-time-field input {
    width: 100%;
    min-height: 34px;
    padding: 6px 8px;
    border: 1px solid #dfe6ef;
    border-radius: 8px;
    background: #f8fafc;
    color: #172033;
    font-size: 12px;
    font-weight: 800;
  }

  .dv-filter-overlay {
    display: none;
  }

  .dv-filter-drawer-header {
    display: none;
  }

  .dv-filter-btn--mobile {
    display: none;
  }

  /* Selection sidebar */
  .dv-selection-box {
    gap: 0;
    overflow: hidden;
    padding: 0;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 14px 34px -26px rgba(15, 23, 42, 0.55);
  }

  .dv-selection-header {
    min-height: 62px;
    padding: 15px 16px;
    border-bottom: 1px solid #edf2f7;
    background: #f8fafc;
  }

  .dv-selection-title {
    color: #172033;
    font-size: 15px;
  }

  .dv-selection-title .q-icon {
    color: var(--reserve-primary);
    font-size: 20px;
  }

  .dv-selection-clear {
    width: 34px;
    min-width: 34px;
    height: 34px;
    padding: 0;
    border: 0;
    background: #ffffff;
    color: #64748b;
    font-size: 0;
  }

  .dv-selection-clear:hover:not(:disabled) {
    background: #fef2f2;
    color: #dc2626;
  }

  .dv-selection-clear .q-icon {
    font-size: 18px;
  }

  .dv-selection-clear:disabled {
    background: transparent;
    color: #94a3b8;
    opacity: 1;
  }

  .dv-selection-stack {
    gap: 12px;
    padding: 14px;
  }

  .dv-selection-card {
    position: relative;
    overflow: hidden;
    min-height: 128px;
    gap: 10px;
    padding: 16px 14px 14px;
    border: 1px solid #dfe6ef;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 10px 24px -22px rgba(15, 23, 42, 0.65);
  }

  .dv-selection-card:not(.dv-selection-card--empty)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--reserve-primary);
  }

  .dv-selection-card--combined::before {
    background: linear-gradient(90deg, var(--reserve-primary), var(--reserve-secondary));
  }

  .dv-selection-card--empty {
    min-height: 116px;
    align-items: center;
    justify-content: center;
    border: 1.5px dashed #cbd5e1;
    background: #f8fafc;
    box-shadow: none;
    color: #94a3b8;
  }

  .dv-selection-badge {
    border-radius: 999px;
    background: #eef7f3;
  }

  .dv-selection-route {
    font-size: 13px;
  }

  .dv-selection-fare {
    align-items: flex-end;
  }

  .dv-selection-price {
    color: #172033;
    font-size: 18px;
  }

  .dv-selection-footer {
    gap: 10px;
    padding: 14px 16px 16px;
    border-top: 1px solid #edf2f7;
    background: #f8fafc;
  }

  .dv-selection-total strong {
    color: #172033;
  }

  .dv-selection-hint {
    color: #718096;
  }

  .dv-tarifar-btn {
    background: var(--reserve-primary);
  }

  .dv-tarifar-btn:hover:not(:disabled) {
    background: #34765d;
  }

  @media (max-width: 1023px) {
    .dv-filter-overlay {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 40;
      background: rgba(15, 23, 42, 0.38);
    }

    .dv-sidebar.is-drawer-open {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 50;
      width: min(320px, 88vw);
      overflow-y: auto;
      padding: 14px;
      background: #ffffff;
      box-shadow: 24px 0 48px -34px rgba(15, 23, 42, 0.72);
    }

    .dv-filter-drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }

    .dv-filter-drawer-header h2 {
      margin: 0;
      color: #172033;
      font-size: 17px;
      font-weight: 900;
    }

    .dv-filter-drawer-header button {
      display: inline-flex;
      width: 36px;
      height: 36px;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      background: #f1f5f9;
      color: #526173;
      cursor: pointer;
    }

    .dv-filter-btn--mobile {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .dv-content-area {
      order: 3;
      padding-bottom: 0;
    }

    .dv-selection-panel {
      order: 2;
    }

    .dv-selection-panel.is-empty {
      display: none;
      position: static;
      width: 100%;
      max-height: none;
      overflow: visible;
    }

    .dv-selection-panel.is-active {
      position: sticky;
      top: 8px;
      left: auto;
      right: auto;
      bottom: auto;
      z-index: 20;
      width: 100%;
      max-height: none;
      overflow: visible;
    }
  }

  @media (max-width: 520px) {
    .dv-itinerary-field__body {
      grid-template-columns: 1fr;
      gap: 6px;
      align-items: start;
    }

    .dv-itinerary-input {
      font-size: 14px;
    }

    .dv-route-overview {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .dv-route-code-block,
    .dv-route-code-block--end {
      align-items: flex-start;
      text-align: left;
    }

    .dv-route-bridge {
      justify-content: flex-start;
    }

    .dv-route-bridge::before {
      left: 18px;
      right: auto;
      width: 2px;
      height: 100%;
    }

    .dv-route-bridge .q-icon {
      transform: none;
    }
  }
`;

// --- MOCK DATA DO HTML ---
const JSON_MOCK_DATA = {
  segmentLabels: {
    "0": "RIO -> SAO",
    "1": "SAO -> RIO",
    "99": "Voos Combinados"
  },
  flightsBySegment: {
    "0": [
      {
        IdViagem: "LA0", CodSisRes: "LA", Moeda: "R$", BuyNow: true,
        Voos: [
          { NumeroVoo: "3339", NomeCia: "LATAM", CodAeroportoOrigem: "GIG", NomeAeroportoOrigem: "Rio de Janeiro, Galeão", CodAeroportoDestino: "GRU", NomeAeroportoDestino: "Guarulhos", SaidaDate: "qui, 14 mai", SaidaTime: "05:00", ChegadaDate: "qui, 14 mai", ChegadaTime: "06:15", Duracao: 75, Paradas: 0, Seg: 0 }
        ],
        Tarifas: [
          { IdTarifa: 0, Nome: "LIGHT", Valor: 2188.15, Classe: "M", Bagage: "0" },
          { IdTarifa: 1, Nome: "STANDARD", Valor: 2320.28, Classe: "M", Bagage: "1" }
        ]
      }
    ],
    "1": [
      {
        IdViagem: "G3-VOLTA", CodSisRes: "G3", Moeda: "R$", BuyNow: false,
        Voos: [
          { NumeroVoo: "1683", NomeCia: "GOL", CodAeroportoOrigem: "CGH", NomeAeroportoOrigem: "Congonhas", CodAeroportoDestino: "CNF", NomeAeroportoDestino: "Confins", SaidaDate: "sex, 15 mai", SaidaTime: "12:40", ChegadaDate: "sex, 15 mai", ChegadaTime: "13:45", Duracao: 65, Paradas: 1, Seg: 1 },
          { NumeroVoo: "1412", NomeCia: "GOL", CodAeroportoOrigem: "CNF", NomeAeroportoOrigem: "Confins", CodAeroportoDestino: "GIG", NomeAeroportoDestino: "Galeão", SaidaDate: "sex, 15 mai", SaidaTime: "14:10", ChegadaDate: "sex, 15 mai", ChegadaTime: "15:00", Duracao: 50, Paradas: 0, Seg: 1 }
        ],
        Tarifas: [
          { IdTarifa: 20, Nome: "LIGHT", Valor: 1980.4, Classe: "B", Bagage: "0" },
          { IdTarifa: 21, Nome: "PLUS", Valor: 2174.9, Classe: "B", Bagage: "1" }
        ]
      }
    ],
    "99": [
      {
        IdViagem: "COMBINADO-LA-G3", CodSisRes: "LA", Moeda: "R$", BuyNow: true, isCombinado: true,
        Voos: [
          { NumeroVoo: "3339", NomeCia: "LATAM", CodAeroportoOrigem: "GIG", NomeAeroportoOrigem: "Galeão", CodAeroportoDestino: "GRU", NomeAeroportoDestino: "Guarulhos", SaidaDate: "qui, 14 mai", SaidaTime: "05:00", ChegadaDate: "qui, 14 mai", ChegadaTime: "06:15", Duracao: 75, Paradas: 0, Seg: 0 },
          { NumeroVoo: "1683", NomeCia: "GOL", CodAeroportoOrigem: "CGH", NomeAeroportoOrigem: "Congonhas", CodAeroportoDestino: "GIG", NomeAeroportoDestino: "Galeão", SaidaDate: "sex, 15 mai", SaidaTime: "12:40", ChegadaDate: "sex, 15 mai", ChegadaTime: "15:00", Duracao: 140, Paradas: 1, Seg: 1 }
        ],
        Tarifas: [
          { IdTarifa: 990, Nome: "COMBINADA LIGHT", Valor: 4168.55, Classe: "M", Bagage: "0" },
          { IdTarifa: 991, Nome: "COMBINADA PLUS", Valor: 4495.18, Classe: "M", Bagage: "1" },
          { IdTarifa: 992, Nome: "FLEX CORPORATE", Valor: 4820.74, Classe: "Y", Bagage: "1" }
        ]
      }
    ]
  }
};

const INITIAL_SUPPLIERS = [
  { id: 'LA', name: 'LATAM', status: 'idle', count: 0 },
  { id: 'G3', name: 'GOL', status: 'idle', count: 0 },
  { id: 'AD', name: 'Azul', status: 'idle', count: 0 },
  { id: 'SABRE', name: 'SabreV2', status: 'idle', count: 0 },
];

const TRIP_MODE_OPTIONS = [
  { value: 'oneway', label: 'So ida' },
  { value: 'roundtrip', label: 'Ida e volta' },
  { value: 'multi', label: 'Multiplos trechos' }
];

const TRIP_MODE_PRESETS = {
  oneway: {
    origin: 'Sao Paulo',
    destination: 'Rio de Janeiro',
    departureDate: 'qui, 14 mai',
    returnDate: '',
    multiSegments: []
  },
  roundtrip: {
    origin: 'Sao Paulo',
    destination: 'Rio de Janeiro',
    departureDate: 'qui, 14 mai',
    returnDate: 'sex, 15 mai',
    multiSegments: []
  },
  multi: {
    origin: 'Sao Paulo',
    destination: 'Rio de Janeiro',
    departureDate: 'qui, 14 mai',
    returnDate: 'sex, 15 mai',
    multiSegments: [
      { origin: 'Sao Paulo', destination: 'Rio de Janeiro', date: 'qui, 14 mai' },
      { origin: 'Rio de Janeiro', destination: 'Sao Paulo', date: 'sex, 15 mai' }
    ]
  }
};

const DEFAULT_SEARCH_CRITERIA = {
  tripType: 'roundtrip',
  origin: 'Sao Paulo',
  destination: 'Rio de Janeiro',
  departureDate: 'qui, 14 mai',
  returnDate: 'sex, 15 mai',
  multiSegments: [],
  passengers: ['matheus-castro'],
  customPassengers: [],
  anonymousPassengerCount: 0
};

const PASSENGER_OPTIONS = [
  { id: 'matheus-castro', name: 'Matheus Castro (Você)', role: 'Você', document: 'CPF ***.321-00', department: 'Produto' },
  { id: 'ana-costa', name: 'Ana Costa', role: 'Colaborador', document: 'CPF ***.884-11', department: 'Comercial' },
  { id: 'carlos-oliveira', name: 'Carlos Oliveira', role: 'Colaborador', document: 'CPF ***.447-22', department: 'Operacoes' },
  { id: 'marcos-silva', name: 'Marcos Silva', role: 'Colaborador', document: 'CPF ***.109-33', department: 'Financeiro' },
  { id: 'juliana-mendes', name: 'Juliana Mendes', role: 'Colaborador', document: 'CPF ***.760-44', department: 'Diretoria' },
  { id: 'felipe-ramos', name: 'Felipe Ramos', role: 'Colaborador', document: 'CPF ***.502-55', department: 'Tecnologia' }
];

const FEATURED_FLIGHTS = [
  {
    id: 1,
    origin: 'Rio de Janeiro',
    destination: 'São Paulo',
    date: 'Jun - Jul 2026',
    price: 'R$ 418',
    imageUrl: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    origin: 'Sao Paulo',
    destination: 'Shenzhen, China',
    date: 'Jul - Ago 2026',
    price: 'R$ 5.420',
    imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    origin: 'Sao Paulo',
    destination: 'Rio de Janeiro',
    date: 'Ago - Set 2026',
    price: 'R$ 452',
    imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    origin: 'Sao Paulo',
    destination: 'Paris, Franca',
    date: 'Out - Nov 2026',
    price: 'R$ 4.250',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80'
  }
];

const createEmptyFlightsMap = () => ({ "0": [], "1": [], "99": [] });

const createEmptySelectedFares = () => ({
  segments: { "0": null, "1": null },
  combined: null
});

const getFareSelectionKey = (flight, fare) => `${flight.IdViagem}-${fare.IdTarifa}`;

const formatDuration = (mins) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h${m > 0 ? m : ''}`;
};

const formatPrice = (value) => {
  const parts = value.toFixed(2).split('.');
  return { integer: parts[0], decimals: parts[1] };
};

const getFlightMinPrice = (flight) => Math.min(...flight.Tarifas.map(tarifa => tarifa.Valor));

const getFlightTotalStops = (flight) => flight.Voos.reduce((total, voo) => total + (voo.Paradas || 0), 0);

const getFlightTotalDuration = (flight) => flight.Voos.reduce((total, voo) => total + (voo.Duracao || 0), 0);

const getFlightMainAirline = (flight) => flight.Voos[0]?.NomeCia || flight.CodSisRes || '';

const AIRLINE_LOGO_PATHS = {
  LA: 'img/airLines/LA.png',
  LATAM: 'img/airLines/LA.png',
  G3: 'img/airLines/G3.png',
  GOL: 'img/airLines/G3.png',
  AD: 'img/airLines/AD2.gif',
  AZUL: 'img/airLines/AD2.gif',
  SBR: 'img/sistemasReserva/aereo/SBR.gif',
  SABRE: 'img/sistemasReserva/aereo/SBR.gif',
  SABREV2: 'img/sistemasReserva/aereo/SBR.gif'
};

const getAirlineLogoSrc = (value = '') => {
  const key = String(value).replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  const logoPath = AIRLINE_LOGO_PATHS[key];
  return logoPath ? `${import.meta.env.BASE_URL}${logoPath}` : '';
};

const AirlineLogo = ({ code, name, className = 'airline-logo-image', fallbackClassName = 'airline-logo-fallback' }) => {
  const label = name || code || '';
  const src = getAirlineLogoSrc(code) || getAirlineLogoSrc(name);

  return src
    ? <img className={className} src={src} alt={label} loading="lazy" draggable="false" />
    : <span className={fallbackClassName}>{label}</span>;
};

const getFlightFirstOrigin = (flight) => flight.Voos[0]?.CodAeroportoOrigem || '';

const getFlightLastDestination = (flight) => flight.Voos[flight.Voos.length - 1]?.CodAeroportoDestino || '';

const getFlightLastArrivalTime = (flight) => flight.Voos[flight.Voos.length - 1]?.ChegadaTime || '';

const isTimeWithinWindow = (time, window) => {
  if (!time) return true;
  if (window.from && time < window.from) return false;
  if (window.to && time > window.to) return false;
  return true;
};

const matchesFareFeature = (fare, feature) => {
  const fareName = fare.Nome.toUpperCase();
  const hasBaggage = fare.Bagage !== "0";

  if (feature === 'baggage') return hasBaggage;
  if (feature === 'seat') return hasBaggage || fareName.includes('PLUS') || fareName.includes('FLEX');
  if (feature === 'flex') return fareName.includes('FLEX');

  return true;
};

const getSelectedPassengers = (passengerIds = [], customPassengers = []) => (
  [...PASSENGER_OPTIONS, ...customPassengers].filter(passenger => passengerIds.includes(passenger.id))
);

const createCustomPassengerId = (name) => {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `custom-${slug || Date.now()}`;
};

const getAnonymousPassengerCount = (criteria = {}) => (
  Math.max(0, Number(criteria.anonymousPassengerCount) || 0)
);

const getPassengerCount = (criteria = {}) => {
  const namedPassengerCount = Array.isArray(criteria.passengers) ? criteria.passengers.length : 0;
  const anonymousPassengerCount = getAnonymousPassengerCount(criteria);

  return Math.max(1, namedPassengerCount + anonymousPassengerCount);
};

const formatPassengerLabel = (count) => `${count} ${count === 1 ? 'passageiro' : 'passageiros'}`;

const formatPassengerSummary = (passengers, anonymousPassengerCount = 0) => {
  const passengerNames = passengers.map(passenger => passenger.name);

  if (anonymousPassengerCount === 1) {
    passengerNames.push('1 passageiro sem nome');
  }

  if (anonymousPassengerCount > 1) {
    passengerNames.push(`${anonymousPassengerCount} passageiros sem nome`);
  }

  return passengerNames.length > 0
    ? passengerNames.join(', ')
    : 'Nenhum passageiro selecionado';
};

const getAirportNameFromLabel = (label = '') => label.replace(/\s*\([^)]*\)/g, '').trim();

const SearchScreen = ({ criteria, onCriteriaChange, onSubmit, inline = false, showFeaturedFlights = true }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [flightTypeFilter, setFlightTypeFilter] = useState('all');
  const [periodFilter, setPeriodFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('+2');
  const [isPassengerPickerOpen, setIsPassengerPickerOpen] = useState(false);
  const [passengerQuery, setPassengerQuery] = useState('');
  const selectedPassengerIds = Array.isArray(criteria.passengers) ? criteria.passengers : DEFAULT_SEARCH_CRITERIA.passengers;
  const customPassengers = Array.isArray(criteria.customPassengers) ? criteria.customPassengers : [];
  const passengerOptions = [...PASSENGER_OPTIONS, ...customPassengers];
  const selectedPassengers = getSelectedPassengers(selectedPassengerIds, customPassengers);
  const anonymousPassengerCount = getAnonymousPassengerCount(criteria);
  const passengerCount = getPassengerCount(criteria);
  const tripType = criteria.tripType || DEFAULT_SEARCH_CRITERIA.tripType;
  const multiSegments = Array.isArray(criteria.multiSegments) ? criteria.multiSegments : [];
  const originName = getAirportNameFromLabel(criteria.origin);
  const destinationName = getAirportNameFromLabel(criteria.destination);
  const normalizedPassengerQuery = passengerQuery.trim().toLowerCase();
  const hasPassengerQuery = normalizedPassengerQuery.length > 0;
  const passengerSuggestions = passengerOptions.filter(passenger => {
    if (selectedPassengerIds.includes(passenger.id)) return false;
    if (!hasPassengerQuery) return false;

    return [passenger.name, passenger.role, passenger.department, passenger.document]
      .join(' ')
      .toLowerCase()
      .includes(normalizedPassengerQuery);
  }).slice(0, 5);
  const addPassenger = (passengerId) => {
    if (selectedPassengerIds.includes(passengerId)) return;
    onCriteriaChange('passengers', [...selectedPassengerIds, passengerId]);
    setPassengerQuery('');
    setIsPassengerPickerOpen(false);
  };
  const addCustomPassenger = () => {
    const passengerName = passengerQuery.trim();
    if (!passengerName) return;

    const existingPassenger = passengerOptions.find(
      passenger => passenger.name.toLowerCase() === passengerName.toLowerCase()
    );

    if (existingPassenger) {
      addPassenger(existingPassenger.id);
      return;
    }

    const baseId = createCustomPassengerId(passengerName);
    const passengerId = passengerOptions.some(passenger => passenger.id === baseId)
      ? `${baseId}-${Date.now()}`
      : baseId;
    const nextPassenger = {
      id: passengerId,
      name: passengerName,
      role: 'Convidado',
      document: '',
      department: 'Adicionado manualmente'
    };

    onCriteriaChange('customPassengers', [...customPassengers, nextPassenger]);
    onCriteriaChange('passengers', [...selectedPassengerIds, passengerId]);
    setPassengerQuery('');
    setIsPassengerPickerOpen(false);
  };
  const removePassenger = (passengerId) => {
    if (selectedPassengerIds.length + anonymousPassengerCount <= 1) return;
    onCriteriaChange('passengers', selectedPassengerIds.filter(id => id !== passengerId));
  };
  const addAnonymousPassenger = () => {
    if (passengerCount >= 9) return;
    onCriteriaChange('anonymousPassengerCount', anonymousPassengerCount + 1);
  };
  const removeAnonymousPassenger = () => {
    if (anonymousPassengerCount <= 0) return;
    onCriteriaChange('anonymousPassengerCount', anonymousPassengerCount - 1);
  };
  const handlePassengerKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsPassengerPickerOpen(false);
      return;
    }

    if (event.key === 'Enter' && hasPassengerQuery) {
      event.preventDefault();
      if (passengerSuggestions.length > 0) {
        addPassenger(passengerSuggestions[0].id);
        return;
      }

      addCustomPassenger();
    }
  };
  const swapRoute = () => {
    const previousOrigin = criteria.origin;
    onCriteriaChange('origin', criteria.destination);
    onCriteriaChange('destination', previousOrigin);
  };
  const selectTripMode = (nextTripType) => {
    const preset = TRIP_MODE_PRESETS[nextTripType] || TRIP_MODE_PRESETS.roundtrip;
    onCriteriaChange('tripType', nextTripType);
    onCriteriaChange('origin', preset.origin);
    onCriteriaChange('destination', preset.destination);
    onCriteriaChange('departureDate', preset.departureDate);
    onCriteriaChange('returnDate', preset.returnDate);
    onCriteriaChange('multiSegments', preset.multiSegments.map(segment => ({ ...segment })));
  };
  const syncMultiSegments = (nextSegments) => {
    onCriteriaChange('multiSegments', nextSegments);

    const firstSegment = nextSegments[0];
    const lastSegment = nextSegments[nextSegments.length - 1];
    if (firstSegment) {
      onCriteriaChange('origin', firstSegment.origin);
      onCriteriaChange('departureDate', firstSegment.date);
    }
    if (lastSegment) {
      onCriteriaChange('destination', lastSegment.destination);
      onCriteriaChange('returnDate', lastSegment.date);
    }
  };
  const updateMultiSegment = (index, field, value) => {
    syncMultiSegments(multiSegments.map((segment, currentIndex) => (
      currentIndex === index ? { ...segment, [field]: value } : segment
    )));
  };
  const addMultiSegment = () => {
    if (multiSegments.length >= 6) return;

    const previousSegment = multiSegments[multiSegments.length - 1] || TRIP_MODE_PRESETS.multi.multiSegments[0];
    syncMultiSegments([
      ...multiSegments,
      {
        origin: previousSegment?.destination || '',
        destination: '',
        date: ''
      }
    ]);
  };
  const removeMultiSegment = (index) => {
    if (multiSegments.length <= 2) return;
    syncMultiSegments(multiSegments.filter((_, currentIndex) => currentIndex !== index));
  };

  return (
  <main className={`dv-search-screen dv-search-screen--reserve ${inline ? 'dv-search-screen--inline' : ''}`}>
    <section className="dv-search-hero">
      <div className="dv-service-tabs" aria-label="Servicos de viagem">
        <div className="dv-service-tab-list">
          <button type="button" className="dv-service-tab is-active"><span className="q-icon">flight</span>Aereo</button>
          <button type="button" className="dv-service-tab"><span className="q-icon">hotel</span>Hotel</button>
          <button type="button" className="dv-service-tab"><span className="q-icon">directions_car</span>Carro</button>
          <button type="button" className="dv-service-tab"><span className="q-icon">directions_bus</span>Rodoviario</button>
        </div>
      </div>

      <div className="dv-search-hero-copy">
        <h1>Para onde sera sua proxima reuniao?</h1>
        <p>Busque e reserve com as melhores tarifas corporativas.</p>
      </div>
    </section>

    <section className="dv-search-shell">
      <form className="dv-booking-card" onSubmit={onSubmit}>
        <div className="dv-booking-top">
          <div className="dv-trip-segmented" aria-label="Tipo de viagem">
            {TRIP_MODE_OPTIONS.map(option => (
              <button
                type="button"
                className={`dv-trip-segmented__item ${tripType === option.value ? 'is-active' : ''}`}
                key={option.value}
                onClick={() => selectTripMode(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="dv-booking-tools">
            <div className="dv-passenger-control">
              <div
                className="dv-passenger-selector"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsPassengerPickerOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  className="dv-passenger-toolbar"
                  aria-expanded={isPassengerPickerOpen}
                  aria-label="Selecionar passageiros"
                  onClick={() => setIsPassengerPickerOpen(prev => !prev)}
                >
                  <span className="q-icon">person</span>
                  <strong>{formatPassengerLabel(passengerCount)}</strong>
                  <span className="q-icon">expand_more</span>
                </button>

                {isPassengerPickerOpen && (
                  <div className="dv-passenger-popover">
                    <div className="dv-passenger-chips">
                      {selectedPassengers.map(passenger => (
                        <span className="dv-passenger-chip" key={passenger.id}>
                          <span>{passenger.name}</span>
                          <button
                            type="button"
                            aria-label={`Remover ${passenger.name}`}
                            disabled={selectedPassengerIds.length + anonymousPassengerCount <= 1}
                            onClick={() => removePassenger(passenger.id)}
                          >
                            <span className="q-icon">close</span>
                          </button>
                        </span>
                      ))}
                      {anonymousPassengerCount > 0 && (
                        <span className="dv-passenger-chip dv-passenger-chip--anonymous">
                          <span>{formatPassengerLabel(anonymousPassengerCount)} sem nome</span>
                          <button
                            type="button"
                            aria-label="Remover passageiro sem nome"
                            onClick={removeAnonymousPassenger}
                          >
                            <span className="q-icon">close</span>
                          </button>
                        </span>
                      )}
                    </div>

                    <div className="dv-passenger-input-wrap">
                      <input
                        className="dv-passenger-input"
                        value={passengerQuery}
                        onChange={(event) => setPassengerQuery(event.target.value)}
                        onKeyDown={handlePassengerKeyDown}
                        placeholder="Buscar ou adicionar passageiro..."
                      />
                      <span className="dv-passenger-hint">Pressione Enter para adicionar convidados.</span>
                    </div>

                    {hasPassengerQuery && (
                      <div className="dv-passenger-suggestions">
                        {passengerSuggestions.length > 0 ? (
                          passengerSuggestions.map(passenger => (
                            <button
                              type="button"
                              className="dv-passenger-option"
                              key={passenger.id}
                              onMouseDown={(event) => {
                                event.preventDefault();
                                addPassenger(passenger.id);
                              }}
                            >
                              <span className="q-icon">person_add</span>
                              <span className="dv-passenger-copy">
                                <span className="dv-passenger-name">{passenger.name}</span>
                                <span className="dv-passenger-meta">{[passenger.role, passenger.department, passenger.document].filter(Boolean).join(' - ')}</span>
                              </span>
                            </button>
                          ))
                        ) : (
                          <span className="dv-passenger-no-results">Nenhum passageiro encontrado.</span>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                type="button"
                className="dv-passenger-quick-add dv-passenger-quick-add--decrease"
                aria-label="Diminuir quantidade de passageiros"
                disabled={anonymousPassengerCount <= 0 || passengerCount <= 1}
                onClick={removeAnonymousPassenger}
              >
                <span className="q-icon">remove</span>
              </button>

              <button
                type="button"
                className="dv-passenger-quick-add dv-passenger-quick-add--increase"
                aria-label="Adicionar passageiro sem especificar"
                disabled={passengerCount >= 9}
                onClick={addAnonymousPassenger}
              >
                <span className="q-icon">add</span>
              </button>
            </div>

            <button
              type="button"
              className={`dv-filter-toggle ${showFilters ? 'is-active' : ''}`}
              aria-pressed={showFilters}
              onClick={() => setShowFilters(prev => !prev)}
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className={`dv-flight-search-grid dv-flight-search-grid--${tripType}`}>
          {tripType === 'multi' ? (
            <div className="dv-multi-route-builder" aria-label="Trechos adicionados">
              {multiSegments.map((segment, index) => (
                <div className="dv-multi-route-row" key={`${segment.origin}-${segment.destination}-${index}`}>
                  <label className="dv-booking-field dv-booking-field--multi-route">
                    <span className="dv-booking-label">Trecho {index + 1} - Origem</span>
                    <span className="dv-booking-field__body">
                      <span className="q-icon">flight_takeoff</span>
                      <span className="dv-booking-route-copy">
                        <input
                          className="dv-booking-input"
                          value={getAirportNameFromLabel(segment.origin)}
                          onChange={(event) => updateMultiSegment(index, 'origin', event.target.value)}
                        />
                      </span>
                    </span>
                  </label>

                  <label className="dv-booking-field dv-booking-field--multi-route">
                    <span className="dv-booking-label">Destino</span>
                    <span className="dv-booking-field__body">
                      <span className="q-icon">flight_land</span>
                      <span className="dv-booking-route-copy">
                        <input
                          className="dv-booking-input"
                          value={getAirportNameFromLabel(segment.destination)}
                          onChange={(event) => updateMultiSegment(index, 'destination', event.target.value)}
                        />
                      </span>
                    </span>
                  </label>

                  <label className="dv-booking-field dv-booking-field--multi-route">
                    <span className="dv-booking-label">Data</span>
                    <span className="dv-booking-field__body">
                      <span className="q-icon">calendar_month</span>
                      <input
                        className="dv-booking-input"
                        value={segment.date}
                        onChange={(event) => updateMultiSegment(index, 'date', event.target.value)}
                      />
                    </span>
                  </label>

                  <button
                    type="button"
                    className="dv-multi-route-remove"
                    aria-label={`Remover trecho ${index + 1}`}
                    disabled={multiSegments.length <= 2}
                    onClick={() => removeMultiSegment(index)}
                  >
                    <span className="q-icon">close</span>
                  </button>
                </div>
              ))}

              <div className="dv-multi-route-footer">
                <button
                  type="button"
                  className="dv-multi-route-add"
                  disabled={multiSegments.length >= 6}
                  onClick={addMultiSegment}
                >
                  <span className="q-icon">add</span>
                  Adicionar trecho
                </button>

                <button type="submit" className="dv-search-submit dv-search-submit--booking">
                  <Search className="w-4 h-4" />
                  Buscar voos
                </button>
              </div>
            </div>
          ) : (
            <>
              <label className="dv-booking-field dv-booking-field--route">
                <span className="dv-booking-label">Origem</span>
                <span className="dv-booking-field__body">
                  <span className="q-icon">flight_takeoff</span>
                  <span className="dv-booking-route-copy">
                    <input
                      className="dv-booking-input"
                      value={originName}
                      onChange={(event) => onCriteriaChange('origin', event.target.value)}
                    />
                  </span>
                </span>
              </label>

              <button type="button" className="dv-booking-swap" aria-label="Inverter origem e destino" onClick={swapRoute}>
                <span className="q-icon">sync_alt</span>
              </button>

              <label className="dv-booking-field dv-booking-field--route">
                <span className="dv-booking-label">Destino</span>
                <span className="dv-booking-field__body">
                  <span className="q-icon">flight_land</span>
                  <span className="dv-booking-route-copy">
                    <input
                      className="dv-booking-input"
                      value={destinationName}
                      onChange={(event) => onCriteriaChange('destination', event.target.value)}
                    />
                  </span>
                </span>
              </label>

              <label className="dv-booking-field dv-booking-field--date">
                <span className="dv-booking-label">Ida</span>
                <span className="dv-booking-field__body">
                  <span className="q-icon">calendar_month</span>
                  <input
                    className="dv-booking-input"
                    value={criteria.departureDate}
                    onChange={(event) => onCriteriaChange('departureDate', event.target.value)}
                  />
                </span>
              </label>

              {tripType !== 'oneway' && (
                <label className="dv-booking-field dv-booking-field--date">
                  <span className="dv-booking-label">Volta</span>
                  <span className="dv-booking-field__body">
                    <span className="q-icon">event_available</span>
                    <input
                      className="dv-booking-input"
                      value={criteria.returnDate}
                      onChange={(event) => onCriteriaChange('returnDate', event.target.value)}
                    />
                  </span>
                </label>
              )}

              <button type="submit" className="dv-search-submit dv-search-submit--booking">
                <Search className="w-4 h-4" />
                Buscar voos
              </button>
            </>
          )}
        </div>

        {showFilters && (
          <div className="dv-advanced-filters">
            <div className="dv-filter-block">
              <span className="dv-filter-block__title">Tipo de voo</span>
              <div className="dv-filter-chip-group">
                {[
                  ['all', 'Qualquer'],
                  ['direct', 'Direto'],
                  ['connection', 'Com conexao']
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={`dv-filter-chip ${flightTypeFilter === value ? 'is-active' : ''}`}
                    onClick={() => setFlightTypeFilter(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="dv-filter-block">
              <span className="dv-filter-block__title">Periodo de partida</span>
              <div className="dv-filter-chip-group">
                {[
                  ['all', 'Qualquer'],
                  ['morning', 'Manha'],
                  ['afternoon', 'Tarde'],
                  ['night', 'Noite']
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={`dv-filter-chip ${periodFilter === value ? 'is-active' : ''}`}
                    onClick={() => setPeriodFilter(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label className="dv-filter-block">
              <span className="dv-filter-block__title">Faixa de horario</span>
              <select className="dv-filter-select" value={timeRange} onChange={(event) => setTimeRange(event.target.value)}>
                <option value="0">Somente horario exato</option>
                <option value="+2">+ 2 horas</option>
                <option value="+4">+ 4 horas</option>
                <option value="+6">+ 6 horas</option>
                <option value="+12">+ 12 horas</option>
              </select>
            </label>
          </div>
        )}
      </form>

      {showFeaturedFlights && (
        <section className="dv-featured-flights" aria-label="Voos em destaque">
          <div className="dv-featured-flights__header">
            <h2>Voos em destaque</h2>
          </div>

          <div className="dv-featured-grid">
            {FEATURED_FLIGHTS.map(flight => (
              <article className="dv-featured-card" key={flight.id}>
                <div className="dv-featured-card__image">
                  <img src={flight.imageUrl} alt={flight.destination} />
                </div>

                <div className="dv-featured-card__body">
                  <div className="dv-featured-route">
                    <strong>{flight.destination}</strong>
                    <span>Saindo de {flight.origin}</span>
                  </div>

                  <div className="dv-featured-price-row">
                    <span>
                      <small>A partir de</small>
                      <strong>{flight.price}</strong>
                    </span>
                    <button type="button">Selecionar</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

    </section>
  </main>
  );
};

const SelectedFareSlot = ({ title, selection, emptyText }) => {
  if (!selection) {
    return (
      <div className="dv-selection-card dv-selection-card--empty">
        <span className="dv-selection-empty-icon"><span className="q-icon">add_circle</span></span>
        <span className="dv-selection-empty-title">{title}</span>
        <span className="dv-selection-empty-subtitle">{emptyText}</span>
      </div>
    );
  }

  const price = formatPrice(selection.fare.Valor);

  return (
    <div className={`dv-selection-card ${selection.isCombined ? 'dv-selection-card--combined' : ''}`}>
      <span className="dv-selection-badge">
        <span className="q-icon">{selection.isCombined ? 'connecting_airports' : 'flight'}</span>
        {title}
      </span>

      <div className="dv-selection-route">
        <span>{selection.origin}</span>
        <span className="q-icon">arrow_forward</span>
        <span>{selection.destination}</span>
      </div>

      <div className="dv-selection-fare">
        <span>{selection.fare.Nome}</span>
        <strong className="dv-selection-price">{selection.currency} {price.integer},{price.decimals}</strong>
      </div>

      <div className="dv-selection-meta">
        <span className="dv-selection-meta-chip"><span className="q-icon">confirmation_number</span>{selection.airline}-{selection.flightNumber}</span>
        <span className="dv-selection-meta-chip"><span className="q-icon">event</span>{selection.departureDate}</span>
        <span className="dv-selection-meta-chip"><span className="q-icon">schedule</span>{selection.departureTime} - {selection.arrivalTime}</span>
      </div>
    </div>
  );
};

const SelectionPanel = ({ selectedFares, tripType, onClear, onTarifar }) => {
  const selectedSegment0 = selectedFares.segments["0"];
  const selectedSegment1 = selectedFares.segments["1"];
  const selectedCombined = selectedFares.combined;
  const isOneWay = tripType === 'oneway';
  const hasSegmentSelection = Boolean(selectedSegment0 || selectedSegment1);
  const canTarifar = isOneWay
    ? Boolean(selectedSegment0)
    : Boolean(selectedCombined || (selectedSegment0 && selectedSegment1));
  const totalValue = selectedCombined
    ? selectedCombined.fare.Valor
    : isOneWay
      ? (selectedSegment0?.fare.Valor || 0)
      : (selectedSegment0?.fare.Valor || 0) + (selectedSegment1?.fare.Valor || 0);
  const totalPrice = formatPrice(totalValue);
  const hasSelection = Boolean(selectedCombined || selectedSegment0 || selectedSegment1);

  const hint = canTarifar && !selectedCombined
    ? isOneWay ? 'Trecho selecionado para reservar.' : 'Trechos selecionados para reservar.'
    : hasSelection
      ? ''
      : 'Selecione uma tarifa para iniciar.';

  return (
    <aside className={`dv-selection-panel ${hasSelection ? 'is-active' : 'is-empty'}`}>
      <div className="dv-selection-box">
        <div className="dv-selection-header">
          <div className="dv-selection-title">
            <span className="q-icon">receipt_long</span>
            Seleção de tarifas
          </div>
          <button type="button" className="dv-selection-clear" disabled={!hasSelection} onClick={onClear} aria-label="Limpar seleção">
            <span className="q-icon">backspace</span>
          </button>
        </div>

        <div className="dv-selection-stack">
          {selectedCombined ? (
            <SelectedFareSlot title="Combinado" selection={selectedCombined} emptyText="" />
          ) : isOneWay ? (
            <SelectedFareSlot title="Só ida" selection={selectedSegment0} emptyText="Aguardando a tarifa de ida." />
          ) : (
            <>
              <SelectedFareSlot title="Trecho 1" selection={selectedSegment0} emptyText="Aguardando a tarifa do trecho 1." />
              <SelectedFareSlot title="Trecho 2" selection={selectedSegment1} emptyText="Aguardando a tarifa do trecho 2." />
            </>
          )}
        </div>

        <div className="dv-selection-footer">
          <div className="dv-selection-total">
            <span>Total selecionado</span>
            <strong>R$ {totalPrice.integer},{totalPrice.decimals}</strong>
          </div>
          <button type="button" className="dv-tarifar-btn" disabled={!canTarifar} onClick={onTarifar}>
            <span className="q-icon">event_seat</span>
            Reservar
          </button>
          {hint ? <span className="dv-selection-hint">{hint}</span> : null}
        </div>
      </div>
    </aside>
  );
};

const getSelectedFareList = (selectedFares) => (
  selectedFares.combined
    ? [selectedFares.combined]
    : [selectedFares.segments["0"], selectedFares.segments["1"]].filter(Boolean)
);

const getBaseSelectionValue = (selections) => selections.reduce((total, selection) => total + selection.fare.Valor, 0);

const getLowestFareValueForSegment = (flights = []) => {
  const values = flights.flatMap(flight => flight.Tarifas.map(tarifa => tarifa.Valor));
  return values.length > 0 ? Math.min(...values) : 0;
};

const getLowestReferenceValue = (selectedFares, flightsMap) => {
  if (selectedFares.combined) {
    return getLowestFareValueForSegment(flightsMap["99"]);
  }

  return ["0", "1"].reduce((total, segmentKey) => {
    if (!selectedFares.segments[segmentKey]) return total;
    return total + getLowestFareValueForSegment(flightsMap[segmentKey]);
  }, 0);
};

const isAriaRecommendedSelection = (selection) => Boolean(selection?.fare?.AriaRecommended);

const buildAriaFareRecommendation = (selections, recommendedAmount) => {
  const baseSelection = selections[0];
  if (!baseSelection || recommendedAmount <= 0) return null;

  const firstFlight = baseSelection.flight.Voos[0];
  const lastFlight = baseSelection.flight.Voos[baseSelection.flight.Voos.length - 1];
  const airlineNames = [...new Set(baseSelection.flight.Voos.map(flight => flight.NomeCia || baseSelection.flight.CodSisRes).filter(Boolean))];
  const flightNumbers = baseSelection.flight.Voos.map(flight => `${flight.NomeCia || baseSelection.flight.CodSisRes} ${flight.NumeroVoo}`).join(' + ');
  const selectedAmount = getBaseSelectionValue(selections);
  const savingsAmount = Math.max(0, selectedAmount - recommendedAmount);
  const recommendedFare = {
    ...baseSelection.fare,
    IdTarifa: `aria-${baseSelection.fare.IdTarifa}`,
    Nome: baseSelection.fare.Nome.includes('ARIA') ? baseSelection.fare.Nome : `${baseSelection.fare.Nome} ARIA`,
    Valor: recommendedAmount,
    AriaRecommended: true
  };

  return {
    selection: {
      ...baseSelection,
      key: `${baseSelection.key}-aria-recommended`,
      fare: recommendedFare,
      flightNumber: flightNumbers,
      airline: airlineNames.join(' + ') || baseSelection.airline,
      origin: firstFlight?.CodAeroportoOrigem || baseSelection.origin,
      destination: lastFlight?.CodAeroportoDestino || baseSelection.destination,
      departureDate: firstFlight?.SaidaDate || baseSelection.departureDate,
      departureTime: firstFlight?.SaidaTime || baseSelection.departureTime,
      arrivalTime: lastFlight?.ChegadaTime || baseSelection.arrivalTime
    },
    title: 'Encontrei um voo melhor',
    subtitle: `${airlineNames.join(' + ') || baseSelection.airline} tem uma alternativa mais aderente à política, economizando ${formatCurrencyBRL(savingsAmount)} em relação ao voo escolhido.`,
    price: recommendedAmount,
    savings: savingsAmount,
    route: `${firstFlight?.CodAeroportoOrigem || baseSelection.origin} → ${lastFlight?.CodAeroportoDestino || baseSelection.destination}`,
    schedule: `${firstFlight?.SaidaTime || baseSelection.departureTime} - ${lastFlight?.ChegadaTime || baseSelection.arrivalTime}`
  };
};

const getSelectionSegmentScope = (selection) => (
  selection.isCombined
    ? ["0", "1"]
    : [String(selection.segmentKey ?? "0")]
);

const getInclusionSegmentChip = (includedSegments = [], selectedSegments = []) => {
  if (includedSegments.length !== 1 || selectedSegments.length < 2) return '';
  return includedSegments[0] === "0" ? 'Somente ida' : 'Somente volta';
};

const buildFareInclusions = (selection) => {
  const fareName = selection.fare.Nome.toUpperCase();
  const hasCheckedBaggage = selection.fare.Bagage !== "0";
  const hasSeat = hasCheckedBaggage || fareName.includes("PLUS") || fareName.includes("FLEX");
  const hasRefund = fareName.includes("FLEX");
  const segmentScope = getSelectionSegmentScope(selection);
  const selectionSegments = new Set(segmentScope);

  return [
    { label: 'Bagagem de mao', included: true, segmentScope },
    { label: 'Bagagem despachada', included: hasCheckedBaggage, segmentScope },
    { label: 'Marcacao de assento', included: hasSeat, segmentScope },
    { label: 'Reembolso integral', included: hasRefund, segmentScope },
    { label: 'Embarque prioritario', included: selectionSegments.has("0"), segmentScope: ["0"] },
    { label: 'Wi-Fi a bordo', included: selectionSegments.has("1"), segmentScope: ["1"] }
  ];
};

const getConsolidatedFareInclusions = (selections) => {
  const inclusionsByLabel = new Map();
  const selectedSegments = [...new Set(selections.flatMap(getSelectionSegmentScope))].sort();

  selections.flatMap(buildFareInclusions).forEach(item => {
    const current = inclusionsByLabel.get(item.label);
    const includedSegments = new Set(current?.includedSegments || []);
    if (item.included) {
      item.segmentScope.forEach(segmentKey => includedSegments.add(segmentKey));
    }

    inclusionsByLabel.set(item.label, {
      label: item.label,
      included: Boolean(current?.included || item.included),
      includedSegments: [...includedSegments].sort()
    });
  });

  return Array.from(inclusionsByLabel.values()).map(item => ({
    ...item,
    segmentChip: item.included ? getInclusionSegmentChip(item.includedSegments, selectedSegments) : ''
  }));
};

const formatCurrencyBRL = (value) => (
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
);

const getInitialConfirmationPassengers = (searchCriteria = {}) => {
  const passengers = getSelectedPassengers(searchCriteria.passengers, searchCriteria.customPassengers)
    .map(passenger => ({
      id: passenger.id,
      name: passenger.name,
      quantity: 1,
      fixed: passenger.id === 'matheus-castro',
      shareWithAirline: true
    }));
  const anonymousPassengerCount = getAnonymousPassengerCount(searchCriteria);

  if (anonymousPassengerCount > 0) {
    passengers.push({
      id: 'anonymous-passengers',
      name: `${formatPassengerLabel(anonymousPassengerCount)} sem nome`,
      quantity: anonymousPassengerCount,
      anonymous: true
    });
  }

  return passengers.length > 0
    ? passengers
    : [{ id: 'matheus-castro', name: 'Matheus Castro (Você)', quantity: 1, fixed: true, shareWithAirline: true }];
};

const getItineraryLegs = (selections) => (
  selections.flatMap(selection => {
    if (!selection.isCombined) {
      return [{
        key: selection.key,
        selection,
        segmentKey: selection.segmentKey,
        flights: selection.flight.Voos
      }];
    }

    const groupedFlights = selection.flight.Voos.reduce((groups, flight) => {
      const segmentKey = String(flight.Seg ?? '0');
      return { ...groups, [segmentKey]: [...(groups[segmentKey] || []), flight] };
    }, {});

    return Object.entries(groupedFlights).map(([segmentKey, flights]) => ({
      key: `${selection.key}-${segmentKey}`,
      selection,
      segmentKey,
      flights
    }));
  })
);

const SummaryAutocomplete = ({ label, value, onChange, options, placeholder, required, wide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const normalizedValue = value.trim().toLowerCase();
  const filteredOptions = options
    .filter(option => option.toLowerCase().includes(normalizedValue))
    .slice(0, 6);

  return (
    <label className={`dv-confirm-field ${wide ? 'dv-confirm-field--wide' : ''}`}>
      <span className="dv-confirm-label">{label}{required ? ' *' : ''}</span>
      <span className="dv-confirm-autocomplete">
        <input
          className="dv-confirm-input"
          value={value}
          autoComplete="off"
          placeholder={placeholder}
          onBlur={() => window.setTimeout(() => setIsOpen(false), 120)}
          onChange={(event) => {
            onChange(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {isOpen && filteredOptions.length > 0 && (
          <span className="dv-confirm-options">
            {filteredOptions.map(option => (
              <button
                type="button"
                className="dv-confirm-option"
                key={option}
                onMouseDown={(event) => {
                  event.preventDefault();
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </span>
        )}
      </span>
    </label>
  );
};

const SummaryItineraryLeg = ({ leg }) => {
  const firstFlight = leg.flights[0];
  const lastFlight = leg.flights[leg.flights.length - 1];
  const totalDuration = leg.flights.reduce((total, flight) => total + (Number(flight.Duracao) || 0), 0);
  const connectionCount = Math.max(leg.flights.length - 1, ...leg.flights.map(flight => Number(flight.Paradas) || 0));
  const hasConnection = connectionCount > 0;
  const isReturn = String(leg.segmentKey) === '1';
  const title = isReturn ? 'Voo de Volta' : 'Voo de Ida';
  const flightCodes = leg.flights.map(flight => `${flight.NomeCia.substring(0, 2)} ${flight.NumeroVoo}`).join(' + ');

  return (
    <div className={`dv-confirm-leg ${isReturn ? 'dv-confirm-leg--return' : ''}`}>
      <div className="dv-confirm-leg__heading">
        <span className="q-icon">{isReturn ? 'flight_land' : 'flight_takeoff'}</span>
        <strong>{title}</strong>
        <span>{firstFlight?.SaidaDate}</span>
      </div>

      <div className="dv-confirm-leg__content">
        <div className="dv-confirm-route">
          <div className="dv-confirm-airport">
            <strong>{firstFlight?.SaidaTime}</strong>
            <span>{firstFlight?.CodAeroportoOrigem}</span>
            <small>{firstFlight?.NomeAeroportoOrigem}</small>
          </div>

          <div className="dv-confirm-route-line">
            <span>{formatDuration(totalDuration)}</span>
            <div><span className="q-icon">flight</span></div>
            <small>{hasConnection ? `${connectionCount} ${connectionCount === 1 ? 'conexão' : 'conexões'}` : 'Direto'}</small>
          </div>

          <div className="dv-confirm-airport">
            <strong>{lastFlight?.ChegadaTime}</strong>
            <span>{lastFlight?.CodAeroportoDestino}</span>
            <small>{lastFlight?.NomeAeroportoDestino}</small>
          </div>
        </div>

        <div className="dv-confirm-flight-meta">
          <span>{firstFlight?.NomeCia}</span>
          <strong>{flightCodes}</strong>
          <em>{leg.selection.fare.Nome}</em>
        </div>
      </div>
    </div>
  );
};

const BaggageStepper = ({ title, subtitle, price, value, onDecrease, onIncrease }) => (
  <div className="dv-confirm-baggage-option">
    <div>
      <strong>{title}</strong>
      <span>{subtitle}</span>
      <em>+ {formatCurrencyBRL(price)} por volume</em>
    </div>
    <div className="dv-confirm-stepper" aria-label={title}>
      <button type="button" onClick={onDecrease}>-</button>
      <span>{value}</span>
      <button type="button" onClick={onIncrease}>+</button>
    </div>
  </div>
);

const CompliancePolicyCard = ({ policy, expanded, onToggle }) => {
  const isDanger = policy.variant === 'danger';
  const cardClassName = `dv-auth-policy-card dv-auth-policy-card--${policy.variant}`;

  const renderLowestFareDetails = () => {
    const selectedAmount = Math.max(policy.details.selectedAmount, 0);
    const referenceAmount = Math.max(policy.details.referenceAmount, 0);
    const differenceAmount = Math.max(policy.details.differenceAmount, 0);
    const rangeAverageAmount = Math.max(policy.details.rangeAverageAmount ?? 0, 0);
    const routeAverageAmount = Math.max(policy.details.routeAverageAmount ?? 0, 0);
    const historicLowestAmount = Math.max(policy.details.historicLowestAmount ?? 0, 0);
    const historicHighestAmount = Math.max(policy.details.historicHighestAmount ?? 0, 0);
    const allowedPercent = selectedAmount > 0
      ? Math.min(100, Math.max(6, Math.round((referenceAmount / selectedAmount) * 100)))
      : 100;
    const exceededPercent = selectedAmount > 0
      ? Math.min(100 - allowedPercent, Math.max(0, Math.round((differenceAmount / selectedAmount) * 100)))
      : 0;
    const getComparisonText = (amount) => {
      const difference = selectedAmount - amount;
      if (Math.abs(difference) < 0.01) return 'Igual à selecionada';
      return difference > 0
        ? `Selecionada + ${formatCurrencyBRL(difference)}`
        : `Selecionada - ${formatCurrencyBRL(Math.abs(difference))}`;
    };
    const averageMetrics = [
      { label: 'Média da faixa', amount: rangeAverageAmount },
      { label: 'Média da rota', amount: routeAverageAmount },
      { label: 'Menor histórico', amount: historicLowestAmount },
      { label: 'Maior histórico', amount: historicHighestAmount }
    ].filter(metric => metric.amount > 0);

    return (
      <>
        <div className="dv-auth-policy-fare-head">
          <div>
            <span className="dv-auth-policy-kicker">Tarifa selecionada</span>
            <strong className="dv-auth-policy-value">{formatCurrencyBRL(selectedAmount)}</strong>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="dv-auth-policy-kicker">{differenceAmount > 0 ? 'Excedido' : 'Diferença'}</span>
            <strong className="dv-auth-policy-diff">{differenceAmount > 0 ? `+ ${formatCurrencyBRL(differenceAmount)}` : formatCurrencyBRL(0)}</strong>
          </div>
        </div>

        <div className="dv-auth-policy-bar" aria-hidden="true">
          <span className="dv-auth-policy-bar__allowed" style={{ width: `${allowedPercent}%` }} />
          <span className="dv-auth-policy-bar__exceeded" style={{ width: `${exceededPercent}%` }} />
        </div>

        <div className="dv-auth-policy-scale">
          <strong>Menor tarifa ({formatCurrencyBRL(referenceAmount)})</strong>
          <strong>{differenceAmount > 0 ? 'Acima da política' : 'Dentro da política'}</strong>
        </div>

        {averageMetrics.length > 0 && (
          <>
            <div className="dv-auth-policy-average-title">
              <span className="q-icon">bar_chart</span>
              Comparações com a média
            </div>
            <div className="dv-auth-policy-metrics dv-auth-policy-metrics--averages">
              {averageMetrics.map(metric => (
                <div className="dv-auth-policy-metric" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{formatCurrencyBRL(metric.amount)}</strong>
                  <small>{getComparisonText(metric.amount)}</small>
                </div>
              ))}
            </div>
          </>
        )}

      </>
    );
  };

  const renderAdvanceDetails = () => {
    const progress = Math.min(100, Math.max(8, Math.round((policy.details.effectiveDays / policy.details.requiredDays) * 100)));

    return (
      <>
        <div className="dv-auth-policy-timeline">
          <div className={`dv-auth-policy-timepoint ${isDanger ? 'dv-auth-policy-timepoint--alert' : ''}`}>
            <span className="q-icon">schedule</span>
            <span>Compra<strong>{policy.details.effectiveDays} d</strong></span>
          </div>

          <div className={`dv-auth-policy-track ${isDanger ? 'is-danger' : ''}`}>
            <span>{isDanger ? `${policy.details.missingDays} dias faltantes` : 'Dentro do prazo'}</span>
            <span className="dv-auth-policy-track__line">
              <span className="dv-auth-policy-track__fill" style={{ width: `${progress}%` }} />
            </span>
          </div>

          <div className="dv-auth-policy-timepoint">
            <span className="q-icon">flight_takeoff</span>
            <span>Exigido<strong>{policy.details.requiredDays} d</strong></span>
          </div>
        </div>

        <div className="dv-auth-policy-metrics">
          <div className="dv-auth-policy-metric">
            <span>Antecedência da compra</span>
            <strong>{policy.details.effectiveDays} dias</strong>
          </div>
          <div className="dv-auth-policy-metric">
            <span>Mínimo exigido</span>
            <strong>{policy.details.requiredDays} dias</strong>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={cardClassName}>
      <button type="button" className="dv-auth-policy-summary" onClick={() => onToggle(policy.id)}>
        <span className="dv-auth-policy-main">
          <span className="dv-auth-policy-icon"><span className="q-icon">{policy.icon}</span></span>
          <span className="dv-auth-policy-copy">
            <span className="dv-auth-policy-title">{policy.title}</span>
            <span className="dv-auth-policy-meta">
              <span className="dv-auth-policy-status">{policy.status}</span>
              {!expanded && policy.ariaComment && (
                <span className="dv-auth-policy-insight">{policy.ariaComment}</span>
              )}
            </span>
          </span>
        </span>
        <span className={`dv-auth-policy-chevron ${expanded ? 'is-expanded' : ''}`} aria-hidden="true">
          <span className="q-icon">expand_more</span>
        </span>
      </button>

      {expanded && (
        <div className="dv-auth-policy-detail">
          <div className="dv-auth-policy-divider" />
          {policy.ariaComment && (
            <div className="dv-auth-policy-aria-insight">
              <span className="dv-auth-policy-aria-insight__icon"><Sparkles size={12} strokeWidth={2.25} aria-hidden="true" /></span>
              <p className="dv-auth-policy-aria-insight__text">
                <span className="dv-auth-policy-aria-insight__label">ARIA</span>
                <span aria-hidden="true">&nbsp;&middot;&nbsp;</span>
                {policy.ariaComment}
              </p>
            </div>
          )}
          {policy.type === 'lowest-fare' ? renderLowestFareDetails() : renderAdvanceDetails()}
        </div>
      )}
    </div>
  );
};

const TariffSummaryScreen = ({ selectedFares, flightsMap, searchCriteria, onBack, onChooseAriaRecommendation }) => {
  const [selectedSeat, setSelectedSeat] = useState('');
  const [baggageCounts, setBaggageCounts] = useState({ standard: 0, special: 0 });
  const [confirmationPassengers, setConfirmationPassengers] = useState(() => getInitialConfirmationPassengers(searchCriteria));
  const [passengerInput, setPassengerInput] = useState('');
  const [isPassengerPickerOpen, setIsPassengerPickerOpen] = useState(false);
  const [expandedPolicyId, setExpandedPolicyId] = useState(null);
  const [corporateFields, setCorporateFields] = useState({
    company: 'Tech Solutions S.A.',
    costCenter: 'CC-4092 (Desenvolvimento)',
    project: 'PRJ-Nexus Implantação',
    activity: 'Consultoria Técnica',
    reason: 'Reunião Presencial com Cliente',
    consultant: 'Marcos Silva',
    paymentMethod: 'Faturado (Agência)'
  });
  const selections = getSelectedFareList(selectedFares);
  const itineraryLegs = getItineraryLegs(selections);
  const fareInclusions = getConsolidatedFareInclusions(selections);
  const namedConfirmationPassengers = confirmationPassengers.filter(passenger => !passenger.anonymous);
  const requestedPassengerCount = getPassengerCount(searchCriteria);
  const namedPassengerCount = namedConfirmationPassengers.reduce((total, passenger) => total + passenger.quantity, 0);
  const pendingPassengerSlots = Math.max(0, requestedPassengerCount - namedPassengerCount);
  const passengerCount = Math.max(1, requestedPassengerCount, namedPassengerCount);
  const passengerNames = namedConfirmationPassengers.map(passenger => passenger.name).join(', ');
  const baseValue = getBaseSelectionValue(selections);
  const fareTotalValue = baseValue * passengerCount;
  const boardingTaxValue = 58 * passengerCount;
  const racValue = 35 * passengerCount;
  const serviceFeeValue = 48 * passengerCount;
  const lowestReferenceValue = getLowestReferenceValue(selectedFares, flightsMap) || baseValue;
  const baggageValue = ((baggageCounts.standard * 120) + (baggageCounts.special * 250)) * passengerCount;
  const seatValue = selectedSeat ? 45 * passengerCount : 0;
  const subTotalPerPassenger = baseValue + 58 + 35 + 48 + (baggageCounts.standard * 120) + (baggageCounts.special * 250) + (selectedSeat ? 45 : 0);
  const grandTotal = fareTotalValue + boardingTaxValue + racValue + serviceFeeValue + baggageValue + seatValue;
  const basePrice = formatPrice(fareTotalValue);
  const boardingTaxPrice = formatPrice(boardingTaxValue);
  const racPrice = formatPrice(racValue);
  const serviceFeePrice = formatPrice(serviceFeeValue);
  const baggagePrice = formatPrice(baggageValue);
  const seatPrice = formatPrice(seatValue);
  const grandPrice = formatPrice(grandTotal);
  const hasAriaRecommendedSelection = selections.some(isAriaRecommendedSelection);
  const policyLowestReferenceValue = hasAriaRecommendedSelection
    ? baseValue
    : Math.max(1, Math.round(Math.min(lowestReferenceValue || baseValue, baseValue * 0.88) * 100) / 100);
  const positiveLowestDifference = Math.max(0, baseValue - policyLowestReferenceValue);
  const ariaFareRecommendation = !hasAriaRecommendedSelection && positiveLowestDifference > 0.01
    ? buildAriaFareRecommendation(selections, policyLowestReferenceValue)
    : null;
  const policyRangeAverageValue = Math.round(baseValue * 0.96 * 100) / 100;
  const policyRouteAverageValue = Math.round(baseValue * 1.08 * 100) / 100;
  const policyHistoricLowestValue = Math.round(policyLowestReferenceValue * 0.94 * 100) / 100;
  const policyHistoricHighestValue = Math.round(policyRouteAverageValue * 1.18 * 100) / 100;
  const requiredAdvanceDays = 15;
  const effectiveAdvanceDays = 18;
  const missingAdvanceDays = Math.max(0, requiredAdvanceDays - effectiveAdvanceDays);
  const isAdvanceViolated = missingAdvanceDays > 0;
  const mockCompanies = ['Tech Solutions S.A.', 'Acme Corp', 'Global Industries', 'Nexus Tech'];
  const mockCostCenters = ['CC-4092 (Desenvolvimento)', 'CC-1021 (Marketing)', 'CC-3055 (Vendas)', 'CC-9901 (RH)'];
  const mockProjects = ['PRJ-Nexus Implantação', 'PRJ-Alpha Upgrade', 'PRJ-Omega Migration', 'Operação Padrão'];
  const mockConsultants = ['Marcos Silva', 'Ana Costa', 'Julio Cesar', 'Fernanda Lima', 'Felipe Santos'];
  const mockReasons = ['Reunião Presencial com Cliente', 'Treinamento de Equipe', 'Evento Corporativo', 'Visita Técnica', 'Implantação de Sistema'];
  const availablePassengers = ['Matheus Castro (Você)', 'Ana Costa', 'Julio Cesar', 'Fernanda Lima', 'Roberto Alves', 'Carla Dias'];
  const filteredPassengers = availablePassengers.filter(passenger => (
    passenger.toLowerCase().includes(passengerInput.trim().toLowerCase()) &&
    !confirmationPassengers.some(selected => selected.name === passenger)
  ));

  const policies = [
    {
      id: 'lowest-fare',
      type: 'lowest-fare',
      title: 'Menor tarifa',
      status: positiveLowestDifference > 0.01 ? 'Violada' : 'Cumprida',
      variant: positiveLowestDifference > 0.01 ? 'danger' : 'success',
      icon: positiveLowestDifference > 0.01 ? 'warning' : 'check_circle',
      description: positiveLowestDifference > 0.01
        ? `Tarifa escolhida ${formatCurrencyBRL(positiveLowestDifference)} acima da menor opção carregada.`
        : 'Tarifa escolhida alinhada à menor opção carregada.',
      ariaComment: positiveLowestDifference > 0.01
        ? 'Recomendo justificar esta escolha ou trocar para a menor tarifa, pois há alternativa mais econômica para o mesmo trecho.'
        : 'Não identifiquei oportunidade relevante de economia para esta seleção.',
      details: {
        selectedAmount: baseValue,
        referenceAmount: policyLowestReferenceValue,
        differenceAmount: positiveLowestDifference,
        rangeAverageAmount: policyRangeAverageValue,
        routeAverageAmount: policyRouteAverageValue,
        historicLowestAmount: policyHistoricLowestValue,
        historicHighestAmount: policyHistoricHighestValue
      }
    },
    {
      id: 'advance',
      type: 'advance',
      title: 'Antecedência mínima',
      status: isAdvanceViolated ? 'Violada' : 'Cumprida',
      variant: isAdvanceViolated ? 'danger' : 'success',
      icon: isAdvanceViolated ? 'warning' : 'event_available',
      description: isAdvanceViolated
        ? `Compra realizada com ${missingAdvanceDays} dias abaixo da antecedência exigida.`
        : `Compra realizada com ${effectiveAdvanceDays} dias de antecedência, acima do mínimo exigido.`,
      ariaComment: isAdvanceViolated
        ? 'A antecedência reduzida pode elevar o custo e exigir aprovação adicional.'
        : 'Confirmo que a antecedência está dentro do prazo esperado para compra corporativa.',
      details: {
        effectiveDays: effectiveAdvanceDays,
        requiredDays: requiredAdvanceDays,
        missingDays: missingAdvanceDays
      }
    }
  ];

  const updateCorporateField = (field, value) => {
    setCorporateFields(prev => ({ ...prev, [field]: value }));
  };

  const updateBaggageCount = (field, direction) => {
    setBaggageCounts(prev => ({
      ...prev,
      [field]: Math.max(0, prev[field] + direction)
    }));
  };

  const addConfirmationPassenger = (passengerName) => {
    const name = passengerName.trim();
    if (!name || confirmationPassengers.some(passenger => passenger.name.toLowerCase() === name.toLowerCase())) return;

    setConfirmationPassengers(prev => ([
      ...prev,
      { id: `confirmation-${Date.now()}`, name, quantity: 1, shareWithAirline: true }
    ]));
    setPassengerInput('');
    setIsPassengerPickerOpen(false);
  };

  const removeConfirmationPassenger = (passengerId) => {
    setConfirmationPassengers(prev => (
      prev.length <= 1
        ? prev
        : prev.filter(passenger => passenger.id !== passengerId)
    ));
  };

  const togglePassengerSharing = (passengerId) => {
    setConfirmationPassengers(prev => prev.map(passenger => (
      passenger.id === passengerId
        ? { ...passenger, shareWithAirline: !passenger.shareWithAirline }
        : passenger
    )));
  };

  const handlePassengerInputKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    addConfirmationPassenger(filteredPassengers[0] || passengerInput);
  };

  const togglePolicy = (policyId) => {
    setExpandedPolicyId(prev => (prev === policyId ? null : policyId));
  };

  return (
    <main className="dv-summary-screen">
      <div className="dv-summary-shell">
        <section className="dv-summary-hero">
          <div className="dv-summary-heading">
            <h1 className="dv-summary-title">Revisão e Confirmação</h1>
            <p className="dv-summary-subtitle">Verifique os dados antes de finalizar a emissão.</p>
          </div>
          <button type="button" className="dv-summary-back-button" onClick={onBack}>
            <span className="q-icon">arrow_back</span>
            Voltar
          </button>
        </section>

        <div className="dv-summary-layout">
          <section className="dv-summary-main">
            {ariaFareRecommendation && (
              <section className="dv-summary-aria-card aria-card">
                <div className="aria-card__body">
                  <div className="aria-card__identity">
                    <span className="aria-card__icon">
                      <span className="q-icon" style={{fontSize: 24}}>auto_awesome</span>
                    </span>
                    <span className="aria-card__copy">
                      <span className="aria-card__title">{ariaFareRecommendation.title}</span>
                      <span className="aria-card__subtitle">{ariaFareRecommendation.subtitle}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="aria-card__toggle"
                    onClick={() => onChooseAriaRecommendation?.(ariaFareRecommendation.selection)}
                  >
                    Escolher este voo <span className="q-icon">arrow_forward</span>
                  </button>
                    <ul className="aria-insights">
                      <li className="aria-insights__chip"><span className="q-icon">paid</span>{formatCurrencyBRL(ariaFareRecommendation.savings)} mais barato</li>
                      <li className="aria-insights__chip"><span className="q-icon">schedule</span>{ariaFareRecommendation.schedule}</li>
                    </ul>
                </div>
              </section>
            )}

            <section className="dv-summary-policy-section" aria-labelledby="summary-policy-title">
              <div className="dv-summary-policy-heading" id="summary-policy-title">
                <span className="q-icon">business</span>
                Políticas de Viagem
              </div>
              <div className="dv-policy-list">
                {policies.map(policy => (
                  <CompliancePolicyCard
                    key={policy.id}
                    policy={policy}
                    expanded={expandedPolicyId === policy.id}
                    onToggle={togglePolicy}
                  />
                ))}
              </div>
            </section>

            <article className="dv-summary-card">
              <header className="dv-summary-card__header">
                <div className="dv-summary-card__title"><span className="q-icon">flight_takeoff</span> Itinerário Selecionado</div>
              </header>
              <div className="dv-summary-card__body dv-summary-card__body--flush">
                {itineraryLegs.map(leg => (
                  <SummaryItineraryLeg leg={leg} key={leg.key} />
                ))}

                <div className="dv-confirm-inclusions">
                  <h3>O que esta tarifa inclui por passageiro:</h3>
                  <div className="dv-inclusion-grid">
                    {fareInclusions.map(item => (
                      <div className={`dv-inclusion-item ${item.included ? 'is-included' : 'is-not-included'}`} key={item.label}>
                        <span className="q-icon">{item.included ? 'check_circle' : 'cancel'}</span>
                        <span className="dv-inclusion-label">
                          <span>{item.label}</span>
                          {item.segmentChip && <span className="dv-inclusion-chip">{item.segmentChip}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <section className="dv-summary-flat-section" aria-labelledby="summary-addons-title">
              <div className="dv-summary-flat-heading" id="summary-addons-title">
                <span className="q-icon">luggage</span>
                Serviços Adicionais
              </div>
              <div className="dv-summary-flat-body">
                <div className="dv-confirm-baggage-box">
                  <div className="dv-confirm-addon-heading">
                    <span className="dv-confirm-addon-icon"><BaggageClaim aria-hidden="true" /></span>
                    <div>
                      <strong>Adicionar Bagagem Extra</strong>
                      <span>Leve malas extras ou equipamentos especiais com você.</span>
                    </div>
                  </div>

                  <BaggageStepper
                    title="Bagagem Despachada (Até 23kg)"
                    subtitle="Mala padrão transportada no porão do avião."
                    price={120}
                    value={baggageCounts.standard}
                    onDecrease={() => updateBaggageCount('standard', -1)}
                    onIncrease={() => updateBaggageCount('standard', 1)}
                  />

                  <BaggageStepper
                    title="Bagagem Especial"
                    subtitle="Pranchas, bicicletas, grandes instrumentos musicais."
                    price={250}
                    value={baggageCounts.special}
                    onDecrease={() => updateBaggageCount('special', -1)}
                    onIncrease={() => updateBaggageCount('special', 1)}
                  />
                </div>

                <div className="dv-confirm-seat-box">
                  <div className="dv-confirm-seat-top">
                  <div className="dv-confirm-addon-heading">
                    <span className="q-icon">airline_seat_recline_normal</span>
                    <div>
                      <strong>Marcação de Assento</strong>
                      <span>Escolha onde sentar para ter mais conforto.</span>
                    </div>
                  </div>
                    <div className="dv-confirm-seat-actions">
                      <span className="dv-confirm-seat-price">A partir de R$ 45</span>
                      <button
                        type="button"
                        className={`dv-confirm-seat-action ${selectedSeat ? 'is-selected' : ''}`}
                        onClick={() => setSelectedSeat(prev => prev ? '' : 'selected')}
                      >
                        {selectedSeat ? 'Selecionado' : 'Marcar'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <article className="dv-summary-card">
              <header className="dv-summary-card__header">
                <div>
                  <div className="dv-summary-card__title"><span className="q-icon">assignment</span> Dados da Solicitação</div>
                  <p className="dv-summary-card__subtitle">Preencha as informações obrigatórias para aprovação e faturamento desta viagem.</p>
                </div>
              </header>
              <div className="dv-summary-card__body">
                <h3 className="dv-confirm-subheading">Informações Faturáveis</h3>
                <div className="dv-confirm-form-grid">
                  <SummaryAutocomplete label="Empresa" value={corporateFields.company} onChange={(value) => updateCorporateField('company', value)} options={mockCompanies} placeholder="Buscar empresa..." required />
                  <SummaryAutocomplete label="Centro de Custo" value={corporateFields.costCenter} onChange={(value) => updateCorporateField('costCenter', value)} options={mockCostCenters} placeholder="Buscar CC..." required />
                  <SummaryAutocomplete label="Projeto" value={corporateFields.project} onChange={(value) => updateCorporateField('project', value)} options={mockProjects} placeholder="Buscar projeto..." />
                  <SummaryAutocomplete label="Consultor" value={corporateFields.consultant} onChange={(value) => updateCorporateField('consultant', value)} options={mockConsultants} placeholder="Buscar consultor..." required />
                  <SummaryAutocomplete label="Motivo da Viagem" value={corporateFields.reason} onChange={(value) => updateCorporateField('reason', value)} options={mockReasons} placeholder="Descreva ou selecione o motivo..." required wide />

                  <label className="dv-confirm-field">
                    <span className="dv-confirm-label">Atividade</span>
                    <select className="dv-confirm-input" value={corporateFields.activity} onChange={(event) => updateCorporateField('activity', event.target.value)}>
                      <option>Consultoria Técnica</option>
                      <option>Reunião Comercial</option>
                      <option>Treinamento</option>
                      <option>Evento / Congresso</option>
                    </select>
                  </label>

                  <label className="dv-confirm-field">
                    <span className="dv-confirm-label">Forma de Pagamento *</span>
                    <select className="dv-confirm-input" value={corporateFields.paymentMethod} onChange={(event) => updateCorporateField('paymentMethod', event.target.value)}>
                      <option>Faturado (Agência)</option>
                      <option>Cartão de Crédito Corporativo</option>
                      <option>Reembolso</option>
                    </select>
                  </label>
                </div>

                <h3 className="dv-confirm-subheading">Passageiros Vinculados ({passengerCount})</h3>
                <div className="dv-confirm-passenger-picker">
                  <input
                    className="dv-confirm-input"
                    value={passengerInput}
                    placeholder="Adicionar novo passageiro..."
                    onBlur={() => window.setTimeout(() => setIsPassengerPickerOpen(false), 120)}
                    onChange={(event) => {
                      setPassengerInput(event.target.value);
                      setIsPassengerPickerOpen(true);
                    }}
                    onFocus={() => setIsPassengerPickerOpen(true)}
                    onKeyDown={handlePassengerInputKeyDown}
                  />
                  {isPassengerPickerOpen && filteredPassengers.length > 0 && (
                    <span className="dv-confirm-options">
                      {filteredPassengers.map(passenger => (
                        <button
                          type="button"
                          className="dv-confirm-option"
                          key={passenger}
                          onMouseDown={(event) => {
                            event.preventDefault();
                            addConfirmationPassenger(passenger);
                          }}
                        >
                          <span className="q-icon">person</span>
                          {passenger}
                        </button>
                      ))}
                    </span>
                  )}
                </div>

                <div className="dv-confirm-passenger-list">
                  {namedConfirmationPassengers.map(passenger => (
                    <div className="dv-confirm-passenger-card" key={passenger.id}>
                      <span className="dv-confirm-passenger-identity">
                        <span className="q-icon">person</span>
                        <strong>{passenger.name}</strong>
                      </span>
                      <label className="dv-confirm-passenger-share">
                        <input
                          type="checkbox"
                          checked={passenger.shareWithAirline !== false}
                          onChange={() => togglePassengerSharing(passenger.id)}
                        />
                        <span>Compartilhar dados com a companhia aérea</span>
                      </label>
                      <button type="button" className="dv-confirm-passenger-remove" aria-label={`Remover ${passenger.name}`} onClick={() => removeConfirmationPassenger(passenger.id)}>
                        <span className="q-icon">cancel</span>
                      </button>
                    </div>
                  ))}
                  {Array.from({ length: pendingPassengerSlots }, (_, index) => (
                    <span className="dv-confirm-passenger-chip dv-confirm-passenger-chip--pending" key={`pending-passenger-${index}`}>
                      <span className="q-icon">person_add</span>
                      Aguardando passageiro
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <aside className="dv-summary-side">
            <article className="dv-summary-card dv-summary-card--totals">
              <header className="dv-summary-card__header">
                <div className="dv-summary-card__title"><span className="q-icon">payments</span> Resumo da Compra</div>
              </header>
              <div className="dv-summary-card__body">
                <div className="dv-totals-list">
                  <div className="dv-total-row"><span>Tarifa</span><strong>R$ {basePrice.integer},{basePrice.decimals}</strong></div>
                  <div className="dv-total-row"><span>Taxas de embarque</span><strong>R$ {boardingTaxPrice.integer},{boardingTaxPrice.decimals}</strong></div>
                  <div className="dv-total-row"><span>RAC</span><strong>R$ {racPrice.integer},{racPrice.decimals}</strong></div>
                  <div className="dv-total-row"><span>Taxa de serviço</span><strong>R$ {serviceFeePrice.integer},{serviceFeePrice.decimals}</strong></div>
                  <div className="dv-total-row"><span>Bagagem adicional</span><strong>R$ {baggagePrice.integer},{baggagePrice.decimals}</strong></div>
                  <div className="dv-total-row"><span>Assento</span><strong>R$ {seatPrice.integer},{seatPrice.decimals}</strong></div>
                  <div className="dv-total-row dv-total-row--muted"><span>Subtotal por passageiro</span><strong>{formatCurrencyBRL(subTotalPerPassenger)}</strong></div>
                  <div className="dv-total-row dv-total-row--muted"><span>Número de passageiros</span><strong>x {passengerCount}</strong></div>
                  <div className="dv-total-row dv-total-row--grand"><span>Total Geral</span><strong>R$ {grandPrice.integer},{grandPrice.decimals}</strong></div>
                </div>
                <button type="button" className="dv-summary-final-btn">
                  <span className="q-icon">done_all</span>
                  Confirmar Reserva
                </button>
                <p className="dv-confirm-privacy">O compartilhamento de dados com a companhia aérea é definido individualmente em cada passageiro vinculado.</p>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </main>
  );
};

// --- COMPONENTE DE CARD DE VOO ---
const FlightCard = ({ flight, onSelectFare, selectedFareKeys }) => {
  const [expandedFareId, setExpandedFareId] = useState(null);
  const isCombined = flight.isCombinado;
  const mainAirline = flight.Voos[0].NomeCia;
  const mainCode = flight.Voos[0].NumeroVoo;

  const toggleFare = (id) => setExpandedFareId(prev => prev === id ? null : id);

  return (
    <article className={`flight-card-container ${isCombined ? 'combined-card' : ''}`}>
      <header className="flight-header-modern selected">
        <div className="flight-details">
          <div className="airline-info">
            <span className="q-icon preferred-star">star</span>
            <div className="airline-logo-wrapper">
              <AirlineLogo code={flight.CodSisRes} name={mainAirline} />
            </div>
            <div className="vertical-divider"></div>
            
            {isCombined ? (
              <>
                <span className="q-chip connection-badge"><span className="q-icon">flight</span> LA-3339</span>
                <span className="q-chip connection-badge"><span className="q-icon">connecting_airports</span> G3-1683</span>
              </>
            ) : (
              <span className="q-chip connection-badge"><span className="q-icon">{flight.Voos.length > 1 ? 'connecting_airports' : 'flight'}</span> {mainAirline.substring(0,2)}-{mainCode}</span>
            )}
            
            <div className="vertical-divider"></div>
            <div className="info-badges">
              {isCombined && <span className="q-chip roundtrip-badge"><span className="q-icon">autorenew</span><span className="badge-text">Ida e volta</span></span>}
              {flight.BuyNow && <span className="q-chip buy-now-badge"><span className="q-icon">bolt</span><span className="badge-text">Emissão Imediata</span></span>}
              <span className="q-chip agency-badge"><span className="q-icon">business</span><span className="badge-text">Reserve Corp</span></span>
            </div>
          </div>
        </div>
        <div className="flight-actions">
          <button type="button" className="statistics-btn"><span className="q-icon">bar_chart</span></button>
          <div className="booking-info"><span className="q-icon">bookmark_border</span><span>{isCombined ? 'Combinado' : mainAirline} Booking</span></div>
          <label className="selection-checkbox"><input type="checkbox" /><span className="checkbox-ui"></span></label>
        </div>
      </header>

      <div className="flight-card-section-divider"></div>

      <section className="flight-segments">
        {flight.Voos.map((voo, idx) => (
          <div className="segment" key={idx}>
            <div className="airport origin">
              <div className="airport-time"><span className="q-icon period-icon">{voo.SaidaTime > "18:00" || voo.SaidaTime < "06:00" ? 'dark_mode' : 'wb_sunny'}</span>{voo.SaidaTime}</div>
              <div className="airport-code">{voo.CodAeroportoOrigem}</div>
              <div className="airport-date">{voo.SaidaDate}</div>
              <div className="airport-name">{voo.NomeAeroportoOrigem}</div>
            </div>

            <div className="route-container">
              <div className="route-visual">
                <div className="dot start"></div>
                <div className="line">
                   {voo.Paradas === 0 ? (
                      <span className="q-icon plane-icon" style={{'--plane-position': '50%'}}>flight</span>
                   ) : (
                      <>
                        <span className="q-icon plane-icon" style={{'--plane-position': '33%'}}>flight</span>
                        <span className="q-icon plane-icon" style={{'--plane-position': '66%'}}>flight</span>
                      </>
                   )}
                </div>
                <div className="dot end"></div>
              </div>
              <div className="route-details">
                <div className="duration"><span className="q-icon">schedule</span>{formatDuration(voo.Duracao)}</div>
                <div className="stops"><span className="q-icon">layers</span>{voo.Paradas === 0 ? <span className="direct">Direto</span> : `${voo.Paradas} parada`}</div>
              </div>
            </div>

            <div className="airport destination">
              <div className="airport-time"><span className="q-icon period-icon">{voo.ChegadaTime > "18:00" || voo.ChegadaTime < "06:00" ? 'dark_mode' : 'wb_sunny'}</span>{voo.ChegadaTime}</div>
              <div className="airport-code">{voo.CodAeroportoDestino}</div>
              <div className="airport-date">{voo.ChegadaDate}</div>
              <div className="airport-name">{voo.NomeAeroportoDestino}</div>
            </div>

            <aside className="stats-column">
              <div className="stats-divider"></div>
              <div className="stats-triangle-layout">
                <div className="stat-card-top">
                  <div className="stat-card-icon-top"><span className="q-icon">schedule</span></div>
                  <div><div className="stat-card-label-top">Atraso Médio</div><div className="stat-card-value-top">{Math.floor(Math.random() * 10) + 5} <span className="stat-card-unit-top">min</span></div></div>
                </div>
                <div className="stat-cards-bottom">
                  <div className="stat-card-bottom"><div className="stat-card-icon-bottom"><span className="q-icon">warning</span></div><div><div className="stat-card-label-bottom">Atrasos</div><div className="stat-card-value-bottom">{(Math.random() * 15).toFixed(1)}%</div></div></div>
                  <div className="stat-card-bottom"><div className="stat-card-icon-bottom"><span className="q-icon">cancel</span></div><div><div className="stat-card-label-bottom">Cancelados</div><div className="stat-card-value-bottom">{(Math.random() * 2).toFixed(1)}%</div></div></div>
                </div>
              </div>
            </aside>
          </div>
        ))}
      </section>

      <div className="flight-card-section-divider"></div>

      <section className="flight-fares">
        <div className="fare-type-row">
          <div className="fare-type-icon-wrapper"><span className="q-icon">local_offer</span></div>
          <div className="fares-horizontal-container">
            {flight.Tarifas.map((tarifa, idx) => {
              const isExpanded = expandedFareId === tarifa.IdTarifa;
              const price = formatPrice(tarifa.Valor);
              const isLowestFare = idx === 0;
              const isLowestBaggage = tarifa.Bagage !== "0" && idx === 1;
              const hasBaggage = tarifa.Bagage !== "0";
              const isFareSelected = selectedFareKeys?.has(getFareSelectionKey(flight, tarifa));

              return (
                <button 
                  key={tarifa.IdTarifa}
                  type="button" 
                  className={`fare-card-compact ${isLowestFare ? 'lowest-fare' : ''} ${isLowestBaggage ? 'lowest-baggage' : ''} ${isExpanded ? 'is-expanded' : ''} ${isFareSelected ? 'is-selected' : ''}`}
                  onClick={() => {
                    toggleFare(tarifa.IdTarifa);
                    onSelectFare?.(flight, tarifa);
                  }}
                >
                  {isLowestFare && <span className="best-fare-badge"><span className="q-icon">attach_money</span></span>}
                  {isLowestBaggage && <span className="best-fare-badge baggage-fare"><span className="q-icon">luggage</span></span>}

                  <span className="fare-name-with-class">
                    <span className="fare-name-text">{tarifa.Nome}</span>
                    <span className="class-badge">{tarifa.Classe}</span>
                  </span>

                  <span className="benefits-icons-inline">
                    <span className={`q-icon ${!hasBaggage ? 'benefit-disabled' : ''}`}>luggage</span>
                    <span className="q-icon">assignment_return</span>
                    <span className={`q-icon ${!hasBaggage && !isCombined ? 'benefit-disabled' : ''}`}>airline_seat_recline_normal</span>
                    <BaggageClaim className="benefit-lucide-icon" aria-hidden="true" />
                  </span>

                  <span className="fare-price-row">
                    <span className="fare-price-compact">
                      <span className="currency-small">{flight.Moeda}</span>
                      <span className="amount-large">{price.integer}</span>
                      <span className="cents-small">,{price.decimals}</span>
                    </span>
                    <span className="expand-btn-inline"><span className="q-icon">{isExpanded ? 'expand_less' : 'expand_more'}</span></span>
                  </span>

                  <span className="expanded-content">
                    <span className="benefits-detailed">
                      <span className={`benefit-item ${hasBaggage ? 'included' : ''}`}>
                        <span className="q-icon">{hasBaggage ? 'check_circle' : 'cancel'}</span>
                        <span className="benefit-content"><span className="benefit-name">Bagagem despachada</span><span className="benefit-obs">{hasBaggage ? '1 peça de até 23kg' : 'Não inclusa'}</span></span>
                      </span>
                      <span className={`benefit-item ${hasBaggage ? 'included' : ''}`}>
                        <span className="q-icon">{hasBaggage ? 'check_circle' : 'cancel'}</span>
                        <span className="benefit-content"><span className="benefit-name">Marcação de assento</span><span className="benefit-obs">{hasBaggage ? 'Inclusa' : 'Cobrada à parte'}</span></span>
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('search');
  const [searchCriteria, setSearchCriteria] = useState(DEFAULT_SEARCH_CRITERIA);
  const [isSearching, setIsSearching] = useState(false);
  const [suppliers, setSuppliers] = useState(INITIAL_SUPPLIERS);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('0'); // 0=ida, 1=volta, 99=combinados
  
  const [flightsMap, setFlightsMap] = useState(createEmptyFlightsMap);
  const [selectedFares, setSelectedFares] = useState(createEmptySelectedFares);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSisResMinimized, setIsSisResMinimized] = useState(false);

  const [maxPrice, setMaxPrice] = useState(5000);
  const [maxDurationHours, setMaxDurationHours] = useState(24);
  const [stopsFilter, setStopsFilter] = useState([]);
  const [airlineFilter, setAirlineFilter] = useState([]);
  const [fareFeatureFilter, setFareFeatureFilter] = useState([]);
  const [originFilter, setOriginFilter] = useState([]);
  const [destinationFilter, setDestinationFilter] = useState([]);
  const [departureWindow, setDepartureWindow] = useState({ from: '', to: '' });
  const [arrivalWindow, setArrivalWindow] = useState({ from: '', to: '' });
  const [expandedAvailabilityFilters, setExpandedAvailabilityFilters] = useState({
    airlines: true,
    class: true,
    price: true,
    duration: false,
    departureTime: false,
    arrivalTime: false,
    connections: true,
    stops: true,
    originAirport: false,
    destAirport: false
  });
  const [sortBy, setSortBy] = useState('price_asc'); // Estado para ordenação
  const [isAvailabilityActionsOpen, setIsAvailabilityActionsOpen] = useState(false);
  const pendingTimeoutsRef = useRef([]);

  const clearPendingSearch = () => {
    pendingTimeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
    pendingTimeoutsRef.current = [];
  };

  const handleCriteriaChange = (field, value) => {
    setSearchCriteria(prev => ({ ...prev, [field]: value }));
  };

  const handleStopsToggle = (value) => {
    setStopsFilter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const handleAirlineToggle = (value) => {
    setAirlineFilter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const handleFareFeatureToggle = (value) => {
    setFareFeatureFilter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const handleOriginToggle = (value) => {
    setOriginFilter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const handleDestinationToggle = (value) => {
    setDestinationFilter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const toggleAvailabilityFilter = (section) => {
    setExpandedAvailabilityFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };
  
  const clearFilters = () => {
    setMaxPrice(5000);
    setMaxDurationHours(24);
    setStopsFilter([]);
    setAirlineFilter([]);
    setFareFeatureFilter([]);
    setOriginFilter([]);
    setDestinationFilter([]);
    setDepartureWindow({ from: '', to: '' });
    setArrivalWindow({ from: '', to: '' });
    setSortBy('price_asc');
  };

  const clearSelectedFares = () => {
    setSelectedFares(createEmptySelectedFares());
  };

  const selectFare = (flight, fare) => {
    const firstFlight = flight.Voos[0];
    const lastFlight = flight.Voos[flight.Voos.length - 1];
    const segmentKey = String(firstFlight?.Seg ?? "0");
    const selection = {
      key: getFareSelectionKey(flight, fare),
      isCombined: Boolean(flight.isCombinado),
      segmentKey,
      flight,
      fare,
      currency: flight.Moeda,
      airline: firstFlight?.NomeCia || flight.CodSisRes,
      flightNumber: firstFlight?.NumeroVoo || "",
      origin: firstFlight?.CodAeroportoOrigem || "",
      destination: lastFlight?.CodAeroportoDestino || "",
      departureDate: firstFlight?.SaidaDate || "",
      departureTime: firstFlight?.SaidaTime || "",
      arrivalTime: lastFlight?.ChegadaTime || ""
    };

    if (selection.isCombined) {
      setSelectedFares({
        segments: { "0": null, "1": null },
        combined: selection
      });
      return;
    }

    setSelectedFares(prev => ({
      segments: {
        ...prev.segments,
        [segmentKey]: selection
      },
      combined: null
    }));
  };

  const startSearch = (event) => {
    event?.preventDefault();
    const tripType = searchCriteria.tripType || DEFAULT_SEARCH_CRITERIA.tripType;
    const isOneWay = tripType === 'oneway';
    clearPendingSearch();
    clearFilters();
    clearSelectedFares();
    setIsSisResMinimized(false);
    setCurrentScreen('availability');
    setIsSearching(true);
    setFlightsMap(createEmptyFlightsMap());
    setProgress(0);
    setSuppliers(INITIAL_SUPPLIERS.map(s => ({ ...s, status: 'loading', count: 0 })));
    setActiveTab('0');

    let completedCount = 0;

    INITIAL_SUPPLIERS.forEach((supplier) => {
      const delay = Math.floor(Math.random() * 3000) + 1000;
      
      const timeoutId = setTimeout(() => {
        if (supplier.id === 'SABRE') {
          updateSupplierStatus(supplier.id, 'warning', 0);
        } else if (supplier.id === 'LA') {
          setFlightsMap(prev => ({ ...prev, "0": JSON_MOCK_DATA.flightsBySegment["0"] }));
          updateSupplierStatus(supplier.id, 'success', 1);
        } else if (supplier.id === 'G3') {
          if (!isOneWay) {
            setFlightsMap(prev => ({ ...prev, "1": JSON_MOCK_DATA.flightsBySegment["1"] }));
          }
          updateSupplierStatus(supplier.id, 'success', isOneWay ? 0 : 2);
        } else if (supplier.id === 'AD') {
          updateSupplierStatus(supplier.id, 'success', 0);
        }

        completedCount++;
        setProgress((completedCount / INITIAL_SUPPLIERS.length) * 100);
        
        if (completedCount === INITIAL_SUPPLIERS.length) {
          setIsSearching(false);
          if (!isOneWay) {
            setFlightsMap(prev => ({ ...prev, "99": JSON_MOCK_DATA.flightsBySegment["99"] }));
            setActiveTab('99'); // Pula pra aba de combinados como o ARIA sugere
          } else {
            setActiveTab('0');
          }
          pendingTimeoutsRef.current = [];
        }
      }, delay);

      pendingTimeoutsRef.current.push(timeoutId);
    });
  };

  const openTariffSummary = () => {
    const isOneWay = searchCriteria.tripType === 'oneway';
    const canOpenSummary = isOneWay
      ? Boolean(selectedFares.segments["0"])
      : Boolean(selectedFares.combined || (selectedFares.segments["0"] && selectedFares.segments["1"]));
    if (canOpenSummary) {
      setCurrentScreen('summary');
    }
  };

  const chooseAriaRecommendedFare = (selection) => {
    if (!selection) return;

    if (selection.isCombined) {
      setSelectedFares({
        segments: { "0": null, "1": null },
        combined: selection
      });
      return;
    }

    setSelectedFares(prev => ({
      segments: {
        ...prev.segments,
        [selection.segmentKey]: selection
      },
      combined: null
    }));
  };

  const sendAvailabilityByEmail = () => {
    setIsAvailabilityActionsOpen(false);
  };

  const printAvailability = () => {
    setIsAvailabilityActionsOpen(false);
    window.setTimeout(() => window.print(), 80);
  };

  const updateSupplierStatus = (id, status, count) => {
    setSuppliers(prev => prev.map(s => s.id === id ? { ...s, status, count } : s));
  };

  const activeFlights = flightsMap[activeTab] || [];

  const availabilityFilterOptions = useMemo(() => {
    const countBy = (getValue) => activeFlights.reduce((counts, flight) => {
      const value = getValue(flight);
      if (!value) return counts;
      counts[value] = (counts[value] || 0) + 1;
      return counts;
    }, {});

    const airlineCounts = countBy(getFlightMainAirline);
    const originCounts = countBy(getFlightFirstOrigin);
    const destinationCounts = countBy(getFlightLastDestination);

    const stopCounts = activeFlights.reduce((counts, flight) => {
      const totalStops = getFlightTotalStops(flight);
      const key = totalStops >= 2 ? '2' : String(totalStops);
      counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {});

    const featureCounts = activeFlights.reduce((counts, flight) => {
      ['baggage', 'seat', 'flex'].forEach(feature => {
        if (flight.Tarifas.some(fare => matchesFareFeature(fare, feature))) {
          counts[feature] = (counts[feature] || 0) + 1;
        }
      });
      return counts;
    }, {});

    const toOptions = (counts) => Object.entries(counts)
      .sort(([labelA], [labelB]) => labelA.localeCompare(labelB))
      .map(([label, count]) => ({ label, value: label, count }));

    return {
      airlines: toOptions(airlineCounts),
      origins: toOptions(originCounts),
      destinations: toOptions(destinationCounts),
      stops: [
        { label: 'Direto', value: '0', count: stopCounts['0'] || 0 },
        { label: '1 parada', value: '1', count: stopCounts['1'] || 0 },
        { label: '2+ paradas', value: '2', count: stopCounts['2'] || 0 }
      ],
      features: [
        { label: 'Bagagem inclusa', value: 'baggage', count: featureCounts.baggage || 0 },
        { label: 'Assento incluso', value: 'seat', count: featureCounts.seat || 0 },
        { label: 'Tarifa flexivel', value: 'flex', count: featureCounts.flex || 0 }
      ]
    };
  }, [activeFlights]);

  const activeFilterCount = [
    airlineFilter.length,
    stopsFilter.length,
    fareFeatureFilter.length,
    originFilter.length,
    destinationFilter.length,
    maxPrice < 5000 ? 1 : 0,
    maxDurationHours < 24 ? 1 : 0,
    departureWindow.from || departureWindow.to ? 1 : 0,
    arrivalWindow.from || arrivalWindow.to ? 1 : 0
  ].reduce((total, count) => total + Number(count || 0), 0);

  const selectedFareKeys = useMemo(() => {
    const keys = [
      selectedFares.combined?.key,
      selectedFares.segments["0"]?.key,
      selectedFares.segments["1"]?.key
    ].filter(Boolean);

    return new Set(keys);
  }, [selectedFares]);
  const filteredFlights = useMemo(() => {
    let filtered = activeFlights.filter(flight => {
      const minPrice = getFlightMinPrice(flight);
      if (minPrice > maxPrice) return false;

      const totalDuration = getFlightTotalDuration(flight);
      if (Math.ceil(totalDuration / 60) > maxDurationHours) return false;

      const totalStops = getFlightTotalStops(flight);
      if (stopsFilter.length > 0) {
        if (!stopsFilter.includes(totalStops.toString()) && !(stopsFilter.includes('2') && totalStops >= 2)) {
          return false;
        }
      }

      const mainAirline = getFlightMainAirline(flight);
      if (airlineFilter.length > 0 && !airlineFilter.includes(mainAirline)) {
        return false;
      }

      if (fareFeatureFilter.length > 0) {
        const hasRequestedFeatures = fareFeatureFilter.every(feature =>
          flight.Tarifas.some(fare => matchesFareFeature(fare, feature))
        );
        if (!hasRequestedFeatures) return false;
      }

      const origin = getFlightFirstOrigin(flight);
      if (originFilter.length > 0 && !originFilter.includes(origin)) {
        return false;
      }

      const destination = getFlightLastDestination(flight);
      if (destinationFilter.length > 0 && !destinationFilter.includes(destination)) {
        return false;
      }

      if (!isTimeWithinWindow(flight.Voos[0]?.SaidaTime, departureWindow)) {
        return false;
      }

      if (!isTimeWithinWindow(getFlightLastArrivalTime(flight), arrivalWindow)) {
        return false;
      }

      return true;
    });

    // Aplicando a ordenação com base no estado "sortBy"
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'price_asc':
        case 'price_bag_asc':
           return getFlightMinPrice(a) - getFlightMinPrice(b);
        case 'duration_asc':
           return getFlightTotalDuration(a) - getFlightTotalDuration(b);
        case 'stops_asc':
           return getFlightTotalStops(a) - getFlightTotalStops(b);
        case 'dep_early':
           return a.Voos[0].SaidaTime.localeCompare(b.Voos[0].SaidaTime);
        case 'dep_late':
           return b.Voos[0].SaidaTime.localeCompare(a.Voos[0].SaidaTime);
        case 'arr_early':
           return a.Voos[a.Voos.length-1].ChegadaTime.localeCompare(b.Voos[b.Voos.length-1].ChegadaTime);
        case 'arr_late':
           return b.Voos[b.Voos.length-1].ChegadaTime.localeCompare(a.Voos[a.Voos.length-1].ChegadaTime);
        default:
           return 0; // Ordenações combinadas complexas podem ser customizadas aqui
      }
    });

    return filtered;
  }, [
    activeFlights,
    maxPrice,
    maxDurationHours,
    stopsFilter,
    airlineFilter,
    fareFeatureFilter,
    originFilter,
    destinationFilter,
    departureWindow,
    arrivalWindow,
    sortBy
  ]);

  const successCount = suppliers.filter(s => s.status === 'success').length;
  const warningCount = suppliers.filter(s => s.status === 'warning').length;
  const tripType = searchCriteria.tripType || DEFAULT_SEARCH_CRITERIA.tripType;
  const isOneWayTrip = tripType === 'oneway';

  const FilterContent = () => (
    <>
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 lg:hidden">
         <h2 className="text-lg font-bold text-[#0f2b60] flex items-center gap-2"><SlidersHorizontal className="w-5 h-5"/> Filtros</h2>
      </div>
      
      <div className="dv-filter-section">
        <div className="dv-filter-title">Cia aérea</div>
        <label className="dv-checkbox-label">
          <input type="checkbox" checked={airlineFilter.includes('LATAM')} onChange={() => handleAirlineToggle('LATAM')} /> LATAM
        </label>
        <label className="dv-checkbox-label">
          <input type="checkbox" checked={airlineFilter.includes('GOL')} onChange={() => handleAirlineToggle('GOL')} /> GOL
        </label>
        <label className="dv-checkbox-label">
          <input type="checkbox" checked={airlineFilter.includes('Azul')} onChange={() => handleAirlineToggle('Azul')} /> Azul
        </label>
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Classe / assentos</div>
        <label className="dv-checkbox-label"><input type="checkbox" /> Econômica</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> Executiva</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> Primeira Classe</label>
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Faixa de preço</div>
        <div className="flex justify-between text-[11px] text-gray-500 font-bold mb-2">
           <span>R$ 500</span>
           <span>R$ {maxPrice}</span>
        </div>
        <input type="range" min="500" max="5000" step="100" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="dv-range-input" />
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Duração</div>
        <div className="flex justify-between text-[11px] text-gray-500 font-bold mb-2">
           <span>0h</span>
           <span>24h</span>
        </div>
        <input type="range" min="0" max="24" step="1" defaultValue="24" className="dv-range-input" />
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Horário de saída</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase">De</span>
            <input type="time" className="w-full mt-1 p-1.5 border border-gray-200 rounded text-xs text-gray-700" />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase">Até</span>
            <input type="time" className="w-full mt-1 p-1.5 border border-gray-200 rounded text-xs text-gray-700" />
          </div>
        </div>
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Horário de chegada</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase">De</span>
            <input type="time" className="w-full mt-1 p-1.5 border border-gray-200 rounded text-xs text-gray-700" />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase">Até</span>
            <input type="time" className="w-full mt-1 p-1.5 border border-gray-200 rounded text-xs text-gray-700" />
          </div>
        </div>
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Conexões</div>
        <label className="dv-checkbox-label">
          <input type="checkbox" checked={stopsFilter.includes('0')} onChange={() => handleStopsToggle('0')} /> Direto
        </label>
        <label className="dv-checkbox-label">
          <input type="checkbox" checked={stopsFilter.includes('1')} onChange={() => handleStopsToggle('1')} /> 1 parada
        </label>
        <label className="dv-checkbox-label">
          <input type="checkbox" checked={stopsFilter.includes('2')} onChange={() => handleStopsToggle('2')} /> 2+ paradas
        </label>
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Escalas</div>
        <label className="dv-checkbox-label"><input type="checkbox" /> Sem escala</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> 1 escala</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> 2+ escalas</label>
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Aeroporto de origem</div>
        <label className="dv-checkbox-label"><input type="checkbox" /> GIG - Galeão</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> SDU - Santos Dumont</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> CGH - Congonhas</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> GRU - Guarulhos</label>
      </div>

      <div className="dv-filter-section">
        <div className="dv-filter-title">Aeroporto de destino</div>
        <label className="dv-checkbox-label"><input type="checkbox" /> GRU - Guarulhos</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> CGH - Congonhas</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> GIG - Galeão</label>
        <label className="dv-checkbox-label"><input type="checkbox" /> SDU - Santos Dumont</label>
      </div>
    </>
  );

  const AvailabilityFilterSection = ({ id, title, icon, children }) => {
    const isExpanded = expandedAvailabilityFilters[id];

    return (
      <section className="dv-availability-filter-section">
        <button
          type="button"
          className="dv-availability-filter-section__header"
          aria-expanded={isExpanded}
          onClick={() => toggleAvailabilityFilter(id)}
        >
          <span className="dv-availability-filter-section__label">
            <span className="q-icon">{icon}</span>
            <span>{title}</span>
          </span>
          <span className="q-icon dv-availability-filter-section__chevron">{isExpanded ? 'expand_less' : 'expand_more'}</span>
        </button>
        {isExpanded && <div className="dv-availability-filter-section__body">{children}</div>}
      </section>
    );
  };

  const AvailabilityCheckbox = ({ label, count, checked, onChange }) => (
    <label className="dv-availability-checkbox">
      <span className="dv-availability-checkbox__main">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span>{label}</span>
      </span>
      {typeof count === 'number' && <span className="dv-availability-checkbox__count">{count}</span>}
    </label>
  );

  const AvailabilityEmptyFilter = ({ label = 'Sem dados para esta aba' }) => (
    <span className="dv-availability-filter-empty">{label}</span>
  );

  const TimeRangeFields = ({ value, onChange }) => (
    <div className="dv-availability-time-row">
      <label className="dv-availability-time-field">
        <span>De</span>
        <input type="time" value={value.from} onChange={(event) => onChange(prev => ({ ...prev, from: event.target.value }))} />
      </label>
      <label className="dv-availability-time-field">
        <span>Ate</span>
        <input type="time" value={value.to} onChange={(event) => onChange(prev => ({ ...prev, to: event.target.value }))} />
      </label>
    </div>
  );

  const AvailabilityFilterContent = () => (
    <div className="dv-availability-filter">
      <header className="dv-availability-filter__header">
        <div className="dv-availability-filter__title">
          <span className="q-icon">tune</span>
          <span>Filtros</span>
          {activeFilterCount > 0 && <span className="dv-availability-filter__counter">{activeFilterCount}</span>}
        </div>
        <button type="button" className="dv-availability-filter__clear" onClick={clearFilters} aria-label="Limpar filtros">
          <span className="q-icon">backspace</span>
        </button>
      </header>

      <div className="dv-availability-filter__content">
        <AvailabilityFilterSection id="airlines" title="Companhias aereas" icon="flight">
          {availabilityFilterOptions.airlines.length > 0 ? (
            availabilityFilterOptions.airlines.map(option => (
              <AvailabilityCheckbox
                key={option.value}
                label={option.label}
                count={option.count}
                checked={airlineFilter.includes(option.value)}
                onChange={() => handleAirlineToggle(option.value)}
              />
            ))
          ) : (
            <AvailabilityEmptyFilter />
          )}
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="class" title="Classe e assentos" icon="airline_seat_recline_normal">
          {availabilityFilterOptions.features.map(option => (
            <AvailabilityCheckbox
              key={option.value}
              label={option.label}
              count={option.count}
              checked={fareFeatureFilter.includes(option.value)}
              onChange={() => handleFareFeatureToggle(option.value)}
            />
          ))}
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="price" title="Faixa de preco" icon="payments">
          <div className="dv-availability-range">
            <div className="dv-availability-range__values">
              <span>R$ 500</span>
              <strong>R$ {maxPrice.toLocaleString('pt-BR')}</strong>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="dv-range-input"
            />
          </div>
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="duration" title="Duracao da viagem" icon="schedule">
          <div className="dv-availability-range">
            <div className="dv-availability-range__values">
              <span>0h</span>
              <strong>{maxDurationHours}h</strong>
            </div>
            <input
              type="range"
              min="1"
              max="24"
              step="1"
              value={maxDurationHours}
              onChange={(event) => setMaxDurationHours(Number(event.target.value))}
              className="dv-range-input"
            />
          </div>
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="connections" title="Conexoes" icon="connecting_airports">
          {availabilityFilterOptions.stops.map(option => (
            <AvailabilityCheckbox
              key={option.value}
              label={option.label}
              count={option.count}
              checked={stopsFilter.includes(option.value)}
              onChange={() => handleStopsToggle(option.value)}
            />
          ))}
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="stops" title="Escalas" icon="route">
          {availabilityFilterOptions.stops.map(option => (
            <AvailabilityCheckbox
              key={option.value}
              label={option.label === 'Direto' ? 'Sem escala' : option.label}
              count={option.count}
              checked={stopsFilter.includes(option.value)}
              onChange={() => handleStopsToggle(option.value)}
            />
          ))}
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="departureTime" title="Horario de saida" icon="flight_takeoff">
          <TimeRangeFields value={departureWindow} onChange={setDepartureWindow} />
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="arrivalTime" title="Horario de chegada" icon="flight_land">
          <TimeRangeFields value={arrivalWindow} onChange={setArrivalWindow} />
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="originAirport" title="Origem" icon="trip_origin">
          {availabilityFilterOptions.origins.length > 0 ? (
            availabilityFilterOptions.origins.map(option => (
              <AvailabilityCheckbox
                key={option.value}
                label={option.label}
                count={option.count}
                checked={originFilter.includes(option.value)}
                onChange={() => handleOriginToggle(option.value)}
              />
            ))
          ) : (
            <AvailabilityEmptyFilter />
          )}
        </AvailabilityFilterSection>

        <AvailabilityFilterSection id="destAirport" title="Destino" icon="place">
          {availabilityFilterOptions.destinations.length > 0 ? (
            availabilityFilterOptions.destinations.map(option => (
              <AvailabilityCheckbox
                key={option.value}
                label={option.label}
                count={option.count}
                checked={destinationFilter.includes(option.value)}
                onChange={() => handleDestinationToggle(option.value)}
              />
            ))
          ) : (
            <AvailabilityEmptyFilter />
          )}
        </AvailabilityFilterSection>
      </div>
    </div>
  );

  return (
    <div className="dv-app-container">
      <style dangerouslySetInnerHTML={{ __html: INJECTED_CSS }} />

      {currentScreen === 'summary' ? (
        <TariffSummaryScreen
          selectedFares={selectedFares}
          flightsMap={flightsMap}
          searchCriteria={searchCriteria}
          onBack={() => setCurrentScreen('availability')}
          onChooseAriaRecommendation={chooseAriaRecommendedFare}
        />
      ) : (
      <>
      <SearchScreen
        criteria={searchCriteria}
        onCriteriaChange={handleCriteriaChange}
        onSubmit={startSearch}
        showFeaturedFlights={currentScreen === 'search'}
        inline
      />

      {currentScreen === 'availability' ? (
      <section className="dv-inline-results dv-inline-results--availability">
      <div className="dv-main-wrapper mt-4">
        {/* OVERLAY MOBILE PARA FILTROS */}
        {isDrawerOpen && (
          <div className="dv-filter-overlay" onClick={() => setIsDrawerOpen(false)}></div>
        )}

        {/* SIDEBAR DE FILTROS */}
        <aside className={`dv-sidebar ${isDrawerOpen ? 'is-drawer-open' : ''}`}>
          {isDrawerOpen && (
            <div className="dv-filter-drawer-header">
              <h2>Filtros</h2>
              <button type="button" onClick={() => setIsDrawerOpen(false)}><X className="w-5 h-5"/></button>
            </div>
          )}
          <div className="dv-filter-card">
            <AvailabilityFilterContent />
          </div>
        </aside>

        <div className="dv-content-area">
          <main className="dv-root !pt-0 !mt-0 !w-full" style={{ maxWidth: '100%', padding: 0 }}>
            
            {/* RECOMENDAÇÃO ARIA */}
            {!isOneWayTrip && !isSearching && flightsMap["99"].length > 0 && (
              <section className="dv-aria-card-panel aria-card">
                <div className="aria-card__body">
                  <div className="aria-card__identity">
                    <span className="aria-card__icon">
                      <span className="q-icon" style={{fontSize: 27}}>auto_awesome</span>
                    </span>
                    <span className="aria-card__copy">
                      <span className="aria-card__badge">
                        <span className="q-icon" style={{fontSize: 14}}>lightbulb</span> Recomendação ARIA
                      </span>
                      <span className="aria-card__title">Melhor combinação encontrada</span>
                      <span className="aria-card__subtitle">Ida pela LATAM e volta pela GOL equilibram menor duração, bagagem e preferência.</span>
                    </span>
                  </div>
                  <button className="aria-card__toggle">Ver recomendação <span className="q-icon">arrow_forward</span></button>
                  <ul className="aria-insights">
                    <li className="aria-insights__chip"><span className="q-icon">paid</span> R$ 430 mais barato</li>
                    <li className="aria-insights__chip"><span className="q-icon">schedule</span> Menor duração</li>
                    <li className="aria-insights__chip"><span className="q-icon">flight</span> Ida direta</li>
                  </ul>
                </div>
              </section>
            )}

            <section className="dv-header">
              <div className="dv-tabs-wrap">
                <div className="dv-tabs" role="tablist">
                  <button className="dv-tab" type="button" aria-selected={activeTab === '0'} onClick={() => setActiveTab('0')}>
                    <span className="q-icon">flight_takeoff</span>
                    <span className="dv-tab__copy">
                      <span className="dv-tab__title">Trecho 1</span>
                      <span className="dv-tab__subtitle">RIO -&gt; SAO</span>
                    </span>
                    <span className="dv-tab__count">{flightsMap["0"].length}</span>
                  </button>

                  {!isOneWayTrip && (
                    <>
                      <button className="dv-tab" type="button" aria-selected={activeTab === '1'} onClick={() => setActiveTab('1')}>
                        <span className="q-icon">flight_land</span>
                        <span className="dv-tab__copy">
                          <span className="dv-tab__title">Trecho 2</span>
                          <span className="dv-tab__subtitle">SAO -&gt; RIO</span>
                        </span>
                        <span className="dv-tab__count">{flightsMap["1"].length}</span>
                      </button>

                      <button className="dv-tab" type="button" aria-selected={activeTab === '99'} onClick={() => setActiveTab('99')}>
                        <span className="q-icon">connecting_airports</span>
                        <span className="dv-tab__copy"><span className="dv-tab__title">Voos Combinados</span></span>
                        <span className="dv-tab__count">{flightsMap["99"].length}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </section>

          {/* STATUS SISRES */}
          {(isSearching || progress > 0) && (
            <section className="dv-sisres">
              <button
                type="button"
                className="dv-sisres-summary"
                aria-expanded={!isSisResMinimized}
                onClick={() => setIsSisResMinimized(prev => !prev)}
              >
                <span className="dv-sisres-main">
                  {isSearching ? <Loader2 className="w-5 h-5 text-blue-500 animate-spin" /> : <span className="q-icon" style={{color: '#059669'}}>check_circle</span>}
                  <span className="dv-sisres-title">
                    {isSearching ? `Buscando em múltiplos fornecedores... ${Math.round(progress)}%` : `${successCount} sistemas concluídos, ${warningCount} com aviso`}
                  </span>
                </span>
                <span className="dv-sisres-actions">
                  <span className="dv-sisres-kpis hidden md:flex">
                    <span className="dv-kpi-item"><span className="dv-kpi-dot dv-kpi-dot--success"></span><span className="dv-kpi-value">{successCount}</span></span>
                    <span className="dv-kpi-item"><span className="dv-kpi-dot dv-kpi-dot--warning"></span><span className="dv-kpi-value">{warningCount}</span></span>
                  </span>
                  <span className="dv-sisres-toggle-icon" aria-hidden="true">
                    <span className="q-icon">{isSisResMinimized ? 'expand_more' : 'expand_less'}</span>
                  </span>
                </span>
              </button>

              {!isSisResMinimized && <div className="dv-sisres-content">
                <div className="dv-sisres-list">
                  {suppliers.map(s => (
                    <div key={s.id} className="dv-sisres-card">
                      <span className="dv-sisres-logo-wrap">
                        <AirlineLogo code={s.id} name={s.name} className="dv-sisres-logo" fallbackClassName="dv-sisres-logo-fallback" />
                      </span>
                      <span className={`dv-sisres-status dv-status--${s.status}`}>
                        {s.status === 'loading' && <Loader2 className="w-3 h-3 animate-spin" />}
                        {s.status === 'success' && <><span className="q-icon">check_circle</span> {s.count} voos</>}
                        {s.status === 'warning' && <><span className="q-icon">warning</span> Sem voos</>}
                        {s.status === 'idle' && <span className="text-gray-400">Aguardando</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>}
            </section>
          )}

          {/* TOOLBAR */}
          <div className="dv-toolbar">
            <div className="dv-toolbar__left">
              <button type="button" className="dv-filter-btn dv-filter-btn--mobile" onClick={() => setIsDrawerOpen(true)}>
                <span className="q-icon">filter_alt</span>
                Filtros
              </button>

              <select className="dv-sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)} title="Ordenar por">
                <option value="price_asc">Menor preço</option>
                <option value="price_bag_asc">Menor preço com bagagem</option>
                <option value="duration_asc">Menor duração</option>
                <option value="dep_early">Saída mais cedo</option>
                <option value="dep_late">Saída mais tarde</option>
                <option value="arr_early">Chegada mais cedo</option>
                <option value="arr_late">Chegada mais tarde</option>
                <option value="stops_asc">Menos paradas</option>
                {activeTab === '99' && (
                  <optgroup label="Ordenação extra para combinados">
                    <option value="comb_early_late">Ida cedo / volta tarde</option>
                    <option value="comb_late_early">Ida tarde / volta cedo</option>
                    <option value="comb_early_early">Ida cedo / volta cedo</option>
                    <option value="comb_late_late">Ida tarde / volta tarde</option>
                  </optgroup>
                )}
              </select>

              <button className="dv-icon-btn" title="Dividir por faixa de horário">
                <span className="q-icon">schedule</span>
              </button>
            </div>
            
            <div className="dv-toolbar__right">
              <div className="dv-toolbar-menu" onBlur={() => window.setTimeout(() => setIsAvailabilityActionsOpen(false), 120)}>
                <button
                  type="button"
                  className={`dv-icon-btn ${isAvailabilityActionsOpen ? 'dv-icon-btn--active' : ''}`}
                  title="Opções adicionais"
                  aria-haspopup="menu"
                  aria-expanded={isAvailabilityActionsOpen}
                  onClick={() => setIsAvailabilityActionsOpen(prev => !prev)}
                >
                  <span className="q-icon">more_vert</span>
                </button>
                {isAvailabilityActionsOpen && (
                  <div className="dv-toolbar-menu__dropdown" role="menu">
                    <button type="button" className="dv-toolbar-menu__item" role="menuitem" onMouseDown={(event) => event.preventDefault()} onClick={sendAvailabilityByEmail}>
                      <span className="q-icon">mail</span>
                      Enviar por email
                    </button>
                    <button type="button" className="dv-toolbar-menu__item" role="menuitem" onMouseDown={(event) => event.preventDefault()} onClick={printAvailability}>
                      <span className="q-icon">print</span>
                      Imprimir disponibilidade
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CALENDAR SHOP */}
          {!isSearching && flightsMap["0"].length > 0 && (
            <section className="dv-calendar-shop">
              <div className="dv-calendar-shop__header">
                <div className="dv-calendar-shop__heading">
                  <span className="dv-calendar-shop__header-bar"></span>
                  <h3 className="dv-calendar-shop__title">Melhores tarifas para <span className="dv-calendar-shop__title-month">maio</span></h3>
                </div>
              </div>
              <div className="dv-calendar-shop__list">
                <button className="dv-calendar-shop__item">
                  <span className="dv-calendar-shop__fare-delta"><span className="q-icon">trending_down</span> 9%</span>
                  <span className="dv-calendar-shop__date-line"><span className="dv-calendar-shop__date">ter, 12 mai</span></span>
                  <span className="dv-calendar-shop__fare"><span className="dv-calendar-shop__company"><AirlineLogo name="GOL" className="dv-calendar-shop__logo" /></span><span className="dv-calendar-shop__price-group dv-calendar-shop__price-group--best"><span className="dv-calendar-shop__price-symbol">R$</span><span className="dv-calendar-shop__price-integer">1.888</span></span></span>
                </button>
                <button className="dv-calendar-shop__item dv-calendar-shop__item--segment-date-marker">
                  <span className="dv-calendar-shop__date-line"><span className="dv-calendar-shop__date">qui, 14 mai</span></span>
                  <span className="dv-calendar-shop__fare"><span style={{fontSize:17, fontWeight:800}}>R$ 2.188</span></span>
                </button>
                <button className="dv-calendar-shop__item dv-calendar-shop__item--active">
                  <span className="dv-calendar-shop__date-line"><span className="dv-calendar-shop__date">sex, 15 mai</span></span>
                  <span className="dv-calendar-shop__fare"><span className="dv-calendar-shop__company"><AirlineLogo name="LATAM" className="dv-calendar-shop__logo" /></span><span className="dv-calendar-shop__price-group"><span className="dv-calendar-shop__price-symbol">R$</span><span className="dv-calendar-shop__price-integer">2.216</span></span></span>
                </button>
              </div>
            </section>
          )}

        {/* LISTA DE VOOS */}
        <div className="lista-voos-container">
           {isSearching && (
             <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm mt-4">
               <Loader2 className="w-10 h-10 text-[#143479] animate-spin mx-auto mb-4" />
               <p className="text-[#143479] font-bold animate-pulse">Consultando disponibilidade nos sistemas...</p>
             </div>
           )}

           {!isSearching && activeFlights.length === 0 && (
             <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 border-dashed mt-4">
                <Plane className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Preencha os dados e clique em buscar para iniciar.</p>
             </div>
           )}

           {!isSearching && activeFlights.length > 0 && filteredFlights.length === 0 && (
             <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 mt-4">
                <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Nenhum voo encontrado com os filtros atuais.</p>
                <button onClick={clearFilters} className="mt-2 text-[#428f70] font-bold hover:underline">Limpar filtros</button>
             </div>
           )}

           {!isSearching && filteredFlights.length > 0 && (
             <div className="flights-grid">
               {filteredFlights.map((flight, index) => (
                 <FlightCard
                   key={flight.IdViagem || index}
                   flight={flight}
                   onSelectFare={selectFare}
                   selectedFareKeys={selectedFareKeys}
                 />
               ))}
             </div>
           )}
        </div>
        </main>
        </div>
        <SelectionPanel selectedFares={selectedFares} tripType={tripType} onClear={clearSelectedFares} onTarifar={openTariffSummary} />
      </div>
      </section>
      ) : null}
      </>
      )}
    </div>
  );
}
