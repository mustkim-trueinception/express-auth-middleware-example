import express from 'express'
import onbaordingRoutes from './routes/onboarding'
import userRoutes from './routes/users'
import admin from './routes/admin'
import mongoose from 'mongoose'
import { vars } from './env'

const app = express()

const port = 3000

app.use(express.json())
app.use('/onboarding', onbaordingRoutes)
app.use('/user', userRoutes)
app.use('/admin', admin)

mongoose
	.connect(vars.MONGODB_URI)
	.then(() => {
		console.log('Connected to MongoDB')
		app.listen(port, () => {
			console.log(
				`Example app listening on port http://localhost:${port}`
			)
		})
	})
	.catch((err) => {
		console.log(err)
	})
