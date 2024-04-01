const NewLessonForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end">
            <div className="w-full md:w-2/3 lg:w-1/2 bg-white rounded-t-3xl p-6 overflow-auto" style={{ maxHeight: "70%" }}>
                <h2 className="text-xl font-bold mb-4">Add a New Lesson</h2>
                {/* Your form fields here */}
                <button
                    onClick={onClose}
                    className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default NewLessonForm;