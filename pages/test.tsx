import { motion } from 'framer-motion';

const IndexPage = () => {
    return (
        <div>
            <motion.div
                className="h-screen"
                initial={{ backgroundColor: '#FF008C' }}
                animate={{ backgroundColor: '#7928CA' }}
                transition={{ duration: 0.5 }}
            />
            <motion.div
                className="h-screen"
                initial={{ backgroundColor: '#7928CA' }}
                animate={{ backgroundColor: '#FF8C00' }}
                transition={{ duration: 0.5 }}
            />
            <motion.div
                className="h-screen"
                initial={{ backgroundColor: '#FF8C00' }}
                animate={{ backgroundColor: '#FF008C' }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
};

export default IndexPage;
