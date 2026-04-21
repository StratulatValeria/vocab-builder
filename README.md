<!-- шпора -->

<Input
{...register('email')}
placeholder="Email"
error={errors.email?.message}
/>

<Input
{...register('password')}
type="password"
placeholder="Password"
error={errors.password?.message}
/>

<Select 
  options={categories} 
  value={selected} 
  onChange={setSelected} 
  className={styles.categoriesSelect} 
/>

<Modal isOpen={isAddOpen} onClose={closeAdd}>
   <AddWordForm /> {/*  начинка */}
</Modal>
