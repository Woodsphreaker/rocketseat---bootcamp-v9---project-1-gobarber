import Bee from 'bee-queue'
import redisConfig from '../config/redis'
import CancellationMail from '../app/jobs/cancellationMail'

// Jobs
const jobs = [CancellationMail]

class Queue {
  constructor() {
    this.queues = {}

    this.init()
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      }
    })
  }

  add(queue, jobs) {
    return this.queues[queue].bee.createJob(jobs).save()
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key]
      bee.process(handle)
    })
  }
}

export default new Queue()
