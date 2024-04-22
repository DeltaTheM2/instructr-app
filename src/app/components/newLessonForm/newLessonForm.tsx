import React, { useState } from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import WeekdaySelection from "@/app/components/weekdaySelection/weekdaySelection";
import CreateLessonPlan from "@/app/components/OpenAI/CreateLessonPlan";

const NewLessonForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");

    const handleFormSubmit = async () => {
        // Assuming `CreateLessonPlan` needs the course name, description, and duration as a combined message.
        const message = `Name: ${name}, Description: ${description}, Duration: ${duration}`;
        await CreateLessonPlan(message);
        onClose(); // Optionally close the modal after submission
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="bottom" backdrop="blur" size="5xl">
            <ModalContent>
                <ModalHeader>Set up a lesson plan</ModalHeader>
                <ModalBody>
                    <Input
                        autoFocus
                        label="Course Name"
                        variant="bordered"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Textarea
                        label="Description"
                        size="lg"
                        variant="bordered"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="flex items-center gap-4">
                        <WeekdaySelection />
                        <Input
                            label="Course Length"
                            variant="bordered"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onPress={handleFormSubmit}>
                        Generate
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default NewLessonForm;
