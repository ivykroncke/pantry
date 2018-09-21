const express = require('express')
const router = express.Router({ mergeParams: true })
const { Week } = require('../db/schema')