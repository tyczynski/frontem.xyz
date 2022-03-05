import Link from './Link'
import { footer } from '~/data/site'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div
          style={{ whiteSpace: 'break-spaces' }}
          className="mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400 break-space"
        >
          <a target="_blank" rel="noreferrer" href={footer.copyrightAuthorUrl}>
            {footer.copyrightAuthor}
          </a>{' '}
          {` • `} {footer.copyright}
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
