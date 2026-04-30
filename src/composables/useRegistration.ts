import { ref, computed } from 'vue';
import type { ICTClass, Registration } from '../types';
import { CLASSES } from '../data/classes';

export function useRegistration() {
  const classes = ref<ICTClass[]>(CLASSES);
  const selectedClassId = ref<string>('');
  
  const form = ref<Omit<Registration, 'totalFee'>>({
    studentName: '',
    studentEmail: '',
    classId: '',
    isCustom: false,
    customTime: ''
  });

  const selectedClass = computed(() => 
    classes.value.find(c => c.id === selectedClassId.value)
  );

  const isFull = computed(() => 
    selectedClass.value ? selectedClass.value.currentStudents >= selectedClass.value.capacity : false
  );

  const CUSTOM_FEE = 15000; // Flat additional fee for custom registration

  const totalFee = computed(() => {
    if (!selectedClass.value) return 0;
    let fee = selectedClass.value.price;
    if (form.value.isCustom) {
      fee += CUSTOM_FEE;
    }
    return fee;
  });

  const resetForm = () => {
    form.value = {
      studentName: '',
      studentEmail: '',
      classId: '',
      isCustom: false,
      customTime: ''
    };
    selectedClassId.value = '';
  };

  const register = async () => {
    if (isFull.value && !form.value.isCustom) {
      alert('This class is full. Please choose another or try custom registration.');
      return;
    }

    // Mock API call
    console.log('Registering...', { ...form.value, totalFee: totalFee.value });
    
    // Simulate updating current students if not custom (custom might be separate)
    if (selectedClass.value && !form.value.isCustom) {
      selectedClass.value.currentStudents++;
    }

    alert(`Registration successful for ${form.value.studentName}!`);
    resetForm();
  };

  return {
    classes,
    selectedClassId,
    selectedClass,
    form,
    totalFee,
    isFull,
    register,
    resetForm
  };
}
