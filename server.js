const express = require('express');
const Database = require('better-sqlite3');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const path = require('path');
const os = require('os');