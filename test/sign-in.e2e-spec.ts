import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('yanbr763@gmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const responsePromise = page.waitForResponse(
    (response) => response.url().includes('/authenticate'),
    { timeout: 10000 },
  )

  const response = await responsePromise

  if (response.status() !== 200) {
    throw new Error(`Unexpected response status: ${response.status()}`)
  }

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail',
  )

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')

  await page.waitForTimeout(2000)
})
