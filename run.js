// api/run.js  (plain Node runtime on Vercel)
import { execSync } from 'child_process';

export default function handler(req, res) {
  try {
    // Run the bot once and return stdout
    const out = execSync('node src/searcher.js', { encoding: 'utf8', timeout: 30000 });
    res.status(200).send(out);
  } catch (e) {
    res.status(500).send(e.message || 'Error running bot');
  }
}
