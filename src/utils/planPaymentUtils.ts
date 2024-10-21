
export const selectPlan = (plan: string) => {
    const planNames: { [key: string]: string } = {
        silver: 'Silver',
        gold: 'Gold',
        diamond: 'Diamond'
    };

    const selectedPlanElement = document.getElementById('selected-plan');
    const paymentSectionElement = document.getElementById('payment-section');

    if (selectedPlanElement) {
        selectedPlanElement.textContent = planNames[plan];
    }

    if (paymentSectionElement) {
        paymentSectionElement.classList.remove('hidden');
    }
};
