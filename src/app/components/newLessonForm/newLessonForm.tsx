import React from "react";
import {Input} from "@nextui-org/react";

const NewLessonForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <div className={`fixed inset-0 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`} style={{ zIndex: 40 }}>
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} style={{ zIndex: 50 }}></div>
            <div className="flex justify-center items-end h-full">
                <div className={`w-full md:w-2/3 lg:w-1/2 bg-white rounded-t-3xl text-primary-content p-6 overflow-auto transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} style={{ maxHeight: "70%", zIndex: 60 }}>
                    <h2 className="text-xl font-bold mb-4">Add a New Lesson</h2>
                    <h3 className={"text-lg font-semibold mb-4 "}>Course name: </h3>
                    <div className={'flex w-full h-10 flex-wrap md:flex-nowrap gap-4'}>
                        <Input variant={'bordered'} color={"default"} size={"lg"} labelPlacement={"inside"} label={'Course Name'} />
                    </div>
                    
                    <button
                        onClick={onClose}
                        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
export default NewLessonForm;