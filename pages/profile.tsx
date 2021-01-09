import Link from 'next/link'
import { motion } from 'framer-motion'

function Profile() {
  return (
    <div className="bg-gray-100 p-3 flex items-center justify-center w-screen h-screen">
      <motion.div layoutId="container" className="bg-white border shadow-sm p-5 rounded-lg max-w-lg">
          <motion.img layoutId="user-img" className="h-256 w-256 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
          <span className="text-2xl cursor-pointer font-semibold mt-3">Dallin Baumbach</span>
      </motion.div>
    </div>
  );
}

export default Profile