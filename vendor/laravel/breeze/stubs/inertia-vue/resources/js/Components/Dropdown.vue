<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    align: {
        default: 'right',
    },
    width: {
        default: '48',
    },
    contentClasses: {
        default: () => ['py-1', 'bg-white dark:bg-gray-700'],
    },
});

const closeOnEscape = (e) => {
    if (open.value && e.key === 'Escape') {
        open.value = false;
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

const widthClass = computed(() => {
    return {
        48: 'w-48',
    }[props.width.toString()];
});

const alignmentClasses = computed(() => {
    if (props.align === 'left') {
        return 'origin-top-left left-0';
    } else if (props.align === 'right') {
        return 'origin-top-right right-0';
    } else {
        return 'origin-top';
    }
});

const open = ref(false);
</script>

<template>
    <div className="relative">
        <div @click="open = !open">
            <slot name="trigger" />
        </div>

        <!-- Full Screen Dropdown Overlay -->
        <div v-show="open" className="fixed inset-0 z-40" @click="open = false"></div>

        <transition
            enter-active-className="transition ease-out duration-200"
            enter-from-className="transform opacity-0 scale-95"
            enter-to-className="transform opacity-100 scale-100"
            leave-active-className="transition ease-in duration-75"
            leave-from-className="transform opacity-100 scale-100"
            leave-to-className="transform opacity-0 scale-95"
        >
            <div
                v-show="open"
                className="absolute z-50 mt-2 rounded-md shadow-lg"
                :className="[widthClass, alignmentClasses]"
                style="display: none"
                @click="open = false"
            >
                <div className="rounded-md ring-1 ring-black ring-opacity-5" :className="contentClasses">
                    <slot name="content" />
                </div>
            </div>
        </transition>
    </div>
</template>
