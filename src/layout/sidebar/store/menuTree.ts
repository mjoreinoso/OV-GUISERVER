import inspectionSetup from '@/assets/sidebarIcons/inspectionSetup.svg'

export const menuTree = {
  'inspection-setup': {
    label: 'Inspection Setup',
    icon: inspectionSetup,
    children: {
      osw: {
        label: 'Outer Sidewall', // ahora puedes cambiarlo a lo que quieras
        children: {
          image: { label: 'Image' },
          strobeSetup: { label: 'Strobe Setup' }
        }
      },
      rld: {
        label: 'Residual Liquid Detection', // también editable
        children: {
          ir: { label: 'IR' },
          rf: { label: 'RF' }
        }
      }
    }
  }
}
